import { useState } from "react";
import {
  Header
}
from "../components"
import ToDoDisplay from "../components/ToDoDisplay";

export function AppMain() {

  const [ToDoItems, setDoItems] = useState([]);

  return (
    <>
      <Header />
      <ToDoDisplay toDoList={ToDoItems} setToDoItems={setDoItems} />
    </>
  );
}

export default AppMain;