import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import supabase from "../supabase/supabaseClient";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser(); // Get the current user
        setUser(user); // Set the user state
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  // If the user is authenticated, render the child routes (Outlet)
  // Otherwise, redirect to the login page
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;