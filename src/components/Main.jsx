import React, { useState, useEffect } from "react";

import api from "../utils/api.js";
import Card from "./Card";

import ChangeAvatar from "../images/ChangeAvatar.png";
const Main = (props) => {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  return (
    <>
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
