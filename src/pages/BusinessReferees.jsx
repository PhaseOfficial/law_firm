import React, { useState } from "react";

const BusinessReferees = () => {
  const [dependants, setDependants] = useState([{ id: 1 }]);

  const addDependant = () => {
    setDependants([...dependants, { id: dependants.length + 1 }]);
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Family or Other Dependants Details</h3>
      {dependants.map((dependant, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-name`}>
              Full Name
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              name={`dependant${dependant.id}-name`}
              id={`dependant${dependant.id}-name`}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-dob`}>
              Date of Birth
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="date"
              name={`dependant${dependant.id}-dob`}
              id={`dependant${dependant.id}-dob`}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-id`}>
              ID Number
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              name={`dependant${dependant.id}-id`}
              id={`dependant${dependant.id}-id`}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-relationship`}>
              Relationship
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              name={`dependant${dependant.id}-relationship`}
              id={`dependant${dependant.id}-relationship`}
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-address`}>
              Physical Address
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              name={`dependant${dependant.id}-address`}
              id={`dependant${dependant.id}-address`}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={`dependant${dependant.id}-phone`}>
              Cellphone No.
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="tel"
              name={`dependant${dependant.id}-phone`}
              id={`dependant${dependant.id}-phone`}
              required
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        className="mt-4 p-2 bg-blue-600 text-white rounded-md"
        onClick={addDependant}
      >
        Add Another Dependant
      </button>
    </div>
  );
};

export default BusinessReferees;