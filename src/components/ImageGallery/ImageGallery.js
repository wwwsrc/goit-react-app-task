import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
const uuidv4 = require("uuid/v4");

const ImageGallery = ({
  images,
  openModal,
  isModalOpen,
  id,
  object,
  handleKeyPress,
  handleBackdropClick
}) => {
  return (
    <>
      {isModalOpen && (
        <Modal
          id={id}
          object={object}
          handleKeyPress={handleKeyPress}
          handleBackdropClick={handleBackdropClick}
        />
      )}
      <ul className="ImageGallery">
        {images.map(item => (
          <ImageGalleryItem
            key={uuidv4()}
            src={item.webformatURL}
            id={item.id}
            openModal={openModal}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
