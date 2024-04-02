const Card = ({ card }) => {
  const editCard = () => {
    console.log("Du klickade på kortet.");
  };

  return (
    <div className="Card" onClick={editCard}>
      {card}
    </div>
  );
};

export default Card;
