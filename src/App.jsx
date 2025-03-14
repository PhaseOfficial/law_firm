import React, { useState } from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import ClientDetails from "./pages/ClientDetails";
import SpouseDetails from "./pages/SpouseDetails";
import NextOfKinDetails from "./pages/NextOfKinDetails";
import BusinessDetails from "./pages/BusinessDetails";
import LoanDetails from "./pages/LoanDetails";
import BusinessReferees from "./pages/BusinessReferees";
import BankingDetails from "./pages/BankingDetails";
import BranchSelection from "./pages/BranchSelection";
import Declaration from "./pages/Declaration";
import "./index.css"; // Ensure your Tailwind CSS file is imported
import Logo from "../src/assets/spacebucks submark.png";

const steps = [
  { path: "/client-details", label: "Principal Member’s Details" },
  { path: "/spouse-details", label: "Spouse Details" },
  { path: "/next-of-kin-details", label: "Next of Kin Details" },
  { path: "/business-details", label: "Employer's Details" },
  { path: "/loan-details", label: "Packages" },
  { path: "/business-referees", label: "Family or Other Dependants Details" },
  { path: "/banking-details", label: "Banking Details" },
  { path: "/branch-selection", label: "Branch Selection" },
  { path: "/declaration", label: "Declaration" },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      navigate(steps[currentStep + 1].path);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      navigate(steps[currentStep - 1].path);
    }
  };

  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 100;
    const y = (e.clientY / innerHeight) * 100;
    setPosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200" onMouseMove={handleMouseMove} style={{
      background: `radial-gradient(
        at ${position.x}% ${position.y}%,
rgb(214, 210, 233),
rgb(238, 225, 225)
      )`,
    }}>
      {/* Logo and Title */}
      <div className="flex items-center space-x-2 justify-center p-4" >
        <img src={Logo} alt="Logo 1" className="h-35" />
        
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mx-auto bg-gray-700 rounded-full h-2.5 mb-6">
        <div
          className="bg-red-600 h-2.5 rounded-full"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>

      {/* Current Step Label */}
      <div className="text-center text-sm text-gray-800 mb-4">
        Step {currentStep + 1} of {steps.length}: {steps[currentStep].label}
      </div>

      {/* Define Routes */}
      <main className="p-6">
        <Routes>
          <Route path="/client-details" element={<ClientDetails />} />
          <Route path="/spouse-details" element={<SpouseDetails />} />
          <Route path="/next-of-kin-details" element={<NextOfKinDetails />} />
          <Route path="/business-details" element={<BusinessDetails />} />
          <Route path="/loan-details" element={<LoanDetails />} />
          <Route path="/business-referees" element={<BusinessReferees />} />
          <Route path="/banking-details" element={<BankingDetails />} />
          <Route path="/branch-selection" element={<BranchSelection />} />
          <Route path="/declaration" element={<Declaration />} />
          {/* Redirect unknown paths to ClientDetails */}
          <Route path="*" element={<ClientDetails />} />
        </Routes>
      </main>

      {/* Navigation Buttons */}
      <div className="flex justify-between p-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`px-4 py-2 ${
            currentStep === 0
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          } text-white rounded`}
        >
          Previous
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => alert("Form submitted!")}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}