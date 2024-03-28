import { FaPlus } from "react-icons/fa";

const Button = ({ text }) => {
  const createTask = () => {
      console.log("Du vill skapa en ny uppgift.");
  };

  return (
    <button className="Button" onClick={createTask}>
      <FaPlus className="icon" />
      {text}
    </button>
  );
};

export default Button;
