import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import About from "./pages/About";
import Dashboard from "./pages/dashboard";
import SignUp from "./auth/signup";
import ScrollToTop from "./components/scrollToTop";
import { Element } from "react-scroll";
import Footer from "./components/footer";
import Reports from "./pages/reports";
import Navbar from "./components/navbar";
import Login from "./auth/login";
import PrivateRoute from "./components/PrivateRoute";


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
                <Dashboard/>
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
                </Routes>
        </>
    );
}

export default App;