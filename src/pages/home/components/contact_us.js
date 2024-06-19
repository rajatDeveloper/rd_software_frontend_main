import React, { useState } from "react";
import "./contact_us.css";
import { postData } from "../../../service/home/home_service";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }

    postData({ name, email, message: message });

    // Set default value for message if it's empty
    const finalMessage = message || "NIL";

    // Here you would typically send the form data to a server-side endpoint
    console.log("Form submitted:", { name, email, message: finalMessage });
    // Here you would typically send the form data to a server-side endpoint
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
