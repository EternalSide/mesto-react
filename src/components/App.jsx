import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
function App() {
  //Popups State
  const [isEditProfilePopupOpen, handleEditProfileClick] = useState(false);
  const [isAddPlacePopupOpen, handleEditPlaceClick] = useState(false);
  const [isEditAvatarPopupOpen, handleEditAvatarClick] = useState(false);
  const [selectedCard, handleCardClick] = useState("");

  // Close all
  const closeAllPopups = () => {
    handleEditAvatarClick(false);
    handleEditProfileClick(false);
    handleEditPlaceClick(false);
    handleCardClick(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        card={selectedCard}
        onClose={closeAllPopups}
        popupState={[isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen]}
        onEditProfile={() => handleEditProfileClick(true)}
        onEditPlace={() => handleEditPlaceClick(true)}
        onEditAvatar={() => handleEditAvatarClick(true)}
        onCardClick={(data) => handleCardClick(data)}
      />

      <Footer />
    </div>
  );
}

export default App;
