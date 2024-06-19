import React from "react";
import Project_list from "./components/project_list";
import ClientList from "./components/client_list";
import FeedBackList from "./components/feed_back_list";
import logo from "../../../src/assets/images/logo-no-background.png";
import banner_image from "../../../src/assets/images/banner_image.png";
import { postData } from "../../service/home/home_service";
import "./home.css";
import Navbar from "./components/navbar";
import ContactForm from "./components/contact_us";
import Footer from "./components/footer";

const Home = () => {
  const scrollToContactForm = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="mainHome">
        <div className="navBarMain">
          <img className="navBarLogo" src={logo} alt="Logo" />
        </div>

        <div className="bannerMainBox">
          <div className="banner-box-1">
            <p className="banner-text">
              Experience innovation at its finest with our tech company. <br />
              We specialize in crafting dynamic web, Android, and iOS apps,
              providing tailored solutions <br />
              to transform your digital presence and exceed your expectations
            </p>
            <button className="banner-button" onClick={scrollToContactForm}>
              Contact Us
            </button>
          </div>
        </div>

        <Project_list />
        <ClientList />
        <FeedBackList />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
