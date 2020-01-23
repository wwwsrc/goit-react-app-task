import React from "react";

const Modal = ({ id, object, handleKeyPress, handleBackdropClick }) => {
  window.addEventListener("keyup", handleKeyPress);
  return (
    <div
      className="Overlay"
      // onKeyPress={handleKeyPress}
      onClick={handleBackdropClick}
      id={id}
    >
      <div className="Modal">
        <img src={object.webformatURL} alt="sfcw" />
      </div>
    </div>
  );
};

export default Modal;
