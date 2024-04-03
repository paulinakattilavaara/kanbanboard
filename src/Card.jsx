import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Card = ({ card, date }) => {
  const editCard = () => {
    console.log("Du klickade på kortet.");
  };

  const moveLeft = (event) => {
    event.stopPropagation();
    console.log("du klickade på vänster pil.");
  };

  const moveRight = (event) => {
    event.stopPropagation();
    console.log("du klickade på höger pil.");
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
    </div>
  );
};

export default Card;
