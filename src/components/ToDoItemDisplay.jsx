
/** @typedef {import('../types/types')} */

import styled from 'styled-components';


const ToItemBody = styled.div`
  display: grid;

  grid-template-columns:     1fr         5fr         1fr         1fr;
  grid-template-areas: "deleteButton displayText doneButton cancelButton";
  justify-content: center;
  align-items: center;
  height: 5rem;
  min-height: 4rem;
  box-sizing:border-box;
  padding: 0 2rem;
  justify-items: center;
`

const itemButtons = styled.div`
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60% 60%;
  cursor: pointer;

  ${ ({ $isActive })=> { return ($isActive) ? "filter: brightness(1.5);" : ""}}

  &:hover {
    filter: brightness(1.5);
  }
`

const ToItemRemoveButton = styled(itemButtons)`
  background-color: #626262;
  background-image: url('src/assets/delete.svg');
  grid-area: deleteButton;
`

const ToItemDoneButton = styled(itemButtons)`
  background-color: #2c8c1d;
  background-image: url('src/assets/check.svg');
  grid-area: doneButton;
`

const ToItemCanceledButton = styled(itemButtons)`
  background-color: #a80606;
  background-image: url('src/assets/cancel.svg');
  grid-area: cancelButton;
`

const ToItemText = styled.p`
  font-size: 1.5rem;
  grid-area: displayText;
  text-align: center;
  max-width: 80%;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
`

/**
 * Render function for ToDoItemDisplay
 * @param {ToDoItemDisplayProp} props
 */
export function ToDoItemDisplay({
  Data,
  CanceledItemClick,
  DoneItemClick,
  RemoveItemClick
}){
  return (
    <ToItemBody>
      <ToItemRemoveButton
        onClick={()=>{ RemoveItemClick(Data)}}
        />

      <ToItemText>
        {
          Data.Description
        }
      </ToItemText>

      <ToItemDoneButton
        $isActive={Data.Done}
        onClick={()=>{
          DoneItemClick(Data)
        }}
      />

      <ToItemCanceledButton
        $isActive={Data.Canceled}
        onClick={()=>{
          CanceledItemClick(Data)
        }}
      />

    </ToItemBody>
  )
}

export default ToDoItemDisplay;
