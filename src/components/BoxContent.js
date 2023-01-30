import React from "react";
import AddAttachments from "./AddAttachments";
import {
  faVideo,
  faCamera,
  faMicrophone,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";
import { buttonName, attachmentData } from "./Constants";
import CaptureIt from "./CaptureIt";
import Webcam from "react-webcam";
import SayIt from "./SayIt";
import TextareaAutosize from "react-textarea-autosize";
import { ReactMediaRecorder } from "react-media-recorder";
const BoxContent = (props) => {
  const [content, setContent] = useState("");
  const [imgState, setImgState] = useState("");
  const [fileType, setFileType] = useState(" ");
  const [capturedImg, setCapturedImg] = useState("");
  const [capture, setCapture] = useState(false);
  const [detectAudio, setDetectAudio] = useState(false);
  const [displayAudio, setDisplayAudio] = useState("");
  const [fileName, setFileName] = useState("");
  const inputhandler = (e) => {
    setContent(e.target.value);
  };
  //Receiving multimedia
  const getData = (context) => {
    setImgState(context);
  };
  //Receiving filetype
  const getType = (filetype) => {
    setFileType(filetype);
  };
  //Webcam is activated
  const getCapture = (capture) => {
    setCapture(capture);
  };
  const getCapturedImage = () => {
    alert("deleting webcam image");
    setCapturedImg("");
    setCapture(true);
  };
  const getFileName = (filename) => {
    setFileName(filename);
  };
  const deleteImg = () => {
    alert("deleting image");
    setImgState("");
  };
  //webcam
  const webRef = useRef(0);
  const showImage = () => {
    setCapturedImg(webRef.current.getScreenshot());
    setCapture(false);
  };
  const webcam = {
    width: 200,
    height: 200,
  };
  const getAudio = (audioDetector) => {
    setDetectAudio(audioDetector);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (
      content.replace(/\s/g, "") === "" &&
      imgState === "" &&
      capturedImg === "" &&
      displayAudio === ""
    )
      return "";
    let newPost = {
      id: uuid(),
      userName: "Lalithkumar",
      designation: "learner",
      textContent: content,
      date: new Date(),
      fileName: fileName,
      multimedia: imgState,
      webcam: capturedImg,
      audio: displayAudio,
      type: fileType,
    };

    props.newPost(newPost);
    setImgState("");
    setCapturedImg("");
    setDetectAudio(false);
    setDisplayAudio("");
    setContent("");
  };

  return (
    <div className="user-content-container ">
      <div className="user-display-flex">
        <img
          className="avatar-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdgZ0QfMEuDyUh26ZN44s6i7ofuhobuRuvA&usqp=CAU"
          alt="avatar"
        ></img>
        <div className="user-form">
          <TextareaAutosize
            maxRows={6}
            minRows={1}
            type="text"
            placeholder="Share something here..."
            onChange={inputhandler}
            value={content}
            className="text-area"
          />
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="submit"
          onClick={handleClick}
        />
      </div>
      <div className={`user-display-flex add-padding `}>
        <div>
          <AddAttachments
            font={faVideo}
            text={attachmentData.attach}
            getData={getData}
            getType={getType}
            getFileName={getFileName}
          />
        </div>
        <CaptureIt
          font={faCamera}
          text={attachmentData.capture}
          getCapture={getCapture}
        />
        <SayIt
          font={faMicrophone}
          text={attachmentData.say}
          getAudio={getAudio}
        />
      </div>
      <div>
        {fileType === "image" && imgState !== "" ? (
          <div className="preview-flex">
            <img src={imgState} width="200px" alt=""></img>
            <button className="preview-button button-flex" onClick={deleteImg}>
              {buttonName.delete}
              <FontAwesomeIcon icon={faCircleXmark} size={"xl"} />
            </button>
          </div>
        ) : (
          " "
        )}
        {fileType === "video" && imgState !== "" ? (
          <div className="preview-flex">
            <video width="200px" height="200px" controls>
              <source src={imgState} type="video/mp4"></source>
              <source src={imgState} type="video/ogg"></source>
            </video>
            <button className="preview-button button-flex" onClick={deleteImg}>
              {buttonName.video}
              <FontAwesomeIcon icon={faCircleXmark} size={"xl"} />
            </button>
          </div>
        ) : (
          " "
        )}
        {fileType === "pdf" && imgState !== "" ? (
          <div className="preview-flex ">
            <a className="preview-pdf" href={imgState}>
              {fileName}
            </a>
            <button className="preview-button button-flex" onClick={deleteImg}>
              {buttonName.deleteDocument}
              <FontAwesomeIcon icon={faCircleXmark} size={"xl"} />
            </button>
          </div>
        ) : (
          ""
        )}
        {imgState === "" && capture === true ? (
          <div className="preview-flex">
            <Webcam ref={webRef} videoConstraints={webcam} />

            <button className="capture-button button-flex" onClick={showImage}>
              {buttonName.capture}

              <FontAwesomeIcon
                icon={faCameraRetro}
                size={"xl"}
                className="camera-icon"
              />
            </button>
            <button
              className="preview-button button-flex"
              onClick={() => {
                setCapture(false);
              }}
            >
              {buttonName.camera}
              <FontAwesomeIcon icon={faCircleXmark} size={"xl"} />
            </button>
          </div>
        ) : (
          ""
        )}
        {capturedImg !== "" && (
          <div className="preview-flex">
            <img src={capturedImg} alt=""></img>

            <button
              className="preview-button button-flex"
              onClick={getCapturedImage}
            >
              {buttonName.delete}
              <FontAwesomeIcon icon={faCircleXmark} size={"l"} />
            </button>
          </div>
        )}
        {detectAudio && imgState === "" ? (
          <div>
            <ReactMediaRecorder
              onStop={(blobUrl, blob) => {
                const audioFileReader = new FileReader();
                audioFileReader.readAsDataURL(blob);
                audioFileReader.onload = () => {
                  const audioBase64 = audioFileReader.result;
                  setDisplayAudio(audioBase64);
                };
              }}
              audio
              render={({
                status,
                startRecording,
                stopRecording,
                mediaBlobUrl,
              }) => (
                <div className="preview-flex">
                  {status !== "idle" ? <p>{status}</p> : ""}
                  <audio
                    className="preview-audio"
                    src={mediaBlobUrl}
                    type="audio/wav"
                    controls
                    autoPlay
                    loop
                  />
                  <div className="icon-flex">
                    <button
                      onClick={startRecording}
                      className="capture-button-start-record"
                    >
                      Record
                    </button>
                    <button
                      onClick={stopRecording}
                      className="preview-button-stop-record"
                    >
                      Stop Record
                    </button>
                  </div>
                  <button
                    className="preview-button button-flex"
                    onClick={() => {
                      setDetectAudio(false);
                    }}
                  >
                    {buttonName.audio}
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              )}
            />
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default BoxContent;
