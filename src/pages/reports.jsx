import React, { useState } from "react";
import { Download } from "lucide-react";

const Reports = () => {
  const [reports] = useState([
    {
      id: 1,
      user: "Alice",
      feedback: "The platform is very user-friendly.",
      response: "Thank you for your feedback!",
      date: "2025-09-30",
      status: "Reviewed",
    },
    {
      id: 2,
      user: "Bob",
      feedback: "I found a bug in the dashboard.",
      response: "Bug noted and fixed.",
      date: "2025-09-29",
      status: "Resolved",
    },
    {
      id: 3,
      user: "Charlie",
      feedback: "Can we have dark mode?",
      response: "We are considering it for the next update.",
      date: "2025-09-28",
      status: "Pending",
    },
  ]);

  return (
    <div className="p-8 bg-gray-50">
      
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Reports</h1>
          <p className="text-gray-600">View all submitted feedback and responses here.</p>
        </div>
        <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          <Download className="w-4 h-4 mr-2" />
          Export Reports
        </button>
      </div>

      {/* Reports Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 font-medium text-gray-700">User</th>
              <th className="py-3 px-6 font-medium text-gray-700">Feedback</th>
              <th className="py-3 px-6 font-medium text-gray-700">Response</th>
              <th className="py-3 px-6 font-medium text-gray-700">Date</th>
              <th className="py-3 px-6 font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-6">{report.user}</td>
                <td className="py-3 px-6">{report.feedback}</td>
                <td className="py-3 px-6">{report.response}</td>
                <td className="py-3 px-6">{report.date}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : report.status === "Reviewed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Filters / Summary */}
      <div className="mt-6 flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
          Filter by Status
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
          Filter by Date
        </button>
      </div>
    </div>
  );
};

export default Reports;
