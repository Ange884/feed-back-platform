import React, { useMemo } from "react";
import { useOutletContext } from "react-router-dom";

function StatCard({ title, value, bar }){
  return (
    <div className="p-6 bg-white rounded-xl shadow border border-gray-100">
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      {bar && (
        <div className="mt-3">
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="h-2 rounded-full bg-blue-600" style={{ width: `${bar}%` }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">{bar}%</p>
        </div>
      )}
    </div>
  );
}

export default function DashboardHome(){
  const { messages, notifications } = useOutletContext();
  const unread = useMemo(() => notifications.filter(n => !n.read).length, [notifications]);

  return (
    <section className="min-h-[70vh]">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Messages Received" value={messages.length} />
        <StatCard title="Active Users" value={42} />
        <StatCard title="Unread Notifications" value={unread} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="User Engagement" value="" bar={72} />
        <StatCard title="Feedback Processed" value="" bar={58} />
        <StatCard title="Goals Reached" value="" bar={35} />
      </div>
    </section>
  );
}


