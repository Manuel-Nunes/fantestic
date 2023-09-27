/** @typedef {import('../types/types')} */

import {
  useState
} from "react";

import {
  Header,
  ToDoDisplay
} from "../components"

import {
  ListItems
} from "../mockData/ListItems"

export function AppMain() {

  const [ToDoItems, setDoItems] = useState(ListItems );

  return (
    <>
      <Header />
      <ToDoDisplay toDoList={ToDoItems} setToDoItems={setDoItems} />
    </>
  );
}

export default AppMain;
