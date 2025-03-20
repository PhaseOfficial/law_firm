import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/client-details");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200">
      <h1 className="text-4xl font-bold mb-6">Welcome to Equal Access Legal Aid</h1>
      <p className="text-lg mb-8 text-center">
        Start your journey by filling out the required forms to apply for legal aid services.
      </p>
      <button
        onClick={handleStart}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;