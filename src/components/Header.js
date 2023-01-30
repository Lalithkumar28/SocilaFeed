import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faGreaterThan,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.scss";

function Header({ onClick }) {
  return (
    <div className="header-container">
      <div className="header">
        <div>
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
        </div>
        <div className="dashboard">
          <span className="grey-font">Dashboard</span>
          <FontAwesomeIcon icon={faGreaterThan} className="greater-icon" />
          <span className="bold-style">Social Feed</span>
        </div>
      </div>
      <FontAwesomeIcon icon={faBars} className="ham-burger" onClick={onClick} />
    </div>
  );
}

export default Header;
