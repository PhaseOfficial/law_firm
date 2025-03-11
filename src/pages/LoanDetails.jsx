import React from "react";

const LoanDetails = () => {
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
          <label className="block text-sm font-medium text-gray-700" htmlFor="basic-cover-limit">
            BASIC COVER LIMIT
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="basic-cover-limit"
            id="basic-cover-limit"
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
          <label className="block text-sm font-medium text-gray-700" htmlFor="individual-monthly">
            INDIVIDUAL MONTHLY
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="individual-monthly"
            id="individual-monthly"
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
          <label className="block text-sm font-medium text-gray-700" htmlFor="family-pack">
            FAMILY PACK
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="family-pack"
            id="family-pack"
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