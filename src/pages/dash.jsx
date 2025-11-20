import React from "react";

const Dash = () => {
  return (
    <section id="dashboard" className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Tasks Completed</h3>
            <p className="text-2xl font-bold text-indigo-600">75%</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Projects</h3>
            <p className="text-2xl font-bold text-green-600">4 Active</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Notifications</h3>
            <p className="text-2xl font-bold text-red-600">12</p>
          </div>
        </div>

        {/* Progress Bar Example */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Progress Overview</h3>
          
          <div className="mb-6">
            <p className="text-gray-600">Course Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-indigo-500 h-4 rounded-full w-[70%]"></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">70% completed</p>
          </div>

          <div className="mb-6">
            <p className="text-gray-600">Profile Setup</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-green-500 h-4 rounded-full w-[90%]"></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">90% completed</p>
          </div>

          <div>
            <p className="text-gray-600">Goals Achieved</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-yellow-500 h-4 rounded-full w-[45%]"></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">45% completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dash;
