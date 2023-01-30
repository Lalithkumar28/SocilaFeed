import {
  faDownload,
  faEllipsis,
  faFile,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import ToggleDelete from "./ToggleDelete";
import ConfirmationBox from "./ConfirmationBox";
const PostContent = ({
  image,
  userName,
  designation,
  day,
  content,
  id,
  name,
  multimedia,
  typeOfFile,
  webcam,
  audio,
  getFilterId,
  handleDelete,
}) => {
  const [deleteIcon, setDeleteIcon] = useState(false);
  const [displayConfirmBox, setDisplayConfirmBox] = useState(false);
  const displayDelete = () => {
    setDeleteIcon(!deleteIcon);
  };

  const getConfirmation = (confirm) => {
    if (confirm === false) {
      setDisplayConfirmBox(confirm);
    } else getFilterId(id);
  };
  const getRemove = (id) => {
    setDisplayConfirmBox(true);
  };
  return (
    <div className="post-box">
      <div className="post-row-flex">
        <div className="post-flex">
          <img className="avatar-img" src={image} alt="avatar"></img>
          <div className="sub-post-flex">
            <h4>{userName}</h4>
            <p>{designation}</p>
            <p>{day}</p>
          </div>
        </div>
        <div className="toggle-button">
          { !deleteIcon ? (
            <FontAwesomeIcon icon={faEllipsis} onClick={displayDelete} />
          ) : (
            <FontAwesomeIcon icon={faXmark} onClick={displayDelete} />
          )}
          <div onClick={getRemove}>
            {handleDelete && deleteIcon ? <ToggleDelete /> : ""}
          </div>
        </div>
        {displayConfirmBox ? (
          <ConfirmationBox getConfirmation={getConfirmation} />
        ) : (
          ""
        )}
      </div>
      <div className="post-content">
       
        <pre className="post-pre">{content}</pre>
       

        <div className="multi-media">
          {typeOfFile === "image" && multimedia !== "" ? (
            <img src={multimedia} className="multimedia-img" alt=""></img>
          ) : (
            ""
          )}

          {typeOfFile === "video" && multimedia !== "" ? (
            <video className="multimedia-video" controls>
              <source src={multimedia} type="video/mp4"></source>
              <source src={multimedia} type="video/ogg"></source>
            </video>
          ) : (
            ""
          )}
          {typeOfFile === "pdf" && multimedia !== "" ? (
            <div className="multimedia-other-contents">
              <FontAwesomeIcon icon={faFile} style={{ color: "red" }} />
              <a href={multimedia} download={name} target="_blank">
                {name} <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>
          ) : (
            ""
          )}
          {webcam !== "" && (
            <img src={webcam} className="multimedia-web-cam" alt=""></img>
          )}
          {audio !== "" ? (
            <audio
              className="multimedia-audio"
              src={audio}
              type="audio/wav"
              controls
            ></audio>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default PostContent;
