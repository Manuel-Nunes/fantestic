import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  display: flex;
  background-color: green;
`

/**
 * @typedef {object} ToDoDisplayProps
 * @property {string[]} toDoList
 * @property {Function} setToDoItems
 */

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


  return (
    <ListWrapper>
      {
        toDoList.map( (value, index)=> {
          return (
            <ListItem key={`listItem-${index}`} onClick={ ()=> {
              setToDoItems()
            }}>
              {
                value
              }
            </ListItem>
          )
        })
      }
    </ListWrapper>
  );
}

export default ToDoDisplay;