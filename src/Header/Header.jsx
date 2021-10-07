import { IconButton } from "@material-ui/core";
import { AccountCircle, HomeRounded } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="nav_wrapper">
      <div className="header_wrapper">
        <div className="overflow-hidden-div logo-link">
          <Link to="/">
            <div className="logo-heading">
              <div className="show-logo-on-load">TRIDE</div>
            </div>
          </Link>
        </div>
        <div className="mainIcon_wrapper">
          <div className="homeIcon_wrapper">
            <Link to="/">
              <IconButton>
                <HomeRounded />
              </IconButton>
            </Link>
          </div>
          <div className="accountIcon_wrapper">
            <IconButton>
              <AccountCircle />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
