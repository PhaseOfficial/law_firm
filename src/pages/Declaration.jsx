import React from "react";

const Declaration = ({ formData, updateFormData }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Declaration</h3>
      <p className="text-sm text-gray-800 mb-4">
        I declare that the information provided above is correct and accurate. Providing false information may result in the denial of legal aid services. I authorize <strong>Equal Access Legal Aid</strong> to obtain and use information provided for the purpose of this application.
      </p>
      <label className="block text-sm font-medium text-gray-300" htmlFor="signature">
        Client Signature
      </label>
      <input
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        type="text"
        name="signature"
        id="signature"
        value={formData.signature || ""}
        onChange={(e) => updateFormData("signature", e.target.value)}
        placeholder="Sign Document"
        required
      />
    </div>
  );
};

export default Declaration;
