import styled from "styled-components";

import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  background-color: var(--quaternary);
  box-sizing: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

  cursor: pointer;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background-color: var(--gray);

  &:hover {
    filter: brightness(0.8);
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-left: 8px;

  > strong {
    font-size: 13px;
    color: var(--white);

    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 25px;
  height: 20px;

  color: var(--white);
  
  transition: 0.2s;
  
  &:hover{
    backdrop-filter: brightness(70%);

    border-radius: 7px;
  }
  
  cursor: pointer;
`;

export const HeadphoneIcon = styled(Headset)`
  width: 25px;
  height: 20px;

  color: var(--white);
  
  transition: 0.2s;
  
  &:hover{
    backdrop-filter: brightness(70%);

    border-radius: 7px;
  }
  
  cursor: pointer;
`;

export const SettingsIcon = styled(Settings)`
  width: 25px;
  height: 20px;

  color: var(--white);
  
  transition: 0.2s;
  
  &:hover{
    backdrop-filter: brightness(70%);

    border-radius: 7px;
  }
  
  cursor: pointer;
`;
