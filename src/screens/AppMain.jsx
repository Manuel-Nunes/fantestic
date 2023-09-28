/** @typedef {import('../types/types')} */

import {
  useState
} from "react";

import {
  Header,
  ToDoDisplay,
  Footer
} from "../components"

import {
  ListItems
} from "../mockData/ListItems"

import {
  appendToDo
} from "../utils"

const itemKey = 'ToDoStorage';

/**
 * Saves ToDoList to localStorage
 * @param {ToDoData[]} ToDoList
 */
function saveToDoItems( ToDoList ){
  localStorage.setItem(itemKey,JSON.stringify(ToDoList));
}

/**
 * Loads ToDoItems if available from localstorage
 * @param {Function} setToDoValues
 */
function loadToDoItems(setToDoValues){
  try {
    setToDoValues(JSON.parse(localStorage.getItem(itemKey)))
  } catch (error) {
    console.warn(error)
  }

}

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
      <Footer
        loadList={ () => { loadToDoItems( setDoItems ) }}
        saveList={ () => { saveToDoItems( ToDoItems ) }}
      />
    </>
  );
}

export default AppMain;
