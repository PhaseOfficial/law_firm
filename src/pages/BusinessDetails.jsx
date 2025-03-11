import React from "react";

const BusinessDetails = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">Business Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="business-name">
            Name of Business
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="business-name"
            id="business-name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="business-type">
            Business Type
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="business-type"
            id="business-type"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="business-period">
            Period in Current Business
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="business-period"
            id="business-period"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="previous-business">
            Previous Business Activities
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="previous-business"
            id="previous-business"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-300" htmlFor="business-address">
            Business Address
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="business-address"
            id="business-address"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="business-phone">
            Business Telephone No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="tel"
            name="business-phone"
            id="business-phone"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="business-email">
            Email Address
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="email"
            name="business-email"
            id="business-email"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;