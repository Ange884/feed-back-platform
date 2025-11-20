import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import sideImage from "../assets/feedback.jpg";
import Footer from "../components/footer";
import About from "./About";
import Dashboard from "../components/Dashboard";
import Reports from "./reports";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col" id="home">
      <section className="flex flex-1 flex-col md:flex-row items-center justify-between px-12 py-16 bg-gradient-to-r from-blue-20 to-green-50">
        <div className="max-w-xl space-y-6 md:mr-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to <span className="text-blue-600">Public Feedback</span>
          </h2>
          <p className="text-lg text-gray-600">
            Share your thoughts on public services and help improve our community.
            Your voice truly makes a difference.
          </p>
          <div className="flex space-x-4">
            <a href="/feedback" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Give Feedback
            </a>
            <a href="/dashboard" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
              View Feedback
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0 flex-1 flex justify-center">
          <img
            src={sideImage}
            alt="Welcome"
            className="w-full max-w-md rounded-[20px]"
          />
        </div>
      </section>
    {/*


      <section id="about">
        <div className="py-8">
          <About/>
        </div>
      </section>

      <section id="dashboard">
        <div className="py-8">
           <Dashboard/>
        </div>
      </section>

      <section id="reports">
        <div className="py-8">
          <Reports/>
        </div>
      </section>

      <section id="feedback">
        <div className="py-8">
        </div>
        
      </section>
   */}


    </div>
  );
};

export default LandingPage;
