import React from "react";

const Declaration = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">Declaration</h3>
      <p className="text-sm text-gray-300 mb-4">
        I declare that the information provided above is correct and accurate. Providing false information automatically leads to the decline of your loan application. I authorize <strong>SpaceBucks Finance (Pvt) Ltd</strong> to obtain and use information obtained for the purpose of this application with any recognized credit bureau. I authorize <strong>SpaceBucks Finance (Pvt) Ltd</strong> to obtain reference from friends, relatives, neighbors, and business partners, including visits to our homes, business premises, and verification of assets pledged.
      </p>
      <label className="block text-sm font-medium text-gray-300" htmlFor="signature">
        Client Signature
      </label>
      <input
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        type="text"
        name="signature"
        id="signature"
        placeholder="Sign Document"
        required
      />
    </div>
  );
};

export default Declaration;