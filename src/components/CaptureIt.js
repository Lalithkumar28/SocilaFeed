import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const CaptureIt = (props) => {
  const [webCam, setWebCam] = useState(true);

  const displayCam = () => {
    setWebCam(true);
    props.getCapture(webCam);
  };

  return (
    <div>
      <div className="attachment-flex ">
        <FontAwesomeIcon icon={props.font} />
        <p onClick={displayCam}>{props.text}</p>
      </div>
    </div>
  );
};

export default CaptureIt;
