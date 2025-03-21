import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import FormSteps from "./pages/FormSteps";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/form-steps/*" element={<FormSteps />} />
   
        </Route>

        {/* Redirect unknown paths to HomePage */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;