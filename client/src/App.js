import React, { createContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import SignOut from "./component/SignOut";
import About from "./component/About/About";
import Contact from "./component/Contact";
import ErrorPage from "./component/ErrorPage";
import Footer from "./component/Footer";
import SigninSignup from "./component/Login_register/Signin_singup";

const initialState = true;
export const UserContext = createContext();

//reducer function
const reducer = (state, action) => {
  if (action.type === "toggle") {
    return action.payload;
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          <Route path="signin" element={<SigninSignup />} />
          <Route path="signout" element={<SignOut />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
