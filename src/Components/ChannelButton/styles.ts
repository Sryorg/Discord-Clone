import styled from "styled-components";

import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;

  background-color: transparent;
  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div svg {
    display: none;
  }

  > div span {
    margin-left: 3px;

    color: var(--senary)
  }

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      filter: brightness(2);
    }

    > div svg {
      display: inline;
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 29px;
  height: 23px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);

  margin-right: 5px;

  cursor: pointer;

  transition: color .2s;

  &:hover {
    filter: brightness(2);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  color: var(--symbol);

  cursor: pointer;

  transition: color .2s;

  &:hover {
    filter: brightness(2);
  }
`;