import React from "react";
import "../components/ContactFooter.css";
import LimitlessLogo from "../images/limitless_logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import Map from "./Map";

const location = {
  address: "80 Delta Ave, New Lynn, Auckland, New Zealand.",
  lat: -36.901922882593695,
  lng: 174.68603692861316,
};

function ContactFooter() {
  return (
    <footer id="footer" className="footer d-flex flex-column">
      <div className="footer-img-div d-flex ">
        <div>
          <img src={LimitlessLogo} alt="limitless_logo" width="250vw" />
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center align-items-lg-start">
        <div className="hours-footer pt-3">
          <h2>HOURS</h2>
          <ul className="hours_ul ps-0 pt-5">
            <li className="d-flex justify-content-between">
              <span>Monday</span>
              <span className="footer_dottedBorder pt-2"></span>
              <span>10.00am - 6.00pm</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>Tuesday</span>
              <span className="footer_dottedBorder pt-2"></span>
              <span>7.00am - 3.00pm</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>Wednesday</span>
              <span className="footer_dottedBorder pt-2"></span>
              <span>7.00am - 3.00pm</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>Thursday</span>
              <span className="footer_dottedBorder pt-2"></span>
              <span>8.00am - 4.00pm</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>Friday</span>
              <span className="footer_dottedBorder pt-2"></span>
              <span>7.00am - 2.00pm</span>
            </li>
          </ul>
        </div>
        <div className="quicklinks-footer pt-3">
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
        <div className="contact-footer d-flex flex-column justify-content-center align-items-center align-items-md-start pt-3">
          <div>
            <h2>CONTACT US</h2>
          </div>

          <div className="d-flex flex-row flex-lg-column justify-content-between pt-5">
            <div className="pe-4">
              <p>
                <BsFillTelephoneFill /> 022 460 8079
              </p>
            </div>
            <div>
              <p>
                <MdEmail /> info@limitlessphysio.co.nz
              </p>
            </div>
          </div>
          <div>
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
          </div>
        </div>
        <div className="location-footer pt-3">
          <h2>LOCATION</h2>
          <Map location={location} zoomLevel={15} />
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;
