import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Button = ({ displayMenu }) => {
  const [displayProfile, setDisplayProfile] = useState(true);
  const clickToOpen = () => {
    setDisplayProfile(!displayProfile);
    displayMenu(displayProfile);
  };

  return (
    <div>
      <button onClick={clickToOpen} className="sidebar-button">
        <div>{displayProfile ? "See More" : "See Less"}</div>
        <FontAwesomeIcon icon={displayProfile ? faChevronDown : faChevronUp} />
      </button>
    </div>
  );
};

export default Button;
