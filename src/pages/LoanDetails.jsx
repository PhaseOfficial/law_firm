import React, { useState } from "react";

const LoanDetails = ({ formData, updateFormData }) => {
  // Initialize state with formData from parent
  const [loanDetails, setLoanDetails] = useState(formData.loanDetails || {});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = { ...loanDetails, [name]: value };
    setLoanDetails(updatedDetails);
    updateFormData("loanDetails", updatedDetails); // Update parent state
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Packages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="plan">
            PLAN
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="plan"
            id="plan"
            value={loanDetails.plan || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="bronze">BRONZE</option>
            <option value="silver">SILVER</option>
            <option value="gold">GOLD</option>
            <option value="platinum">PLATINUM</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="basic_cover_limit">
            BASIC COVER LIMIT
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="basic_cover_limit"
            id="basic_cover_limit"
            value={loanDetails.basic_cover_limit || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="1000">US$1000</option>
            <option value="2000">US$2000</option>
            <option value="3000">US$3000</option>
            <option value="4000">US$4000</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="individual_monthly">
            INDIVIDUAL MONTHLY
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="individual_monthly"
            id="individual_monthly"
            value={loanDetails.individual_monthly || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="5">US$5</option>
            <option value="12">US$12</option>
            <option value="16">US$16</option>
            <option value="20">US$20</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="family_pack">
            FAMILY PACK
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="family_pack"
            id="family_pack"
            value={loanDetails.family_pack || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="10">US$10</option>
            <option value="20">US$20</option>
            <option value="25">US$25</option>
            <option value="30">US$30</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;
