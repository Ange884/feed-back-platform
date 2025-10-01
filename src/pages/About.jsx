import React from "react";
import { User, MessageCircle, Globe, Shield, Clock } from "lucide-react";

const About = () => {
  const features = [
    { icon: <User className="w-7 h-7 text-gray-800" />, title: "User-Centric", description: "Designed with simplicity and efficiency in mind to serve all users effortlessly." },
    { icon: <MessageCircle className="w-7 h-7 text-gray-800" />, title: "Feedback Driven", description: "We prioritize public opinions to improve and adapt the platform continuously." },
    { icon: <Globe className="w-7 h-7 text-gray-800" />, title: "Global Accessibility", description: "Accessible anywhere, anytime, ensuring inclusivity and reach." },
    { icon: <Shield className="w-7 h-7 text-gray-800" />, title: "Secure & Private", description: "All data is handled with top security standards to protect user privacy." },
    { icon: <Clock className="w-7 h-7 text-gray-800" />, title: "Timely Updates", description: "Stay informed with real-time feedback insights and system updates." },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">About Our Platform</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our mission is to empower communities by collecting, analyzing, and acting on public feedback. 
            We provide a seamless, secure, and accessible experience for all users, ensuring their voices are heard and valued.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
