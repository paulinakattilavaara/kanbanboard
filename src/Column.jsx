import Card from "./Card";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Column = ({ title }) => {

const navigate = useNavigate();

const navToPage = () => {
  navigate(`/${title}`.toLowerCase());
}


  return (
    <div className="Column">
      <h2 className="colTitle" onClick={navToPage}>{title}</h2>
      <Card />
      {title === "Todo" && <Button text="Skapa ny uppgift" />}
    </div>
  );
};

export default Column;
