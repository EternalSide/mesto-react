import React from "react";

const ImagePopup = (props) => {
  return (
    <div className={props.card ? "popup popup_type_photo popup_opened" : "popup popup_type_photo"}>
      <div className="popup__pic-container">
        <button type="button" className="popup__close" onClick={props.close}></button>
        <img src={`${props.card.link}`} alt={props.card.name} className="popup__photo-image" />
        <h3 className="popup__pic-name">{props.card.name}</h3>
      </div>
    </div>
  );
};

export default ImagePopup;
