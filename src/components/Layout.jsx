import React, { useMemo, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Menu, X, LayoutGrid, Mail, Bell, Settings, LogOut } from "lucide-react";

export default function Layout(){
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Mock user session
  const [user] = useState({ name: "John Doe" });

  // Shared state for messages/notifications
  const [messages, setMessages] = useState([
    { id: 1, user: "Alice", content: "Street lights not working", time: "2m ago", likes: 1 },
    { id: 2, user: "Bob", content: "Water shortage in my area", time: "1h ago", likes: 0 },
    { id: 3, user: "Mary", content: "Road needs maintenance", time: "1d ago", likes: 3 },
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Your feedback was answered", time: "2h ago", read: false },
    { id: 2, text: "Maintenance scheduled in your area", time: "1d ago", read: false },
    { id: 3, text: "New message from Support", time: "3d ago", read: true },
  ]);

  const unreadCount = useMemo(() => notifications.filter(n => !n.read).length, [notifications]);

  const navLinkBase = "flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200";
  const navLinkActive = "bg-blue-600 text-white";
  const navLinkIdle = "text-gray-700 hover:bg-gray-100";

  const onConfirmLogout = () => {
    setShowLogoutModal(false);
    localStorage.removeItem("session");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Mobile toggle */}
            <div className="lg:hidden mb-4 flex justify-between items-center">
              <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white border border-gray-200 shadow-sm text-gray-700"
                onClick={() => setSidebarOpen(v => !v)}
              >
                {sidebarOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
                <span>Menu</span>
              </button>
              <div className="text-sm text-gray-600">Welcome, <span className="font-medium text-gray-800">{user.name}</span></div>
            </div>

            <div className={`bg-white rounded-xl shadow border border-gray-100 p-4 ${sidebarOpen ? "block" : "hidden"} lg:block`}>
              <nav className="space-y-2">
                <NavLink
                  to="/app/dashboard"
                  className={({ isActive }) => `${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <LayoutGrid className="h-5 w-5"/> Dashboard
                </NavLink>
                <NavLink
                  to="/app/messages"
                  className={({ isActive }) => `${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Mail className="h-5 w-5"/> Messages
                </NavLink>
                <NavLink
                  to="/app/notifications"
                  className={({ isActive }) => `${navLinkBase} ${isActive ? navLinkActive : navLinkIdle} justify-between`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="flex items-center gap-3"><Bell className="h-5 w-5"/> Notifications</span>
                  {unreadCount > 0 && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{unreadCount}</span>
                  )}
                </NavLink>
                <NavLink
                  to="/app/settings"
                  className={({ isActive }) => `${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Settings className="h-5 w-5"/> Settings
                </NavLink>
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 bg-red-600 text-white hover:bg-red-700"
                >
                  <LogOut className="h-5 w-5"/> Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3">
            <Outlet context={{ messages, setMessages, notifications, setNotifications }} />
          </main>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative bg-white w-full max-w-sm mx-auto rounded-xl shadow-lg p-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-red-100 text-red-600">
                <LogOut className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Sign out</h3>
                <p className="text-sm text-gray-600">Are you sure you want to log out?</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button onClick={() => setShowLogoutModal(false)} className="px-4 py-2 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">Cancel</button>
              <button onClick={onConfirmLogout} className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700">Log out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


