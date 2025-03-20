import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientDetails from "./ClientDetails";
import SpouseDetails from "./SpouseDetails";
import NextOfKinDetails from "./NextOfKinDetails";
import BusinessDetails from "./BusinessDetails";
import LoanDetails from "./LoanDetails";
import BusinessReferees from "./BusinessReferees";
import BankingDetails from "./BankingDetails";
import BranchSelection from "./BranchSelection";
import Declaration from "./Declaration";
import Logo from "../assets/spacebucks submark.png";

const steps = [
  { path: "/form-steps/client-details", label: "Principal Member’s Details", component: <ClientDetails /> },
  { path: "/form-steps/spouse-details", label: "Spouse Details", component: <SpouseDetails /> },
  { path: "/form-steps/next-of-kin-details", label: "Next of Kin Details", component: <NextOfKinDetails /> },
  { path: "/form-steps/business-details", label: "Employer's Details", component: <BusinessDetails /> },
  { path: "/form-steps/loan-details", label: "Packages", component: <LoanDetails /> },
  { path: "/form-steps/business-referees", label: "Family or Other Dependants Details", component: <BusinessReferees /> },
  { path: "/form-steps/banking-details", label: "Banking Details", component: <BankingDetails /> },
  { path: "/form-steps/branch-selection", label: "Branch Selection", component: <BranchSelection /> },
  { path: "/form-steps/declaration", label: "Declaration", component: <Declaration /> },
];

const FormSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

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

  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 100;
    const y = (e.clientY / innerHeight) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className="min-h-screen bg-gray-900 text-gray-200"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(
          at ${position.x}% ${position.y}%,
          rgb(214, 210, 233),
          rgb(238, 225, 225)
        )`,
      }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 justify-center p-4">
        <img src={Logo} alt="Logo" className="h-20" />
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mx-auto bg-gray-700 rounded-full h-2.5 mb-6">
        <div
          className="bg-red-600 h-2.5 rounded-full"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>

      {/* Current Step Label */}
      <div className="text-center text-sm text-gray-800 mb-4">
        Step {currentStep + 1} of {steps.length}: {steps[currentStep]?.label}
      </div>

      {/* Render Current Step Component */}
      <main className="p-6">{steps[currentStep]?.component}</main>

      {/* Navigation Buttons */}
      <div className="flex justify-between p-4">
        <button
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
            onClick={handleNext}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => alert("Form submitted!")}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default FormSteps;