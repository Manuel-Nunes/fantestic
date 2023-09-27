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

import {
  appendToDo
} from "../utils"

export function AppMain() {

  const [ToDoItems, setDoItems] = useState(ListItems );

  /**
   * Adds new todo item to state
   * @param {string} description 
   */
  const addToDo = (description)=>{
    setDoItems(appendToDo(description,ToDoItems)) 
  }

  return (
    <>
      <Header addToDoItem={addToDo}/>
      <ToDoDisplay toDoList={ToDoItems} setToDoItems={setDoItems} />
    </>
  );
}

export default AppMain;
