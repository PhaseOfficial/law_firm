import React from "react";

const LoanDetails = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">Loan Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="loan-type">
            Type of Loan
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="loan-type"
            id="loan-type"
            required
          >
            <option value="">Select</option>
            <option value="short-term">Short Term</option>
            <option value="long-term">Long Term</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="loan-purpose">
            Purpose of Loan
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="loan-purpose"
            id="loan-purpose"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="loan-amount">
            Loan Amount ($)
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="number"
            name="loan-amount"
            id="loan-amount"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="tenure">
            Tenure
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="tenure"
            id="tenure"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="frequency">
            Frequency
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="frequency"
            id="frequency"
            required
          >
            <option value="">Select</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;