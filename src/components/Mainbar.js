import React from "react";
import BoxContent from "./BoxContent";
import PostContent from "./PostContent";
import { useState, useEffect } from "react";
import { userData } from "./Constants";
import moment from "moment/moment";
import "../styles/MainBar.scss";
const Mainbar = () => {
  const LOCAL_KEY = "name";
  const temp = JSON.parse(localStorage.getItem(LOCAL_KEY));

  const [boxContent, setBoxContent] = useState(temp ? temp : []);

  const handle = (content) => {
    setBoxContent([content, ...boxContent]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(boxContent));
  }, [boxContent]);

  const getFilterId = (receive) => {
    setBoxContent(boxContent.filter((element) => element.id !== receive));
  };

  return (
    <div className="main-bar">
      <BoxContent newPost={handle} />
      {boxContent.map((menu, index) => (
        <PostContent
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdgZ0QfMEuDyUh26ZN44s6i7ofuhobuRuvA&usqp=CAU"
          userName={menu.userName}
          designation={menu.designation}
          day={moment(menu.date).fromNow()}
          content={menu.textContent}
          key={menu.id}
          id={menu.id}
          name={menu.fileName}
          multimedia={menu.multimedia}
          typeOfFile={menu.type}
          webcam={menu.webcam}
          audio={menu.audio}
          getFilterId={getFilterId}
          handleDelete={true}
        />
      ))}
      {userData
        .slice(0)
        .reverse()
        .map((blog) => (
          <PostContent
            image={blog.img}
            userName={blog.userName}
            designation={blog.designation}
            day={blog.day}
            content={blog.content}
            fileName=""
            multimedia=""
            key={blog.id}
            typeOfFile=""
            audio=""
            webcam=""
          />
        ))}
    </div>
  );
};

export default Mainbar;
