import React from "react";

const SpouseDetails = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">Spouse Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="spouse-first-name">
            First Name
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="spouse-first-name"
            id="spouse-first-name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="spouse-surname">
            Surname
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="spouse-surname"
            id="spouse-surname"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="spouse-id">
            ID Number
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="spouse-id"
            id="spouse-id"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="spouse-cellphone">
            Cellphone No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="tel"
            name="spouse-cellphone"
            id="spouse-cellphone"
          />
        </div>
      </div>
    </div>
  );
};

export default SpouseDetails;