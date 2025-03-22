import React, { useEffect, useState } from "react";
import supabase from "../supabase/supabaseClient";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ViewDataForm = () => {
  const [tables, setTables] = useState({
    BankingDetails: [],
    Client: [],
    ClientSubscription: [],
    Employer: [],
    FamilyDependants: [],
    NextOfKin: [],
    UserProfile: [],
  }); // State to store data from all tables
  const [loading, setLoading] = useState(true); // Loading state
  const [currentTable, setCurrentTable] = useState("BankingDetails"); // Track which table is being viewed

  // Fetch data from all tables
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for each table
        const tablesToFetch = [
          "BankingDetails",
          "Client",
          "ClientSubscription",
          "Employer",
          "FamilyDependants",
          "NextOfKin",
          "UserProfile",
        ];

        const fetchedData = {};

        for (const table of tablesToFetch) {
          const { data, error } = await supabase.from(table).select("*");
          if (error) throw error;
          fetchedData[table] = data;
        }

        setTables(fetchedData); // Set the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  // Get columns for the current table
  const getTableColumns = () => {
    if (tables[currentTable]?.length > 0) {
      return Object.keys(tables[currentTable][0]); // Dynamically get columns from the first row
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="p-6">
        <h1 className="text-4xl font-bold mb-8">View Data</h1>

        {/* Table Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Select Table
          </label>
          <select
            value={currentTable}
            onChange={(e) => setCurrentTable(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="BankingDetails">Banking Details</option>
            <option value="Client">Client</option>
            <option value="ClientSubscription">Client Subscription</option>
            <option value="Employer">Employer</option>
            <option value="FamilyDependants">Family Dependants</option>
            <option value="NextOfKin">Next of Kin</option>
            <option value="UserProfile">User Profile</option>
          </select>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  {getTableColumns().map((column) => (
                    <th key={column} className="px-4 py-2 border">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tables[currentTable]?.map((item, index) => (
                  <tr key={index}>
                    {getTableColumns().map((column) => (
                      <td key={column} className="px-4 py-2 border">
                        {item[column]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ViewDataForm;