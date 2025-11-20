import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Heart, Send } from "lucide-react";

export default function Messages(){
  const { messages, setMessages } = useOutletContext();
  const [newMessage, setNewMessage] = useState("");
  const [replyMap, setReplyMap] = useState({});

  const onSend = () => {
    if (!newMessage.trim()) return;
    const next = { id: Date.now(), user: "You", content: newMessage.trim(), time: "Just now", likes: 0 };
    setMessages(prev => [next, ...prev]);
    setNewMessage("");
  };

  const onLike = (id) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, likes: (m.likes || 0) + 1 } : m));
  };

  const onReply = (id) => {
    const text = (replyMap[id] || "").trim();
    if (!text) return;
    const reply = { id: Date.now(), user: "You", content: `Reply to #${id}: ${text}` , time: "Just now", likes: 0 };
    setMessages(prev => [reply, ...prev]);
    setReplyMap(map => ({ ...map, [id]: "" }));
  };

  return (
    <section className="min-h-[70vh]">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>

      {/* New Message */}
      <div className="bg-white rounded-xl shadow border border-gray-100 p-4 mb-4">
        <div className="flex gap-3">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write a new message..."
            className="flex-1 rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={onSend} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
            <Send className="h-4 w-4"/> Send
          </button>
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {messages.map(m => (
          <div key={m.id} className="bg-white rounded-xl shadow border border-gray-100 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-gray-800">{m.user}</p>
                <p className="text-sm text-gray-700">{m.content}</p>
                <p className="text-xs text-gray-500 mt-1">{m.time}</p>
              </div>
              <button onClick={() => onLike(m.id)} className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-red-600 transition">
                <Heart className="h-4 w-4"/> {m.likes || 0}
              </button>
            </div>
            <div className="mt-3 flex gap-2">
              <input
                value={replyMap[m.id] || ""}
                onChange={(e) => setReplyMap(map => ({ ...map, [m.id]: e.target.value }))}
                placeholder="Write a reply..."
                className="flex-1 rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={() => onReply(m.id)} className="px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">Reply</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


