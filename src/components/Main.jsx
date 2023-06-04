import React, { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";
import api from "../utils/api.js";
import Card from "./Card";
import PopupWithForm from "./PopupWithForm.jsx";
import ChangeAvatar from "../images/ChangeAvatar.png";
const Main = (props) => {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);
  const [isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen] = props.popupState;
  return (
    <>
      <ImagePopup card={props.card} close={props.onClose} />
      <PopupWithForm close={props.onClose} isOpen={isEditProfilePopupOpen} name="main" title="Редактировать профиль">
        <input
          name="name"
          type="text"
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          id="name"
        />
        <span className="name-error popup__input-error"></span>
        <input
          name="about"
          type="text"
          className="popup__input popup__input_type_bio"
          placeholder="Род деятельности"
          required
          minLength="2"
          maxLength="200"
          id="bio"
        />
        <span className="bio-error popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm close={props.onClose} isOpen={isAddPlacePopupOpen} name="add" title="Новое место">
        <input
          id="name-input"
          name="name"
          type="text"
          className="popup__input popup__input_type_cardname"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="name-input-error popup__input-error"></span>

        <input
          id="email-input"
          name="link"
          type="url"
          className="popup__input popup__input_type_cardlink"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="email-input-error popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm close={props.onClose} isOpen={isEditAvatarPopupOpen} name="avatar" title="Новый аватар">
        <input
          id="name-input"
          name="name"
          type="text"
          className="popup__input popup__input_type_cardname"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="name-input-error popup__input-error"></span>

        <input
          id="email-input"
          name="link"
          type="url"
          className="popup__input popup__input_type_cardlink"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="email-input-error popup__input-error"></span>
      </PopupWithForm>
      <main>
        <section className="profile">
          <div className="profile__image-container">
            <img src={userAvatar} alt="Аватар в профиле" className="profile__image" />
            <div className="profile__icon-container" onClick={props.onEditAvatar}>
              <img className="profile__change-icon" src={ChangeAvatar} alt="" />
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__info-edit">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__bio">{userDescription}</p>
          </div>
          <button type="button" className="profile__add" onClick={props.onEditPlace}></button>
        </section>

        <section className="elements">
          {cards.map((item) => {
            return <Card onCardClick={props.onCardClick} key={item._id} data={item} />;
          })}
        </section>
      </main>
    </>
  );
};

export default Main;
