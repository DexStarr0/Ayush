import React, { useEffect, useState } from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";
export default function About() {
  const [toggleAbout, setToggleAbout] = useState(true);
  const [userData, setData] = useState({ name: "" });
  const navigate = useNavigate();

  //fetch data
  const aboutData = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // some extra fields are included for send cookie
        credentials: "include",
      });
      const data = await res.json();

      if (res.status !== 200) {
        throw new Error(data.error);
      }
      setData({ ...userData, ...data });
    } catch (error) {
      console.log(error);
      navigate("/signin");
    }
  };
  useEffect(() => {
    aboutData();
  });

  return (
    <>
      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
                <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h5>{userData.name}</h5>
                <h6>Web Developer and Designer</h6>
                <p class="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setToggleAbout(true);
                      }}
                    >
                      About
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setToggleAbout(false);
                      }}
                    >
                      Timeline
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <input
                type="submit"
                class="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-work">
                <p>WORK LINK</p>
                <a href="">Website Link</a>
                <br />
                <a href="">Bootsnipp Profile</a>
                <br />
                <a href="">Bootply Profile</a>
                <p>SKILLS</p>
                <a href="">Web Designer</a>
                <br />
                <a href="">Web Developer</a>
                <br />
                <a href="">WordPress</a>
                <br />
                <a href="">WooCommerce</a>
                <br />
                <a href="">PHP, .Net</a>
                <br />
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class={toggleAbout ? "show " : "fade show"}
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div class="col-md-6">
                      <p>{userData._id}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div class="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>
                <div
                  class={toggleAbout ? "fade" : "show"}
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div class="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div class="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div class="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div class="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div class="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label>Your Bio</label>
                      <br />
                      <p>Your detail description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
