import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a team of passionate individuals dedicated to crafting
              exceptional digital experiences with code.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: rdsoftware2023@gmail.com</p>
            <p>Phone: +91 8607749965</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
