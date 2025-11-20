import React, { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { Bell } from "lucide-react";

export default function Notifications(){
  const { notifications, setNotifications } = useOutletContext();
  const unread = useMemo(() => notifications.filter(n => !n.read).length, [notifications]);

  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  const toggleRead = (id) => setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));

  return (
    <section className="min-h-[70vh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <button onClick={markAllRead} className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm">Mark all as read</button>
      </div>

      <div className="space-y-3">
        {notifications.map(n => (
          <div
            key={n.id}
            onClick={() => toggleRead(n.id)}
            className={`cursor-pointer flex items-start justify-between p-4 bg-white rounded-xl border shadow ${n.read ? "border-gray-100" : "border-blue-200"}`}
          >
            <div className="flex items-start gap-3">
              <Bell className={`h-5 w-5 ${n.read ? "text-blue-500" : "text-blue-700"}`} />
              <div>
                <p className="text-sm text-gray-800">{n.text}</p>
                <p className="text-xs text-gray-500">{n.time}</p>
              </div>
            </div>
            {!n.read && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Unread</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


