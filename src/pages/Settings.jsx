import React, { useState } from "react";

export default function Settings(){
  const [form, setForm] = useState({ username: "JohnDoe", email: "john@example.com", password: "", notify: true, theme: "light" });
  const [saved, setSaved] = useState(false);

  const onChange = (key, value) => setForm(prev => ({ ...prev, [key]: value }));
  const onSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <section className="min-h-[70vh]">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Settings</h1>

      <div className="bg-white rounded-xl shadow border border-gray-100 p-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Username</label>
            <input value={form.username} onChange={e => onChange("username", e.target.value)} className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input type="email" value={form.email} onChange={e => onChange("email", e.target.value)} className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input type="password" value={form.password} onChange={e => onChange("password", e.target.value)} className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Notification Preferences</p>
              <p className="text-xs text-gray-500">Receive updates and alerts</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={form.notify} onChange={(e) => onChange("notify", e.target.checked)}/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:h-5 after:w-5 after:bg-white after:rounded-full after:shadow after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-2">Theme</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onChange("theme", "light")}
              className={`px-3 py-2 rounded-md border ${form.theme === "light" ? "bg-blue-50 border-blue-300 text-blue-700" : "border-gray-200 text-gray-700 hover:bg-gray-50"}`}
            >Light</button>
            <button
              onClick={() => onChange("theme", "dark")}
              className={`px-3 py-2 rounded-md border ${form.theme === "dark" ? "bg-blue-50 border-blue-300 text-blue-700" : "border-gray-200 text-gray-700 hover:bg-gray-50"}`}
            >Dark</button>
          </div>
        </div>

        <div className="mt-6">
          <button onClick={onSave} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Save Changes</button>
        </div>
      </div>

      {saved && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-4 text-sm text-gray-800">Settings saved successfully.</div>
        </div>
      )}
    </section>
  );
}


