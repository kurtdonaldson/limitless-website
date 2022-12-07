import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { Outlet, Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";
import LimitlessLogo from "../images/limitless_logo.png";

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
      <ListGroup
        className={
          white
            ? "navbar white fixed-top p-0 d-flex flex-row justify-content-between te"
            : "navbar dark fixed-top p-0 d-flex flex-row justify-content-between"
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
        <ListGroup.Item as="li">
          <Link style={{ textDecoration: "none" }} to="about">
            <b className={white ? "nav-links-dark" : "nav-links"}>About</b>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link style={{ textDecoration: "none" }} to="services">
            <b className={white ? "nav-links-dark" : "nav-links"}>Services</b>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link style={{ textDecoration: "none" }} to="conditions">
            <b className={white ? "nav-links-dark" : "nav-links"}>Conditions</b>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a href="#">
            <b className={white ? "nav-links-dark" : "nav-links"}>Contact</b>
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a href="https://nzappts.gensolve.com/limitless" target="_blank">
            <b className={white ? "bookNow-link-scroll" : "bookNow-link"}>
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
