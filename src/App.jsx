import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import About from "./pages/About";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import DashboardHome from "./pages/DashboardHome";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import FeedbackDashboard from "./components/Feedbackcard";
import SignUp from "./auth/signup";
import ScrollToTop from "./components/scrollToTop";
import { Element } from "react-scroll";
import Footer from "./components/footer";
import Reports from "./pages/reports";
import Navbar from "./components/navbar";
import Login from "./auth/login";
import Dash from "./pages/dash";

function Home(){
    return (
        <>
            <Navbar/>
            <Element name="home">
                <LandingPage/>
            </Element>
            <Element name="about">
                <About/>
            </Element>
            <Element name="dashboard">
                <Dash/>
            </Element>
            <Element name="reports">
                <Reports/>
            </Element>
            <Footer/>
        </>
    );
}

function App(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element= {<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/feedback" element={<FeedbackDashboard/>} />

               
                <Route path="/app" element={<Layout/>}>
                  <Route path="/app/dashome" element={<DashboardHome/>} />
                  <Route path="/app/messages" element={<Messages/>} />
                  <Route path="/app/notifications" element={<Notifications/>} />
                  <Route path="/app/settings" element={<Settings/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;