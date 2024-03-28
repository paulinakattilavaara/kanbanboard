const Card = () => {

  const editCard = () => {
    console.log("Du klickade på kortet.");
  };

  return (
    <div className="Card" onClick={editCard}>
      Test
    </div>
  );
};

export default Card;
