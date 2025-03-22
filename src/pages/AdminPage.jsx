import React, { useEffect, useState } from "react";
import supabase from "../supabase/supabaseClient";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AdminPage = () => {
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
  const [editId, setEditId] = useState(null); // Track which row is being edited
  const [editForm, setEditForm] = useState({}); // Store edited data
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

  // Handle editing a row
  const handleEdit = (id) => {
    setEditId(id); // Set the ID of the row being edited
    const rowToEdit = tables[currentTable].find((item) => item.id === id);
    setEditForm(rowToEdit); // Populate the edit form with the row data
  };

  // Handle saving edits
  const handleSave = async (id) => {
    try {
      const { error } = await supabase
        .from(currentTable)
        .update(editForm)
        .eq("id", id); // Update the row with the matching ID

      if (error) {
        throw error;
      }

      // Update the local state with the edited data
      setTables((prev) => ({
        ...prev,
        [currentTable]: prev[currentTable].map((item) =>
          item.id === id ? { ...item, ...editForm } : item
        ),
      }));

      setEditId(null); // Exit edit mode
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // Handle deleting a row
  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from(currentTable)
        .delete()
        .eq("id", id); // Delete the row with the matching ID

      if (error) {
        throw error;
      }

      // Update the local state by removing the deleted row
      setTables((prev) => ({
        ...prev,
        [currentTable]: prev[currentTable].filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Confirm before deleting a row
  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      handleDelete(id); // Proceed with deletion if confirmed
    }
  };

  // Handle input changes in the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

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
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

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
                    {tables[currentTable]?.map((item) => (
                      <tr
                        key={item.id}
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-100 rounded"
                      >
                        {getTableColumns().map((column) => (
                          <td key={column} className="pl-5">
                            <div className="flex items-center">
                              {editId === item.id ? (
                                <input
                                  type="text"
                                  name={column}
                                  value={editForm[column] || ""}
                                  onChange={handleInputChange}
                                  className="w-full p-1 border rounded"
                                />
                              ) : (
                                <p className="text-base font-medium leading-none text-gray-700">
                                  {item[column]}
                                </p>
                              )}
                            </div>
                          </td>
                        ))}
                        <td className="pl-5">
                          <div className="flex items-center space-x-2">
                            {editId === item.id ? (
                              <button
                                onClick={() => handleSave(item.id)}
                                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                              >
                                Save
                              </button>
                            ) : (
                              <>
                                <button
                                  onClick={() => handleEdit(item.id)}
                                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => confirmDelete(item.id)}
                                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                                >
                                  Delete
                                </button>
                              </>
                            )}
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

export default AdminPage;