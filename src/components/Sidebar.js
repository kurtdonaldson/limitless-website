import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../components/Sidebar.css";
import LimitlessLogo from "../images/limitless_logo.png";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Sidebar = ({ display, backgroundColor }) => {
  return (
    <div className={display}>
      <img className="burger-limitless-logo" src={LimitlessLogo} alt="" />
      <Menu>
        <ListGroup>
          <ListGroup.Item>
            <Link className="bm-item" to="/">
              Home
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link className="bm-item" to="about">
              About
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link className="bm-item" to="services">
              Services
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link className="bm-item" to="contact">
              Contact
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://nzappts.gensolve.com/limitless"
              target="_blank"
              rel="noreferrer"
              className="bm-item"
            >
              <b>BOOK NOW</b>
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Menu>
    </div>
  );
};

export default Sidebar;
