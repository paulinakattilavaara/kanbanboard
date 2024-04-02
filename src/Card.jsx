const Card = ({ card, date }) => {
  const editCard = () => {
    console.log("Du klickade på kortet.");
  };

  return (
    <div className="Card" onClick={editCard}>
      <p className="Card-text">{card}</p>
      <p className="Card-date">{date}</p>
    </div>
  );
};

export default Card;
