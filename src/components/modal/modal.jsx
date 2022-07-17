import React from "react";
import "./modal.css";

function Modal({ message }) {
  return (
    <div className="modal">
      <div className="modal-message">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Modal;
