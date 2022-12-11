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

  //State to hide links and display burger menu when screen size < 805px
  const [burgerMenu, setBurgerMenu] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //Function to change nav and burger displays based on screen width

  //Function to change windowWidth state to current window width
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 805) {
      setBurgerMenu(false);
      console.log(burgerMenu);
    } else {
      setBurgerMenu(true);
      console.log(burgerMenu);
    }
  };

  //We use useEffect hook to call setWindowDimensions and update window width whenever width changes.
  //Need to unmount event listener after it is called so it can be mounted again.
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

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
      <Sidebar display={burgerMenu ? "d-flex" : "d-none"} />
      <ListGroup
        className={
          white
            ? "navbar flex-nowrap white fixed-top p-0 pe-4 d-flex flex-row justify-content-between"
            : "navbar flex-nowrap dark fixed-top p-0 pe-4 d-flex flex-row justify-content-between"
        }
        as="ul"
      >
        <ListGroup.Item as="li" className={burgerMenu ? "d-none" : "d-inline"}>
          <Link to="/">
            <img
              src={LimitlessLogo}
              alt="limitless_logo"
              width={white ? "200px" : "300px"}
            />
          </Link>
        </ListGroup.Item>
        <ListGroup.Item
          className={burgerMenu ? "about_link d-none" : "about_link"}
          as="li"
        >
          <Link style={{ textDecoration: "none" }} to="about">
            <b className={white ? "nav-links-dark" : "nav-links"}>About</b>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item
          className={burgerMenu ? "services_link d-none" : "services_link"}
          as="li"
        >
          <Link style={{ textDecoration: "none" }} to="services">
            <b className={white ? "nav-links-dark" : "nav-links"}>Services</b>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item
          className={burgerMenu ? "contact_link d-none" : "contact_link"}
          as="li"
        >
          <a href="#footer">
            <b className={white ? "nav-links-dark" : "nav-links"}>Contact</b>
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li" className={burgerMenu ? "d-none" : "d-inline"}>
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
