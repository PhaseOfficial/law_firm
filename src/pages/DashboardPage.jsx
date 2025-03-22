import React from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaDatabase } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";

const DashboardPage = () => {
  const location = useLocation();
  const role = location.state?.role;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow p-6 flex flex-col items-center justify-center">
        {role && (
          <h1 className="text-4xl font-bold mb-8">Welcome to the {role} Dashboard</h1>
        )}
        <div className="flex flex-wrap justify-center gap-6">
          {role === "Admin" && (
            <>
              <Link to="/admin" className="group relative w-60 h-48 bg-white bg-opacity-10 backdrop-blur-md border border-gray-400 border-opacity-20 rounded-xl flex flex-col justify-center items-center shadow-lg transform transition hover:scale-105">
              <FaDatabase className="text-6xl text-gray-800 mb-4" />
                <h2 className="text-xl font-semibold text-gray-800"> View and Edit Data</h2>
              </Link>
             
              <Link to="/form-steps" className="group relative w-60 h-48 bg-white bg-opacity-10 backdrop-blur-md border border-gray-400 border-opacity-20 rounded-xl flex flex-col justify-center items-center shadow-lg transform transition hover:scale-105">
              <SiGoogleforms className="text-6xl text-gray-800 mb-4" />
                <h2 className="text-xl font-semibold text-gray-800">Proceed to Form</h2>
              </Link>
            </>
          )}
          {role === "Agent" && (
            <>
            <Link to="/form-steps" className="group relative w-60 h-48 bg-white bg-opacity-10 backdrop-blur-md border border-gray-400 border-opacity-20 rounded-xl flex flex-col justify-center items-center shadow-lg transform transition hover:scale-105">
              <SiGoogleforms className="text-6xl text-gray-800 mb-4" />
                <h2 className="text-xl font-semibold text-gray-800">Proceed to Form</h2>
              </Link>
              <Link to="/view-data" className="group relative w-60 h-48 bg-white bg-opacity-10 backdrop-blur-md border border-gray-400 border-opacity-20 rounded-xl flex flex-col justify-center items-center shadow-lg transform transition hover:scale-105">
              <FaDatabase className="text-6xl text-gray-800 mb-4" />
               <h2 className="text-xl font-semibold text-gray-800">View Data</h2>
              </Link>
            </>
          )}
          {role === "Accountant" && (
            <Link to="/financial-data" className="group relative w-60 h-48 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl flex flex-col justify-center items-center shadow-lg transform transition hover:scale-105">
              <h2 className="text-xl font-semibold text-white">View Financial Data</h2>
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
