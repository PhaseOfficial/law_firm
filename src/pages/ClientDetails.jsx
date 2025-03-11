import React from "react";

const ClientDetails = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">Client Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="first-name">
            First Name
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="first-name"
            id="first-name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="surname">
            Surname
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="surname"
            id="surname"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="gender">
            Gender
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="gender"
            id="gender"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="marital-status">
            Marital Status
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="marital-status"
            id="marital-status"
            required
          >
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="id-number">
            ID Number
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="id-number"
            id="id-number"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="date"
            name="dob"
            id="dob"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-300" htmlFor="address">
            Residential/Home Address
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="address"
            id="address"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="home-phone">
            Home Telephone No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="tel"
            name="home-phone"
            id="home-phone"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="cellphone">
            Cellphone No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="tel"
            name="cellphone"
            id="cellphone"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;