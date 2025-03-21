import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabase/supabaseClient";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data: user, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        throw loginError;
      }

      const userId = user?.user?.id;
      if (!userId) {
        throw new Error("User ID not found.");
      }

     // Fetch user role from Supabase
     const { data: userRole, error: roleError } = await supabase
        .from("user_roles")
        .select("roles(name)")
        .eq("user_id", userId)
        .maybeSingle();

      if (roleError) {
        throw roleError;
      }

      const role = userRole?.roles?.name;

      // Redirect user based on role
      if (role === "Admin") {
        navigate("/admin");
      } else if (role === "Agent") {
        navigate("/form-steps");
      } else if (role === "Accountant") {
        navigate("/accountant");
      } else {
        alert("You dont have permission ");
        navigate("/");
      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Contact Administrator
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
