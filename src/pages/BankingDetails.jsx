import React from "react";

const BankingDetails = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">Banking Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="bank-name">
            Bank Name
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="bank-name"
            id="bank-name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="account-type">
            Type of Account
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="account-type"
            id="account-type"
            required
          >
            <option value="">Select</option>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="account-number">
            Account No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="account-number"
            id="account-number"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default BankingDetails;