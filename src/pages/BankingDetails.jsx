import React, { useState } from "react";

const BankingDetails = ({ formData, updateFormData }) => {
  // Initialize state with parent data or defaults
  const [bankDetails, setBankDetails] = useState({
    bank_name: "",
    account_type: "",
    account_number: "",
    ...formData.bankDetails // Merge with parent data if exists
  });

 // Handle form field changes
 const handleChange = (e) => {
  const { name, value } = e.target;
  setBankDetails(prev => {
    const updatedDetails = {
      ...prev,
      [name]: value // Use bracket notation for dynamic keys
    };
    // updateFormData now receives the updated bankDetails
    updateFormData("bankDetails", updatedDetails);
    return updatedDetails;
  });
};

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Banking Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bank Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="bank_name">
            Bank Name
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="bank_name"
            id="bank_name"
            value={bankDetails.bank_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Account Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="account_type">
            Type of Account
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="account_type"
            id="account_type"
            value={bankDetails.account_type}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select>
        </div>

        {/* Account Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="account_number">
            Account No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="account_number"
            id="account_number"
            value={bankDetails.account_number}
            onChange={handleChange}
            required
            pattern="\d{9,18}"
          />
        </div>
      </div>
    </div>
  );
};

export default BankingDetails;
