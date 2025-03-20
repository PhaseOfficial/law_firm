import React, { useState } from "react";

const SpouseDetails = ({ formData, updateFormData }) => {
  // Initialize state with formData from parent
  const [spouseDetails, setSpouseDetails] = useState(formData.spouseDetails || {});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = { ...spouseDetails, [name]: value };
    setSpouseDetails(updatedDetails);
    updateFormData("spouseDetails", updatedDetails); // Update parent state
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Spouse Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="spouse_first_name">
            First Name
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="spouse_first_name"
            id="spouse_first_name"
            value={spouseDetails.spouse_first_name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="spouse_surname">
            Surname
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="spouse_surname"
            id="spouse_surname"
            value={spouseDetails.spouse_surname || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="spouse_id">
            ID Number
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="spouse_id"
            id="spouse_id"
            value={spouseDetails.spouse_id || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="spouse_cellphone">
            Cellphone No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="tel"
            name="spouse_cellphone"
            id="spouse_cellphone"
            value={spouseDetails.spouse_cellphone || ""}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default SpouseDetails;
