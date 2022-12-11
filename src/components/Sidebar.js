import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../components/Sidebar.css";

export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Services
      </a>
      <a className="menu-item" href="/pizzas">
        Conditions
      </a>
      <a className="menu-item" href="/desserts">
        Contact
      </a>
    </Menu>
  );
};
