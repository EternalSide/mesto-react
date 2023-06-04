import { useState } from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
function App() {
  //Popups State
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Close all
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      {selectedCard !== null && <ImagePopup card={selectedCard} close={closeAllPopups} />}
      <PopupWithForm close={closeAllPopups} isOpen={isEditProfilePopupOpen} name="main" title="Редактировать профиль">
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
      <PopupWithForm close={closeAllPopups} isOpen={isAddPlacePopupOpen} name="add" title="Новое место">
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
      <PopupWithForm close={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="avatar" title="Новый аватар">
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
      <Header />

      <Main
        card={selectedCard}
        onClose={closeAllPopups}
        popupState={[isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen]}
        onEditProfile={() => setIsEditProfilePopupOpen(true)}
        onEditPlace={() => setIsAddPlacePopupOpen(true)}
        onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
        onCardClick={(data) => setSelectedCard(data)}
      />

      <Footer />
    </div>
  );
}

export default App;
