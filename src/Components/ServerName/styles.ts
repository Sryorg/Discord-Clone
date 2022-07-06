import styled from "styled-components";

import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  background-color: var(--secondary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 11px 0 16px;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 0px 0px;
  z-index: 2;

  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--text);
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 24px;
  height: 24px;

  color: var(--text);

  cursor: pointer;
`;