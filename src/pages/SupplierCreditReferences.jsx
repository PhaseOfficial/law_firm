import React from "react";

const SupplierCreditReferences = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">Supplier Credit References</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="supplier-name">
            Name of Supplier
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="supplier-name"
            id="supplier-name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="supplier-phone">
            Supplier Cellphone No.
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="tel"
            name="supplier-phone"
            id="supplier-phone"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="supplier-referee">
            Name of Referee
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            name="supplier-referee"
            id="supplier-referee"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300" htmlFor="supplier-referee-phone">
            Cellphone No. of Referee
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="tel"
            name="supplier-referee-phone"
            id="supplier-referee-phone"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default SupplierCreditReferences;