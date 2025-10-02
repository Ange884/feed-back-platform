import React, { useMemo, useState } from "react";
import { Home, Bell, Mail, Settings, LogOut, ChevronRight, User, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";

// Reusable sidebar item
function SidebarItem({ icon: Icon, label, active = false, badgeCount = 0, onClick }){
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition
        ${active ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
    >
      <span className="flex items-center gap-2">
        <Icon className="h-5 w-5" /> {label}
      </span>
      {badgeCount > 0 && (
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${active ? "bg-white text-blue-700" : "bg-blue-100 text-blue-700"}`}>
          {badgeCount}
        </span>
      )}
    </button>
  );
}

// Reusable stat card
function StatCard({ title, value, icon: Icon, color = "blue" }){
  const colorClasses = useMemo(() => {
    const map = {
      blue: "bg-blue-100 text-blue-700",
      green: "bg-green-100 text-green-700",
      yellow: "bg-yellow-100 text-yellow-700",
    };
    return map[color] || map.blue;
  }, [color]);

  return (
    <div className="flex items-center p-5 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className={`p-3 rounded-full mr-4 ${colorClasses}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-800 leading-none">{value}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}

function Badge({ status }){
  const map = {
    Answered: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };
  return <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${map[status] || "bg-gray-100 text-gray-700"}`}>{status}</span>;
}

function NotificationCard({ item, onMarkRead }){
  return (
    <div className="flex items-start justify-between p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-start gap-3">
        <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
        <div>
          <p className="text-sm text-gray-800">{item.title}</p>
          <p className="text-xs text-gray-500">{item.time}</p>
        </div>
      </div>
      {!item.read && (
        <button onClick={onMarkRead} className="text-xs text-blue-600 hover:underline">Mark read</button>
      )}
    </div>
  );
}

function MessageCard({ item, onMarkRead }){
  return (
    <div className="flex items-start justify-between p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-start gap-3">
        <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
        <div>
          <p className="text-sm text-gray-800"><span className="font-medium">{item.from}:</span> {item.preview}</p>
          <p className="text-xs text-gray-500">{item.time}</p>
        </div>
      </div>
      {!item.read && (
        <button onClick={onMarkRead} className="text-xs text-blue-600 hover:underline">Mark read</button>
      )}
    </div>
  );
}

export default function Dashboard(){
  const [active, setActive] = useState("Home");
  const [userName] = useState("John Doe");
  const [stats, setStats] = useState({ total: 12, pending: 3, answered: 9 });
  const [feedbacks] = useState([
    { id: 1, name: "Alice", text: "Street lights not working", status: "Pending" },
    { id: 2, name: "John", text: "Water shortage in my area", status: "Answered" },
    { id: 3, name: "Mary", text: "Road needs maintenance", status: "Pending" },
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Your feedback was answered", time: "2h ago", read: false },
    { id: 2, title: "Maintenance scheduled in your area", time: "1d ago", read: false },
    { id: 3, title: "New message from Support", time: "3d ago", read: true },
  ]);
  const [messages, setMessages] = useState([
    { id: 1, from: "Support", preview: "We have reviewed your report.", time: "Just now", read: false },
    { id: 2, from: "Admin", preview: "Thanks for your submission!", time: "5h ago", read: false },
    { id: 3, from: "Support", preview: "Issue has been resolved.", time: "1d ago", read: true },
  ]);

  const unreadNotifications = notifications.filter(n => !n.read).length;
  const unreadMessages = messages.filter(m => !m.read).length;

  const markNotificationRead = (id) =>
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  const markMessageRead = (id) =>
    setMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-screen">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow border border-gray-100 p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Welcome</p>
                    <p className="font-semibold text-gray-800">{userName}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <SidebarItem icon={Home} label="Home" active={active === "Home"} onClick={() => setActive("Home")} />
                <SidebarItem icon={Bell} label="Notifications" active={active === "Notifications"} onClick={() => setActive("Notifications")} badgeCount={unreadNotifications} />
                <SidebarItem icon={Mail} label="Messages" active={active === "Messages"} onClick={() => setActive("Messages")} badgeCount={unreadMessages} />
                <SidebarItem icon={Settings} label="Settings" active={active === "Settings"} onClick={() => setActive("Settings")} />
                <div className="pt-2 border-t border-gray-100">
                  <SidebarItem icon={LogOut} label="Logout" onClick={() => alert("Logged out (demo)")} />
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3 h-full">
            {/* Welcome */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Hello, {userName}</h1>
              <p className="text-gray-600">Here is your latest activity and feedback summary.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
              <StatCard title="Total Feedback" value={stats.total} icon={MessageCircle} color="blue" />
              <StatCard title="Pending" value={stats.pending} icon={AlertCircle} color="yellow" />
              <StatCard title="Answered" value={stats.answered} icon={CheckCircle2} color="green" />
            </div>

            {/* Recent feedbacks */}
            <div className="bg-white rounded-xl shadow border border-gray-100 p-5 mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-800">Recent Feedbacks</h2>
                <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">View all <ChevronRight className="h-4 w-4" /></button>
              </div>
              <ul className="divide-y divide-gray-100">
                {feedbacks.map(f => (
                  <li key={f.id} className="py-3 flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{f.name}</p>
                      <p className="text-sm text-gray-600">{f.text}</p>
                    </div>
                    <Badge status={f.status} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Notifications + Messages */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-stretch">
              <div className="bg-white rounded-xl shadow border border-gray-100 p-5 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
                  {unreadNotifications > 0 && <span className="text-xs text-gray-500">{unreadNotifications} unread</span>}
                </div>
                <div className="space-y-3 flex-1 overflow-auto">
                  {notifications.map(n => (
                    <NotificationCard key={n.id} item={n} onMarkRead={() => markNotificationRead(n.id)} />
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border border-gray-100 p-5 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
                  {unreadMessages > 0 && <span className="text-xs text-gray-500">{unreadMessages} unread</span>}
                </div>
                <div className="space-y-3 flex-1 overflow-auto">
                  {messages.map(m => (
                    <MessageCard key={m.id} item={m} onMarkRead={() => markMessageRead(m.id)} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
