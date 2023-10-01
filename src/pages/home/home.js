import React, { useState } from "react";
import Project_list from "./components/project_list";
import ClientList from "./components/client_list";
import FeedBackList from "./components/feed_back_list";
import logo from "../../../src/assets/images/logo-no-background.png";
import banner_image from "../../../src/assets/images/banner_image.png";
import { postData } from "../../service/home/home_service";
import "./home.css";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");

  const handlePostRequest = async () => {
    const data = {
      name: name,
      email: email,
      phone_number: phone_number,
      msg: msg,
    };

    postData(data);
  };

  return (
    <div>
      <div className="mainHome">
        {/* //nav bar  */}
        <div className="navBarMain">
          <img className="navBarLogo" src={logo} />
        </div>
        {/* //banner container  */}
        <div className="bannerMainBox">
          <div className="banner-box-1">
            <p className="banner-text">
              Experience innovation at its finest with our tech company. We
              specialize in crafting dynamic web, Android, and iOS apps,
              providing tailored solutions to transform your digital presence
              and exceed your expectations
            </p>
            <button className="banner-button">Book a FREE assessement</button>
          </div>
          <div className="banner-box-2">
            <img className="banner-image" src={banner_image} />
          </div>
        </div>

        <Project_list />

        <ClientList />
        <FeedBackList />

        {/* -------------- */}
        {/* connect us code  */}
        <div className="contact-us-box">
          <h1 className="contact-us-heading">Contact Us</h1>
          <input
            type="text"
            className="contact-us-input"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <input
            type="text"
            className="contact-us-input"
            placeholder="Enter Phone Number"
            name="phone_number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            className="contact-us-input"
            placeholder="Enter Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="contact-us-input"
            placeholder="Enter msg"
            name="msg"
            onChange={(e) => setMsg(e.target.value)}
          />

          <button onClick={handlePostRequest} className="banner-button">
            {" "}
            Send Data{" "}
          </button>
        </div>

        {/* -------------- */}
      </div>
    </div>
  );
};

export default Home;
