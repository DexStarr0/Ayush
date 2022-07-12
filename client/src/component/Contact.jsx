import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import inbox from "../img/inbox.webp";
export default function Contact() {
  const navigate = useNavigate();
  const [inputState, setInpuState] = useState(false);
  useEffect(() => {
    contactData();
  }, []);
  //defing usestate for setting user data
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  // fetching contact data
  const contactData = async () => {
    try {
      const response = await fetch("/getdata", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw new Error(data.error);
      }
      setUser({ ...user, name: data.name, email: data.email });
      //disabling the input field of name and email
      setInpuState(true);
    } catch (error) {
      console.log(error);
    }
  };

  //posting user message to server
  const postContactData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          message: user.message,
        }),
      });

      const data = await response.json();

      if (response.status === 401) {
        alert(data.error);
        navigate("/signin");
        throw new Error(data.error);
      }
      if (response.status !== 201) {
        alert(data.error);
        throw new Error(data.error);
      }
      alert(data.message);
      setUser({ ...user, message: "" });
    } catch (error) {
      console.log(error);
    }
  };
  //handling change in input
  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <div className="containerCustom">
        <div className="forms-containerCustom">
          <div className="signin-signup">
            {/*sign in form */}
            <form method="POST" className="sign-in-form">
              <h2 className="title">Contact Us</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  name="name"
                  type="text"
                  value={user.name}
                  placeholder="Name"
                  onChange={handleInput}
                  disabled={inputState}
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
                  disabled={inputState}
                />
              </div>
              <div className="input-field textarea">
                <i class="fa-solid fa-message"></i>
                <textarea
                  name="message"
                  type="textarea"
                  value={user.message}
                  placeholder="Message"
                  onChange={handleInput}
                />
              </div>

              <button
                type="submit"
                className="form-btn btn  "
                onClick={postContactData}
              >
                <span>
                  Send
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
        {/*pannels */}
        <div className="panels-containerCustom">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
            </div>
            <img src={inbox} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
