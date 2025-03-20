import React , { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../assets/spacebucks submark.png";




const HomePage = () => {
  return (
    <>
    <div
    className="min-h-screen bg-gray-300 text-gray-700">
      <Header />
      <main className="p-6 text-center mb-10" >
      {/* Logo */}
            <div className="flex items-center space-x-2 justify-center p-4">
              <img src={Logo} alt="Logo" className="h-40" />
            </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to Equal Access Legal Aid</h1>
        <p className="text-lg mb-8">
          Providing affordable and accessible legal services to everyone.
        </p>
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-300 hover:bg-gray-600 text-gray-800 rounded-lg"
        >
          Login
        </Link>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default HomePage;