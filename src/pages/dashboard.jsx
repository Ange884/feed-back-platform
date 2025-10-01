// src/components/Dashboard.jsx
import React from "react";
import { User, MessageCircle, Bell } from "lucide-react";

const Dashboard = () => {
  const summaryData = [
    { title: "Total Users", value: 1200, icon: <User className="w-6 h-6" /> },
    { title: "Feedback Received", value: 450, icon: <MessageCircle className="w-6 h-6" /> },
    { title: "Pending Requests", value: 32, icon: <Bell className="w-6 h-6" /> },
  ];

  const recentActivity = [
    { user: "Alice", action: "Submitted feedback", date: "2025-09-30" },
    { user: "Bob", action: "Commented on report", date: "2025-09-29" },
    { user: "Charlie", action: "Logged in", date: "2025-09-29" },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 ml-6">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's an overview of your system.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <div className="p-3 bg-blue-100 rounded-full text-blue-600 mr-4">
              {item.icon}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700">{item.value}</p>
              <p className="text-gray-500">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section (placeholders) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Feedback Trends</h2>
          <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
            Line Chart Placeholder
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Feedback Distribution</h2>
          <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
            Pie Chart Placeholder
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="p-6 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2">User</th>
              <th className="py-2">Action</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2">{item.user}</td>
                <td className="py-2">{item.action}</td>
                <td className="py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
