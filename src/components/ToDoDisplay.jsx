/** @typedef {import('../types/types')} */

import styled from 'styled-components';
import ToDoItemDisplay from './ToDoItemDisplay';

import {
  removeItemFromDoToList,
  toggleCanceled,
  toggleDone
} from '../utils';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #858585;
  border-radius: 20px;
  margin: 1rem 1rem;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  &:nth-child(odd) {
    background-color: grey;
  }
`;

/**
 * @param {ToDoDisplayProps} props
 * @returns { JSX.Element }
 */
export function ToDoDisplay(
  {
    toDoList,
    setToDoItems
  }
){

  /**
   * Removes provided Item from todo state
   * @param {ToDoData} Item
   */
  const removeItem = (Item)=>{
    setToDoItems(removeItemFromDoToList(Item,toDoList) );
  };

  /**
   * Toggles done state on item
   * @param {ToDoData} Item
   */
  const toggleDoneClick = (Item )=>{
    setToDoItems(toggleDone(Item,toDoList) );
  };

  /**
   * Toggles done state on item
   * @param {ToDoData} Item
   */
  const toggleCancelClick = (Item )=>{
    setToDoItems(toggleCanceled(Item,toDoList) );
  };

  return (
    <ListWrapper>
      {
        toDoList.map( (value, index)=> {
          return (
            <ToDoItemDisplay
              Data={value}
              key={`Item-${index}`}
              RemoveItemClick={removeItem}
              CanceledItemClick={toggleCancelClick}
              DoneItemClick={toggleDoneClick}
            />
          );
        })
      }
    </ListWrapper>
  );
}

export default ToDoDisplay;
