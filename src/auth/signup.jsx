import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User as UserIcon, Github, Chrome } from "lucide-react";
import loginImage from "../assets/login.jpg";
import FormInput from "../components/FormInput";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ fullName: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({ fullName: "", email: "", password: "" });

    let hasError = false;
    if (!fullName) {
      setErrors((prev) => ({ ...prev, fullName: "Full name is required" }));
      hasError = true;
    }
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      hasError = true;
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      hasError = true;
    }
    if (hasError) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage("Account created successfully.");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full max-w-5xl">
        <div className="hidden md:block rounded-l-2xl overflow-hidden shadow-lg">
          <img src={loginImage} alt="Signup" className="w-full h-full object-cover" />
        </div>
        <div className="bg-white rounded-2xl md:rounded-l-none shadow-lg p-8 md:p-10 animate-slideUp">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h1>
          <p className="text-gray-600 mb-6">Join the platform and share your feedback.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              id="fullName"
              label="Full name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              icon={UserIcon}
              error={errors.fullName}
              autoComplete="name"
              required
            />
            <FormInput
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              icon={Mail}
              error={errors.email}
              autoComplete="email"
              required
            />
            <FormInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your secure password"
              icon={Lock}
              error={errors.password}
              autoComplete="new-password"
              required
            />

            {message && (
              <div className="text-sm text-green-600">{message}</div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && (
                <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              Sign Up
            </button>
          </form>

          <div className="mt-6">
            <div className="flex items-center gap-4">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-xs text-gray-500">Or continue with</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                onClick={() => window.open("https://www.google.com", "_blank")}
              className="border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-120 transition" type="button">
                <Chrome className="h-4 w-4" /> Google
              </button>
              <button
               onClick={() => window.open("https://github.com/your-username", "_blank")}
               className="border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition" type="button">
                <Github className="h-4 w-4" /> GitHub
              </button>
            </div>
          </div>

          <p className="text-gray-600 mt-6 text-sm">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
