import React from "react";
import "../components/Contact.css";
import LimitlessLogo from "../images/limitless_logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <footer id="footer" className="footer d-flex flex-column">
      <div>
        <img src={LimitlessLogo} alt="limitless_logo" width="250vw" />
      </div>
      <div className="d-flex">
        <div className="hours-footer w-25 pt-3">
          <h2>HOURS</h2>
          <ul className="hours_ul ps-0 pt-5">
            <li className="d-flex justify-content-between">
              <span>Monday</span>
              <span className="footer_dottedBorder"></span>
              <span>10.00am - 6.00pm</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>Tuesday</span>
              <span className="footer_dottedBorder"></span>
              <span>7.00am - 3.00pm</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>Wednesday</span>
              <span className="footer_dottedBorder"></span>
              <span>7.00am - 3.00pm</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>Thursday</span>
              <span className="footer_dottedBorder"></span>
              <span>8.00am - 4.00pm</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>Friday</span>
              <span className="footer_dottedBorder"></span>
              <span>7.00am - 2.00pm</span>
            </li>
          </ul>
        </div>
        <div className="quicklinks-footer w-25 pt-3">
          <h2>QUICKLINKS</h2>
          <ul className="ps-0 pt-5">
            <li>
              <Link className="text-decoration-none text-white" to="about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white" to="services">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white" to="conditions">
                Conditions
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white" to="contact">
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="text-decoration-none text-white"
                to="https://nzappts.gensolve.com/limitless"
              >
                Book Online
              </Link>
            </li>
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
                target="blank"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/limitlessphysiotherapy/?hl=en"
                target="blank"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="location-footer w-25 pt-3">
          <h2>LOCATION</h2>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
