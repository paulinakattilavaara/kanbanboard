import Card from "./Card";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Column = ({ title }) => {
  const [cards, setCards] = useState([]);
  const [date, setDate] = useState("");
  const [column, setColumn] = useState("Todo");
  // const [id, setId] = useState(0);

  const navigate = useNavigate();

  const navToPage = () => {
    navigate(`/${title}`.toLowerCase());
  };

  // const addCard = (newTask) => {
  //   setCards((cards) => [...cards, newTask]);
  // };

  const addCard = (newTask) => {
    // addId(newTask);
    if (column === title) {
      setCards((prevCards) => [...prevCards, newTask]);
    }
  };

  const addDate = (newDate) => {
    setDate(newDate);
  };

  // const addId = () => {
  //   const id = cards.length ? cards.length + 1 : 1;
  //   setId(id);
  // };

  const moveLeft = (event) => {
    event.stopPropagation();
    console.log("du klickade på vänster pil.");
    if (column === "Todo") {
      return;
    } else if (column === "Doing") {
      setColumn("Todo");
    } else if (column === "Done") {
      setColumn("Doing");
    } else {
      console.log("Column not defined.");
    }
  };

  const moveRight = (event) => {
    event.stopPropagation();
    console.log("du klickade på höger pil.");
    if (column === "Todo") {
      setColumn("Doing");
    } else if (column === "Doing") {
      setColumn("Done");
    } else if (column === "Done") {
      return;
    } else {
      console.log("Column not defined.");
    }
  };

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="Column">
      <h2 className="colTitle" onClick={navToPage}>
        {title}
      </h2>
      {cards &&
        cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            date={date}
            moveLeft={moveLeft}
            moveRight={moveRight}
            id={index + 1}
            deleteCard={deleteCard}
          />
        ))}
      {title === "Todo" && (
        <Button text="Skapa ny uppgift" addCard={addCard} addDate={addDate} />
      )}
    </div>
  );
};

export default Column;
