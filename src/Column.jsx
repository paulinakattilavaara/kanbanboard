import Card from "./Card";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Column = ({ title }) => {
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  const navToPage = () => {
    navigate(`/${title}`.toLowerCase());
  };

  const addCard = (newTask) => {
    setCards((cards) => [...cards, newTask]);
  };

  return (
    <div className="Column">
      <h2 className="colTitle" onClick={navToPage}>
        {title}
      </h2>
      {cards &&
        cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      {title === "Todo" && <Button text="Skapa ny uppgift" addCard={addCard} />}
    </div>
  );
};

export default Column;
