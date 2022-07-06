import styled from "styled-components";

import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 0.9px 0 16px;

  background-color: var(--secondary);
`

export const Content = styled.div`

`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: roboto;
  font-size: 13px;

  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }

  cursor: pointer;

  &:hover {
    filter: brightness(2);
  } 
  
`;


export const AddCategoryIcon = styled(Add)`
  width: 23px;
  height: 23px;

  color: var(--symbol);
  cursor: pointer;
`;