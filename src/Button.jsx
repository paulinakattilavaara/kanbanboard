import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const Button = ({ text, addCard, addDate }) => {
  const [task, setTask] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    const now = new Date().toLocaleDateString();
    e.preventDefault();
    setShowForm(false);
    addCard(task);
    addDate(now);
    setTask("");
    console.log(now);
    console.log(task);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit} className="taskForm">
          <input
            className="taskInput"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            autoFocus
          />
          <button type="submit" className="addTaskBtn">
            Lägg till
          </button>
        </form>
      ) : (
        <button className="Button" onClick={handleForm}>
          <FaPlus className="icon" />
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
