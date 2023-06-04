import React from "react";

const PopupWithForm = (props) => {
  return (
    <div className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={props.close}></button>
        <h2 className="popup__red">{props.title}</h2>
        <form action="form.php" className="popup__form" name={props.name} noValidate onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className="popup__button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
