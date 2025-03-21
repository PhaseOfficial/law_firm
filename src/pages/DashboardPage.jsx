import React from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashboardPage = () => {
  const location = useLocation();
  const role = location.state?.role; // Get role from login page

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="p-6 text-center mb-20">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="space-y-4 max-w-md mx-auto">
          {role === "Admin" && (
            <>
              <Link
                to="/view-data"
                className="block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              >
                View Data
              </Link>
              <Link
                to="/manage-users"
                className="block px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg"
              >
                Manage Users
              </Link>
            </>
          )}
          {role === "Agent" && (
            <Link
              to="/form-steps"
              className="block px-6 py-3 bg-blue-300 hover:bg-blue-200 text-white rounded-lg"
            >
              Proceed to Form
            </Link>
          )}
          {role === "Accountant" && (
            <Link
              to="/financial-data"
              className="block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
            >
              View Financial Data
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;