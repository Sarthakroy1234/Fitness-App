import React, { useRef, useState } from "react";
import "./Join.css";

const Join = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const submitFormData = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Simulate form submission by logging form data
      console.log("Form data submitted:", formData);
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      setFormData({}); // Clear form data after submission
    } catch (error) {
      console.error("Error submitting form data:", error);
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form className="email-container" onSubmit={submitFormData}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email address"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="contact"
            id="contact"
            placeholder="Enter your Contact No"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="plan"
            id="plan"
            placeholder="Enter your Plan"
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-j">
            -> Join Now
          </button>
        </form>
      </div>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Your form has been submitted successfully!</p>
          <button onClick={closeSuccessMessage}>Close</button>
        </div>
      )}
      {showErrorMessage && (
        <div className="error-message">
          <p>Oops! Something went wrong. Please try again later.</p>
        </div>
      )}
    </div>
  );
};

export default Join;
