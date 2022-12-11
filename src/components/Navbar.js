import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";
import LimitlessLogo from "../images/limitless_logo.png";
import Sidebar from "./Sidebar";

function Navbar() {
  //state to set background colour class
  const [white, setWhite] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setWhite(true);
    } else {
      setWhite(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <Sidebar />
      <ListGroup
        className={
          white
            ? "navbar flex-nowrap white fixed-top p-0 pe-4 d-none flex-row justify-content-between"
            : "navbar flex-nowrap dark fixed-top p-0 pe-4 d-none flex-row justify-content-between"
        }
        as="ul"
      >
        <ListGroup.Item as="li">
          <Link to="/">
            <img
              src={LimitlessLogo}
              alt="limitless_logo"
              width={white ? "200px" : "300px"}
            />
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="about_link" as="li">
          <Link style={{ textDecoration: "none" }} to="about">
            <b className={white ? "nav-links-dark" : "nav-links"}>About</b>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="services_link" as="li">
          <Link style={{ textDecoration: "none" }} to="services">
            <b className={white ? "nav-links-dark" : "nav-links"}>Services</b>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="contact_link" as="li">
          <a href="#footer">
            <b className={white ? "nav-links-dark" : "nav-links"}>Contact</b>
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a
            href="https://nzappts.gensolve.com/limitless"
            target="_blank"
            rel="noreferrer"
          >
            <b
              className={
                white ? "bookNow-link-scroll d-flex" : "bookNow-link d-flex"
              }
            >
              BOOK NOW
            </b>
          </a>
        </ListGroup.Item>
      </ListGroup>
      <Outlet />
    </>
  );
}

export default Navbar;
