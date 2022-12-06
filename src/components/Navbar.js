import React from "react";
import { ReactDOM } from "react";
import { Outlet, Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";
import LimitlessLogo from "../images/limitless_logo.png";

function Navbar() {
  return (
    <>
      <ListGroup
        className="navbar p-0 d-flex flex-row justify-content-around"
        as="ul"
      >
        <ListGroup.Item as="li">
          <img src={LimitlessLogo} alt="limitless_logo" width={"300px"} />
        </ListGroup.Item>
        <ListGroup.Item className="about-link" as="li">
          <Link style={{ textDecoration: "none" }} to="about">
            <b>About</b>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link style={{ textDecoration: "none" }} to="services">
            <b>Services</b>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Link style={{ textDecoration: "none" }} to="conditions">
            <b>Conditions</b>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a href="#">
            <b>Contact</b>
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a href="https://nzappts.gensolve.com/limitless" target="_blank">
            <b>BOOK NOW</b>
          </a>
        </ListGroup.Item>
      </ListGroup>
      <Outlet />
    </>
  );
}

export default Navbar;
