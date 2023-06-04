const Card = ({ data, onCardClick }) => {
  return (
    <div className="elements__block">
      <button type="button" className="elements__delete-icon"></button>
      <img onClick={() => onCardClick(data)} className="elements__pic" src={data.link} alt={data.name} />
      <div className="elements__info">
        <h2 className="elements__pic-name">{data.name}</h2>
        <div className="elements__like-block">
          <button type="button" className="elements__like"></button>
          <p className="elements__like-counter">0</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
