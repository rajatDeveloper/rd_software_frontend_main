import React, { useState } from "react";
import "./contact_us.css";
import { postData } from "../../../service/home/home_service";
import { Modal, Button } from "react-bootstrap";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }

    setLoading(true);
    const finalMessage = message || "NIL";

    try {
      await postData({ name, email, message: finalMessage });
      console.log("Form submitted:", { name, email, message: finalMessage });
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
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
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your request has been sent successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactForm;
