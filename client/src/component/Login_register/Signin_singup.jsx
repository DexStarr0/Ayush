import Login from "../../img/log.svg";
import Register from "../../img/register.svg";
import "./signin_signup.css";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

export default function SigninSignup() {
  const { state, dispatch } = useContext(UserContext);
  //for navigate to other route
  const navigate = useNavigate();

  const [isActive, setActive] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "not working",
    password: "",
    cpassword: "",
  });
  const [loginData, checkUser] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setUser({ ...user, [name]: value });
  };

  const toggleclass = () => {
    setActive(!isActive);
  };
  //posting singup data to server
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });

    let data = await response.json();

    if (response.status === 422 || !data) {
      window.alert(data.error);
      console.log("Invalid registration");
    } else {
      window.alert(data.message);
      console.log("successful registration");

      //setting all value to empty
      setUser({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
      });
      setActive(!isActive);
    }
  };
  const handleLogin = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    checkUser({ ...loginData, [name]: value });
  };
  // post login data to server
  const userLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    const response = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.status === 400 || !data) {
      window.alert(data.error);
      console.log(data.error);
    } else {
      window.alert(data.message);
      console.log(data.message);
      //setting dispatch to false to render singout
      dispatch({ type: "toggle", payload: false });
      //setting all value to empty
      checkUser({ email: "", password: "" });
      navigate("/");
    }
  };

  return (
    <div
      className={isActive ? "sign-up-mode containerCustom" : "containerCustom"}
    >
      <div className="forms-containerCustom">
        <div className="signin-signup">
          {/*sign in form */}
          <form method="POST" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                name="email"
                type="email"
                value={loginData.email}
                placeholder="Email"
                onChange={handleLogin}
                autoComplete="off"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                type="password"
                value={loginData.password}
                placeholder="Password"
                onChange={handleLogin}
              />
            </div>
            <button
              type="submit"
              className="form-btn btn  "
              onClick={userLogin}
            >
              <span>
                Login
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>

            <div className="social ">
              <h3 className="social-text">Or Sign in with </h3>
              <ul className="list-unstyled social-media">
                <li className="in">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="fb">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="tw">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li className="ln">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </form>
          {/*sign up form */}
          <form method="POST" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                name="name"
                type="text"
                value={user.name}
                placeholder="Name"
                onChange={handleInput}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                name="email"
                type="email"
                value={user.email}
                placeholder="Email"
                onChange={handleInput}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-mobile-retro"></i>
              <input
                name="phone"
                type="number"
                value={user.phone}
                placeholder="Phone number"
                onChange={handleInput}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="password"
                type="password"
                value={user.password}
                placeholder="Password"
                onChange={handleInput}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                name="cpassword"
                type="password"
                value={user.cpassword}
                placeholder="Conform Password"
                onChange={handleInput}
              />
            </div>
            <button
              className="form-btn btn  btn-success"
              type="submit"
              onClick={postData}
            >
              <span>
                Sign up
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>

            <div className="social ">
              <h3 className="social-text">Or Sign up with </h3>
              <ul className="list-unstyled social-media">
                <li className="in">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="fb">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="tw">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li className="ln">
                  <a href="/error" className="social-icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
      {/*pannels */}
      <div className="panels-containerCustom">
        <div className="panel left-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              "Once again...welcome to my house. Come freely. Go safely; and
              leave something of the happiness you bring."
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={toggleclass}
            >
              Sign up
            </button>
          </div>
          <img src={Register} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              "Welcome to those who believe in the power of dreams and who would
              like to join me in my exploration of life."
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={toggleclass}
            >
              Sign in
            </button>
          </div>
          <img src={Login} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
