import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FormSteps from "./pages/FormSteps";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/form-steps/*" element={<FormSteps />} />
        <Route path="*" element={<HomePage />} /> {/* Redirect unknown paths to HomePage */}
      </Routes>
    </HashRouter>
  );
};

export default App;