import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarContent = ({ profileData }) => {
  return (
    <>
      {profileData.map((menu) => {
        return (
          <div className="sidebar-flex">
            <div className="sidebar-icon">
              <FontAwesomeIcon icon={menu.font} className="file-lines" />
            </div>
            <div className="sidebar-sub-flex">
              <span className="sidebar-flex-text">{menu.text}</span>
              <span className="sidebar-flex-number">{menu.number}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SidebarContent;
