import React, { useState } from "react";

const NextOfKinDetails = ({ formData, updateFormData }) => {
  // Initialize state with formData from parent
  const [kinDetails, setKinDetails] = useState(formData.kinDetails || {});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = { ...kinDetails, [name]: value };
    setKinDetails(updatedDetails);
    updateFormData("kinDetails", updatedDetails); // Update parent state
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Next of Kin Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="kin_first_name">
            First Name
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="kin_first_name"
            id="kin_first_name"
            value={kinDetails.kin_first_name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="kin_surname">
            Surname
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="kin_surname"
            id="kin_surname"
            value={kinDetails.kin_surname || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="kin_dob">
            Date of Birth
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="date"
            name="kin_dob"
            id="kin_dob"
            value={kinDetails.kin_dob || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="kin_id_number">
            ID Number
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="kin_id_number"
            id="kin_id_number"
            value={kinDetails.kin_id_number || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="kin_relationship">
            Relationship
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="kin_relationship"
            id="kin_relationship"
            value={kinDetails.kin_relationship || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="kin_address">
            Physical Address
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="kin_address"
            id="kin_address"
            value={kinDetails.kin_address || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="kin_cellphone">
            Cellphone No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="tel"
            name="kin_cellphone"
            id="kin_cellphone"
            value={kinDetails.kin_cellphone || ""}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default NextOfKinDetails;
