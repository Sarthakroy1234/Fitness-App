import React, { useRef, useState } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mohqx9r",
        "template_lzldhhr",
        form.current,
        "iMImF_gvbihaApDQE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
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
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Enter your Email address"
          />
          <button type="submit" className="btn btn-j">
            Join Now
          </button>
        </form>
      </div>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Your form has been submitted successfully!</p>
          <button onClick={closeSuccessMessage}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Join;
