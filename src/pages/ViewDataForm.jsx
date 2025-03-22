import React, { useEffect, useState } from "react";
import supabase from "../supabase/supabaseClient";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ViewDataForm = () => {
  const [tables, setTables] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentTable, setCurrentTable] = useState("BankingDetails");

  useEffect(() => {
    const fetchData = async () => {
      try {
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

        const userProfiles = fetchedData["UserProfile"] || [];
        const userMap = userProfiles.reduce((acc, user) => {
          acc[user.id] = user.full_name;
          return acc;
        }, {});

        const employerMap = fetchedData["Employer"].reduce((acc, employer) => {
          acc[employer.id] = userMap[employer.user_id] || "Unknown Employer";
          return acc;
        }, {});

        const clientMap = fetchedData["Client"].reduce((acc, client) => {
          acc[client.id] = userMap[client.user_id] || "Unknown Client";
          return acc;
        }, {});

        const mapColumns = (records, mappings) => {
          return records.map((record) => {
            const newRecord = { ...record };
            if ("user_id" in record) {
              newRecord["Full Name"] = userMap[record.user_id] || "Unknown User";
              delete newRecord.user_id;
            }
            if ("client_id" in record) {
              newRecord["Client"] = clientMap[record.client_id] || "Unknown Client";
              delete newRecord.client_id;
            }
            if ("employer_id" in record) {
              newRecord["Employer"] = employerMap[record.employer_id] || "Unknown Employer";
              delete newRecord.employer_id;
            }
            return newRecord;
          });
        };

        for (const table of tablesToFetch) {
          fetchedData[table] = mapColumns(fetchedData[table], {});
        }

        setTables(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="p-6">
        <h1 className="text-4xl font-bold mb-8">View Data</h1>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Select Table</label>
          <select
            value={currentTable}
            onChange={(e) => setCurrentTable(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md"
          >
            {Object.keys(tables).map((table) => (
              <option key={table} value={table}>{table.replace(/([A-Z])/g, ' $1').trim()}</option>
            ))}
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
                      {tables[currentTable]?.length > 0 &&
                        Object.keys(tables[currentTable][0]).map((column) => (
                          <th key={column} className="text-left pl-5 text-base font-medium leading-none text-gray-700">{column}</th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tables[currentTable]?.map((item, index) => (
                      <tr key={index} className="h-16 border border-gray-100 rounded">
                        {Object.values(item).map((value, idx) => (
                          <td key={idx} className="pl-5 text-gray-700">{value}</td>
                        ))}
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

export default ViewDataForm;
