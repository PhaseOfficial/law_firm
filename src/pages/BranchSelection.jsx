import React, { useState } from "react";

const BranchSelection = ({ formData, updateFormData }) => {
  // Initialize state with parent data or default to "harare"
  const [branch, setBranch] = useState(formData.branch || "harare");

  // Handle form field changes
  const handleChange = (e) => {
    const value = e.target.value;
    setBranch(value);
    updateFormData("branch", value);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700" htmlFor="branch">
        Select Branch Nearest to You
      </label>
      <select
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        name="branch"
        id="branch"
        value={branch}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="harare">Harare</option>
        <option value="bulawayo">Bulawayo</option>
        <option value="mutare">Mutare</option>
        <option value="masvingo">Masvingo</option>
        <option value="gweru">Gweru</option>
        <option value="bindura">Bindura</option>
        <option value="kadoma">Kadoma</option>
        <option value="nyanga">Nyanga</option>
      </select>
    </div>
  );
};

export default BranchSelection;
