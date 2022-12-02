import React, { useRef } from "react";
import "./Join.css";

import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1bj5v9a",
        "template_a0vth2m",
        form.current,
        "Olj3-C8DKmTuY-Cvp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j title">
        <p>
          <span className="stroke-text">ready to</span>Level up
        </p>
        <p>
          Your body
          <span className="stroke-text">with us?</span>
        </p>
        <div className="line"></div>
      </div>

      <div className="right-j">
        <form className="email-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your name" />
          <input type="email" name="user_email" placeholder="Your email" />
          <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
