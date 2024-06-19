import React, { useState } from 'react';
import './contact_us.css'
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a server-side endpoint
    console.log('Form submitted:', { name, email, message });
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
          <button type="submit">SUBMIT</button>
        </form>
      </div>
     
    </div>
    </>
  );
};

export default ContactForm;