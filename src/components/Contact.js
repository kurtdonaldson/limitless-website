import React from "react";
import "../components/Contact.css";
import LimitlessLogo from "../images/limitless_logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Contact() {
  return (
    <footer className="footer d-flex justify-content-between">
      <div className="about-footer w-25 text-start">
        <img src={LimitlessLogo} alt="limitless_logo" width="250vw" />
        <p>
          At Limitless Physiotherapy we are dedicated to providing top quality
          physiotherapy treatment in order to help people reach their functional
          goals.
        </p>
      </div>
      <div className="quicklinks-footer w-25 pt-3">
        <h2>QUICKLINKS</h2>
        <ul className="ps-0 pt-5">
          <li>About</li>
          <li>Services</li>
          <li>Conditions</li>
          <li>Contact</li>
          <li>Book Online</li>
        </ul>
      </div>
      <div className="contact-footer w-25 pt-3">
        <h2>CONTACT US</h2>
        <ul className="ps-0 pt-5">
          <li>
            <BsFillTelephoneFill /> 022 460 8079
          </li>
          <li>
            <MdEmail /> info@limitlessphysio.co.nz
          </li>
          <li>
            <a
              className="pe-4"
              href="https://www.facebook.com/limitlessphysio.co.nz/"
            >
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/limitlessphysiotherapy/?hl=en">
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="location-footer w-25 pt-3">
        <h2>LOCATION</h2>
      </div>
    </footer>
  );
}

export default Contact;
