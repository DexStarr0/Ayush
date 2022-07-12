import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import SignOut from "./component/SignOut";
import About from "./component/About/About";
import Contact from "./component/Contact";
import ErrorPage from "./component/ErrorPage";
import Footer from "./component/Footer";
import SigninSignup from "./component/Login_register/Signin_singup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="contact" element={<Contact />} />

        <Route path="signin" element={<SigninSignup />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="signout" element={<SignOut />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
