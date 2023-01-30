import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const SayIt = (props) => {
  const [audioState, setAudioState] = useState(true);
  const recordingAudio = () => {
    setAudioState(true);
    props.getAudio(audioState);
  };
  return (
    <div className="attachment-flex ">
      <FontAwesomeIcon icon={props.font} />
      <p onClick={recordingAudio}>{props.text}</p>
    </div>
  );
};

export default SayIt;
