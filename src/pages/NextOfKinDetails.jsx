import React from "react";

const NextOfKinDetails = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">Next of Kin Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="kin-first-name">
            First Name
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="kin-first-name"
            id="kin-first-name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="kin-surname">
            Surname
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="kin-surname"
            id="kin-surname"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-300" htmlFor="kin-address">
            Address
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="kin-address"
            id="kin-address"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="kin-cellphone">
            Cellphone No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="tel"
            name="kin-cellphone"
            id="kin-cellphone"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default NextOfKinDetails;