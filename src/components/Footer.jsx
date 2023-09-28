/** @typedef {import('../types/types')} */

import styled from 'styled-components';

const FooterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00806d;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  &:hover {
    filter: brightness(1.5);
  }
`;

const FooterHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 6rem;
  background-color: #858585;
  border-radius: 20px;
  margin: 0rem 1rem 1rem 1rem;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
`;

/**
 *
 * @param {FooterProps} param0
 * @returns
 */
export function Footer(
  {
    loadList,
    saveList
  }
){
  return (
    <FooterHolder>
      <FooterButton onClick={ saveList } >Save</FooterButton>
      <FooterButton onClick={ loadList } >Load</FooterButton>
    </FooterHolder>
  );
}

export default Footer;
