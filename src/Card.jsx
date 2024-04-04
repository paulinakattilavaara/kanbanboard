import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import Popup from "./Popup";

const Card = ({ card, date, moveRight, moveLeft, id, deleteCard }) => {
  const [showPopup, setShowPopup] = useState(false);

  const editCard = () => {
    console.log("Du klickade på kortet.");
    setShowPopup(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setShowPopup(false);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    deleteCard(id);
  };

  return (
    <div className="Card" onClick={editCard}>
      <p className="Card-text">{card}</p>
      <p className="Card-date">{date}</p>
      <div className="arrows">
        <button className="left-arrow" onClick={moveLeft}>
          <FaArrowAltCircleLeft />
        </button>
        <button className="right-arrow" onClick={moveRight}>
          <FaArrowAltCircleRight />
        </button>
      </div>
      {showPopup && (
        <Popup
          onClose={handleClose}
          onDelete={handleDelete}
          card={card}
          date={date}
        />
      )}
    </div>
  );
};

export default Card;
