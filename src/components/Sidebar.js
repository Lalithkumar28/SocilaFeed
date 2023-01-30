import React from "react";
import SidebarContent from "./SidebarContent";
import Button from "./Button";
import "../styles/SideBar.scss";
import { useState } from "react";
import { sideBarData, sideBarData2 } from "./Constants";
const Sidebar = ({ checkNavbar }) => {
  const [boxDisplay, setBoxDisplay] = useState(false);

  const showOptions = (showProfile) => {
    setBoxDisplay(showProfile);
  };
  const [insertNewOptions, setInsertNewOptions] = useState(false);
  const showRecentOptions = (showProfile) => {
    setInsertNewOptions(showProfile);
  };

  return (
    <div className={`sidebar ${checkNavbar === true && `display-animation`}`}>
      <div className="sidebar-top">
        <img
          className="avatar-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdgZ0QfMEuDyUh26ZN44s6i7ofuhobuRuvA&usqp=CAU"
          alt="avatar"
        ></img>
        <h4>Lalithkumar</h4>
      </div>
      <div className="sidebar-column">
        <SidebarContent
          profileData={boxDisplay ? sideBarData : sideBarData.slice(0, 7)}
        />
        <Button displayMenu={showOptions} />
      </div>
      <h5>Recently added:</h5>
      <div className="sidebar-column">
        <SidebarContent
          profileData={
            insertNewOptions ? sideBarData2 : sideBarData2.slice(0, 3)
          }
        />
        <Button displayMenu={showRecentOptions} />
      </div>
    </div>
  );
};

export default Sidebar;
