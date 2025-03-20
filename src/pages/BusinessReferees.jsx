import React, { useState } from "react";

const BusinessReferees = ({ formData, updateFormData }) => {
  // Initialize state with formData from parent or default to one dependant
  const [dependants, setDependants] = useState(formData.dependants || [{ id: 1, name: "", dob: "", idNumber: "", relationship: "", address: "", phone: "" }]);

  // Handle form field changes
  const handleChange = (index, field, value) => {
    const updatedDependants = dependants.map((dep, i) =>
      i === index ? { ...dep, [field]: value } : dep
    );
    setDependants(updatedDependants);
    updateFormData("dependants", updatedDependants);
  };

  // Add new dependant
  const addDependant = () => {
    const newDependant = {
      id: dependants.length + 1,
      name: "",
      dob: "",
      idNumber: "",
      relationship: "",
      address: "",
      phone: "",
    };
    const updatedDependants = [...dependants, newDependant];
    setDependants(updatedDependants);
    updateFormData("dependants", updatedDependants);
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Family or Other Dependants Details</h3>
      {dependants.map((dependant, index) => (
        <div key={dependant.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-name`}>
              Full Name
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              name={`dependant${dependant.id}-name`}
              id={`dependant${dependant.id}-name`}
              value={dependant.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-dob`}>
              Date of Birth
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="date"
              name={`dependant${dependant.id}-dob`}
              id={`dependant${dependant.id}-dob`}
              value={dependant.dob}
              onChange={(e) => handleChange(index, "dob", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-idNumber`}>
              ID Number
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              name={`dependant${dependant.id}-idNumber`}
              id={`dependant${dependant.id}-idNumber`}
              value={dependant.idNumber}
              onChange={(e) => handleChange(index, "idNumber", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-relationship`}>
              Relationship
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              name={`dependant${dependant.id}-relationship`}
              id={`dependant${dependant.id}-relationship`}
              value={dependant.relationship}
              onChange={(e) => handleChange(index, "relationship", e.target.value)}
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-address`}>
              Physical Address
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              name={`dependant${dependant.id}-address`}
              id={`dependant${dependant.id}-address`}
              value={dependant.address}
              onChange={(e) => handleChange(index, "address", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-phone`}>
              Cellphone No.
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="tel"
              name={`dependant${dependant.id}-phone`}
              id={`dependant${dependant.id}-phone`}
              value={dependant.phone}
              onChange={(e) => handleChange(index, "phone", e.target.value)}
              required
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        className="mt-4 p-2 bg-blue-600 text-white rounded-md"
        onClick={addDependant}
      >
        Add Another Dependant
      </button>
    </div>
  );
};

export default BusinessReferees;
