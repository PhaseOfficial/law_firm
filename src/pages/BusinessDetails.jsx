import React, { useState } from "react";

const BusinessDetails = ({ formData, updateFormData }) => {
  // Initialize state with formData from parent
  const [businessDetails, setBusinessDetails] = useState(formData.businessDetails || {});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = { ...businessDetails, [name]: value };
    setBusinessDetails(updatedDetails);
    updateFormData("businessDetails", updatedDetails); // Update parent state
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Employer's Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="employer_name">
            Name of Employer
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="employer_name"
            id="employer_name"
            value={businessDetails.employer_name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="ec_number">
            E C Number
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="ec_number"
            id="ec_number"
            value={businessDetails.ec_number || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="occupation">
            Occupation
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="occupation"
            id="occupation"
            value={businessDetails.occupation || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="employer_address">
            Employer's Physical Address
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="employer_address"
            id="employer_address"
            value={businessDetails.employer_address || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="employer_phone">
            Telephone No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="tel"
            name="employer_phone"
            id="employer_phone"
            value={businessDetails.employer_phone || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="employer_email">
            Email Address
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="email"
            name="employer_email"
            id="employer_email"
            value={businessDetails.employer_email || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
