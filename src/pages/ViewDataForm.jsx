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
          <div className="sm:px-6 w-full">
            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
              <div className="mt-7 overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                  <thead>
                    <tr className="h-16 border border-gray-100 rounded">
                      {getTableColumns().map((column) => (
                        <th
                          key={column}
                          className="text-left pl-5 text-base font-medium leading-none text-gray-700"
                        >
                          {column}
                        </th>
                      ))}
                      <th className="text-left pl-5 text-base font-medium leading-none text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tables[currentTable]?.map((item, index) => (
                      <tr
                        key={index}
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-100 rounded"
                      >
                        {getTableColumns().map((column) => (
                          <td key={column} className="pl-5">
                            <div className="flex items-center">
                              <p className="text-base font-medium leading-none text-gray-700">
                                {item[column]}
                              </p>
                            </div>
                          </td>
                        ))}
                        <td className="pl-5">
                          <div className="flex items-center">
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                              View
                            </button>
                            <div className="relative px-5 pt-2">
                              <button
                                className="focus:ring-2 rounded-md focus:outline-none"
                                onClick={(e) => dropdownFunction(e.currentTarget)}
                                role="button"
                                aria-label="option"
                              >
                                <svg
                                  className="dropbtn"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                              <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                <div
                                  tabIndex="0"
                                  className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                                >
                                  <p>Edit</p>
                                </div>
                                <div
                                  tabIndex="0"
                                  className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                                >
                                  <p>Delete</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

// Dropdown function
const dropdownFunction = (element) => {
  const dropdowns = document.getElementsByClassName("dropdown-content");
  let list = element.parentElement.parentElement.getElementsByClassName(
    "dropdown-content"
  )[0];
  list.classList.add("target");
  for (let i = 0; i < dropdowns.length; i++) {
    if (!dropdowns[i].classList.contains("target")) {
      dropdowns[i].classList.add("hidden");
    }
  }
  list.classList.toggle("hidden");
};

export default ViewDataForm;