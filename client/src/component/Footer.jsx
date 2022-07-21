import React from "react";
import Logo from "../img/ayushLogo.png";
// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <div className="footer-site-logo mb-4">
              <a href="error" className="navbar-brand">
                <img src={Logo} alt="logo" className="img-responsive" />
              </a>
            </div>
            <ul className="list-unstyled nav-links mb-5">
              <li>
                <a href="error">About</a>
              </li>

              <li>
                <a href="error">Careers</a>
              </li>
              <li>
                <a href="error">FAQs</a>
              </li>

              <li>
                <a href="error">Contact Us</a>
              </li>
            </ul>

            <div className="social mb-4">
              <h3>Stay in touch</h3>
              <ul className="list-unstyled">
                <li className="in">
                  <a href="error">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="fb">
                  <a href="error">
                    <i className="fa-brands fa-facebook-square"></i>
                  </a>
                </li>
                <li className="tw">
                  <a href="error">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="yt">
                  <a href="error">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li className="ln">
                  <a href="error">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="copyright">
              <p className="mb-0">
                <small>&copy; AYUSH. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
