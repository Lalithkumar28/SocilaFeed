import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddAttachments = (props) => {
  const upload = async (e) => {
    const file = e.target.files[0];

    var checking = ["image/jpg", "image/png", "image/jpeg", "image/webp"];
    var checkingForVideo = ["video/mp4", "video/ogg"];
    const image = checking.includes(file.type);
    const video = checkingForVideo.includes(file.type);

    if (image) {
      var type = "image";
    } else {
      if (video) {
        type = "video";
      } else {
        type = "pdf";
      }
    }

    props.getType(type);
    const base64 = await convertBase64(file);
    e.target.value = null;
    props.getData(base64);
    props.getFileName(file.name);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <label className={`attachment-flex `}>
        <FontAwesomeIcon icon={props.font} />
        <p>{props.text}</p>

        <input
          type="file"
          onChange={upload}
          className="input-hide-button"
        ></input>
      </label>
    </>
  );
};

export default AddAttachments;
