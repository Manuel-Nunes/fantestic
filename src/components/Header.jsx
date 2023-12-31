/** @typedef {import('../types/types')} */

import { useState } from 'react';
import styled from 'styled-components';

const HeaderHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 6rem;
  background-color: #858585;
  border-radius: 20px;
  margin: 1rem 1rem 0rem 1rem;
  gap: 1rem;

  @media screen and (width < 400px) {
    gap: 1rem;
  }
`;

const ItemInput = styled.input`
  font-size: 1.25rem;
  border-radius: 20px;
  background-color:#454545;
  padding: 0.25rem 1rem;
  width: 10rem;

  @media screen and (width < 380px) {
    font-size: 1rem;
    width:8rem;
  }

  @media screen and (width < 290px) {
    padding: 0.25rem 0.25rem;
    font-size: 0.75rem;
    width:6rem;
  }
`;

const AddButton = styled.div`
  background-color: green;
  aspect-ratio: 1/1;
  height: 60%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60% 60%;
  background-image: url('src/assets/check.svg');

  &:hover {
    filter: brightness(1.5);
  }

  @media screen and (width < 380px) {
    height: 40%
  }
`;

const InputLable = styled.label`
  padding-right: 1rem;

  @media screen and (width < 280px) {
    padding-right: 0.25rem;
  }
`;

/**
 *
 * @param {HeaderProps} props
 * @returns
 */
export function Header(
  {
    addToDoItem
  }
){
  const [textState, setState] = useState('');
  return (
    <HeaderHolder>

      <div>
        <InputLable>Task:</InputLable>
        <ItemInput
          id={"task-text"}
          onChange={(e)=>{
          setState(e.target.value)
        }} value={textState}></ItemInput>
      </div>

      <AddButton
        id={'add-task-btn'}
        onClick={()=>{
          addToDoItem(textState);
          setState("")
        }}/>
    </HeaderHolder>
  );
}

export default Header;
