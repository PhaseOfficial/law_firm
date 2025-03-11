import React from "react";

const SubmitButton = () => {
  return (
    <div className="flex justify-end">
      <button
        className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        type="submit"
      >
        Submit Application
      </button>
    </div>
  );
};

export default SubmitButton;