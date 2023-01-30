import React from "react";
import "../styles/ConfirmationBox.scss";
import { confirm } from "./Constants";
const ConfirmationBox = (props) => {
  const deleteContent = () => {
    props.getConfirmation(true);
  };
  const donotDelete = () => {
    props.getConfirmation(false);
  };
  return (
    <div className="pop-up-background">
      <div className="display-pop-up">
        <p>Are you sure You want to delete ?</p>
        <div className="confirmation-button-flex">
          <button className="confirmation-button " onClick={deleteContent}>
            {confirm.delete}
          </button>
          <button
            className="confirmation-button ad-color"
            onClick={donotDelete}
          >
            {confirm.ok}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
