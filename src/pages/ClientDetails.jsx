import React, { useState } from "react";

const ClientDetails = ({ formData, updateFormData }) => {
  // Initialize state with formData from parent
  const [clientDetails, setClientDetails] = useState(formData.clientDetails || {});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = { ...clientDetails, [name]: value };
    setClientDetails(updatedDetails);
    updateFormData("clientDetails", updatedDetails); // Update parent state
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Principal Member’s Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Title
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="title"
            id="title"
            value={clientDetails.title || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="surname">
            Surname
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="surname"
            id="surname"
            value={clientDetails.surname || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name(s)
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="name"
            id="name"
            value={clientDetails.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="sex">
            Sex
          </label>
          <select
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            name="sex"
            id="sex"
            value={clientDetails.sex || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="date"
            name="dob"
            id="dob"
            value={clientDetails.dob || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="id-number">
            ID Number
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="id_number"
            id="id-number"
            value={clientDetails.id_number || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="address">
            Physical Address
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="address"
            id="address"
            value={clientDetails.address || ""}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
