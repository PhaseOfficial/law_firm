import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/supabaseClient";
import ClientDetails from "../pages/ClientDetails";
import SpouseDetails from "../pages/SpouseDetails";
import NextOfKinDetails from "../pages/NextOfKinDetails";
import BusinessDetails from "../pages/BusinessDetails";
import LoanDetails from "../pages/LoanDetails";
import BusinessReferees from "../pages/BusinessReferees";
import BankingDetails from "../pages/BankingDetails";
import BranchSelection from "../pages/BranchSelection";
import Declaration from "../pages/Declaration";
import Logo from "../assets/spacebucks submark.png";

const FormSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bankDetails: {}
  });

  const updateFormData = (step, data) => {
    setFormData(prev => ({ ...prev, [step]: data }));
  };

  const steps = [
    { 
      path: "/form-steps/client-details", 
      label: "Principal Member’s Details", 
      component: <ClientDetails formData={formData} updateFormData={updateFormData}/> 
    },
    { 
      path: "/form-steps/spouse-details", 
      label: "Spouse Details", 
      component: <SpouseDetails formData={formData} updateFormData={updateFormData}/> 
    },
    { 
      path: "/form-steps/next-of-kin-details", 
      label: "Next of Kin Details", 
      component: <NextOfKinDetails formData={formData} updateFormData={updateFormData}/> 
    },
    { 
      path: "/form-steps/business-details", 
      label: "Employer's Details", 
      component: <BusinessDetails formData={formData} updateFormData={updateFormData}/> 
    },
    { 
      path: "/form-steps/loan-details", 
      label: "Packages", 
      component: <LoanDetails formData={formData} updateFormData={updateFormData}/> 
    },
    { 
      path: "/form-steps/business-referees", 
      label: "Family or Other Dependants Details", 
      component: <BusinessReferees formData={formData} updateFormData={updateFormData}/> 
    },
    { 
      path: "/form-steps/banking-details", 
      label: "Banking Details", 
      component: <BankingDetails formData={formData} updateFormData={updateFormData}/> 
    },
    { 
      path: "/form-steps/branch-selection", 
      label: "Branch Selection", 
      component: <BranchSelection formData={formData} updateFormData={updateFormData}/> 
    },
    { 
      path: "/form-steps/declaration", 
      label: "Declaration", 
      component: <Declaration formData={formData} updateFormData={updateFormData}/> 
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      navigate(steps[currentStep + 1].path);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      navigate(steps[currentStep - 1].path);
    }
  };

  // In handleSubmit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const { clientDetails, spouseDetails, kinDetails, businessDetails, loanDetails, dependants, signature, bankDetails,branch } = formData;

      const insertData = async (table, data) => {
        const { data: insertedData, error } = await supabase.from(table).insert([data]).select().single();
        if (error) {
          throw { message: `Error inserting into ${table}: ${error.message}`, code: error.code, details: error };
        }
        return insertedData;
      };

      const clientProfileData = await insertData('UserProfile', {
        full_name: clientDetails.name + ' ' + clientDetails.surname,
        dob: clientDetails.dob,
        national_id: clientDetails.id_number,
      });
      
      const employerProfileData = await insertData('UserProfile', {
        full_name: businessDetails.employer_name,
        email: businessDetails.employer_email || null,
        phone: businessDetails.employer_phone || null,
      });
      
      const nextOfKinProfileData = await insertData('UserProfile', {
        full_name: kinDetails.kin_first_name + ' ' + kinDetails.kin_surname,
        dob: kinDetails.kin_dob,
        national_id: kinDetails.kin_id_number,
      });
      
      const employerData = await insertData('Employer', {
        user_id: employerProfileData.id,
        ec_number: businessDetails.ec_number,
        address: businessDetails.employer_address,
      });
      
      const clientData = await insertData('Client', {
        user_id: clientProfileData.id,
        title: clientDetails.title,
        sex: clientDetails.sex,
        marital_status: spouseDetails ? 'Married' : 'Single',
        address: clientDetails.address,
        employer_id: employerData.id,
        national_id: clientDetails.id_number,
        dob: clientDetails.dob,
      });
      
      await insertData('NextOfKin', {
        client_id: clientData.id,
        user_id: nextOfKinProfileData.id,
        relationship: kinDetails.kin_relationship,
        address: kinDetails.kin_address,
      });
      
      await insertData('ClientSubscription', {
        client_id: clientData.id,
        plan: loanDetails.plan,
        date_joined: new Date(),
        individual_monthly: loanDetails.individual_monthly,
        family_monthly: loanDetails.family_monthly,
        coverage_limit: loanDetails.basic_cover_limit,
        payment_mode: 'Monthly',
        payment_frequency: 'Monthly',
      });

      // console.log(clientData.id);

      if (bankDetails) {
        await insertData('BankingDetails', {
          user_id: clientProfileData.id, 
          bank_name: bankDetails.bank_name,
          account_type: bankDetails.account_type,
          account_number: bankDetails.account_number,
          branch: branch
        });
      }

      
      // Create Dependants in UserProfile first, then link them to FamilyDependants
      if (dependants && dependants.length > 0) {
        for (const dependant of dependants) {
          console.log(dependant);
          const { data: dependantProfileData, error: dependantProfileError } = await supabase
            .from('UserProfile')
            .insert([
              {
                full_name: dependant.name,
                dob: dependant.dob,
                national_id: dependant.idNumber,
                phone: dependant.phone || null
              },
            ])
            .select()
            .single();
  
          if (dependantProfileError) throw dependantProfileError;

          console.log("dependant",dependantProfileData.id);
          console.log("client",clientData.id);
  
          const { error: familyDependantsError } = await supabase
            .from('FamilyDependants')
            .insert([
              {
                client_id: clientData.id,
                user_id: dependantProfileData.id,
              },
            ]);
          
  
          if (familyDependantsError) throw familyDependantsError;
          console.log(familyDependantsError);//
        }
      }

      alert("Form submitted successfully!");
      navigate("/form-steps");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Submission failed: ${error.message}\nDetails: ${JSON.stringify(error.details)}`);
    }
  };
  
  



  const position = {x: 50, y: 50}

  return (
    <div
      className="min-h-screen bg-gray-900 text-gray-200"
      style={{
        background: `radial-gradient(
          at ${position.x}% ${position.y}%,
          rgb(214, 210, 233),
          rgb(238, 225, 225)
        )`
      }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 justify-center p-4">
        <a href="/"><img src={Logo} alt='logo' className="w-32 "/></a>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mx-auto bg-gray-700 rounded-full h-2.5 mb-6">
        <div
          className="bg-red-600 h-2.5 rounded-full"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Current Step Label */}
      <div className="text-center text-sm text-gray-800 mb-4">
        Step {currentStep + 1} of {steps.length}: {steps[currentStep]?.label}
      </div>

      {/* Render Current Step Component */}
      <main className="p-6">
        <form onSubmit={handleSubmit}>
          {steps[currentStep]?.component}
          {/* Navigation Buttons */}
          <div className="flex justify-between p-4">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-4 py-2 ${
                currentStep === 0
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              } text-white rounded`}
            >
              Previous
            </button>
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </main>
    </div>
  );
};

export default FormSteps;