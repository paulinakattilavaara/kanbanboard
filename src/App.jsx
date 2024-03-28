import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Todo from "./Todo";
import Doing from "./Doing";
import Done from "./Done";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/doing" element={<Doing />}></Route>
        <Route path="/done" element={<Done />}></Route>
      </Routes>
    </>
  );
}

export default App;
