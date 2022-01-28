import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import logo from "../assets/img/logo.jpg";
import "./NavBar.css";

class NavBar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav>
        <div className="Title">
          <h1 className="navbar-logo">
            <img src={logo} className="logo"></img>
          </h1>
        </div>
        <br />
        <br />
        <div className="NavbarItems">
          <ul className={`nav-menu`}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={"nav-links"} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
