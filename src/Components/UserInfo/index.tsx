import React from 'react';

import { Avatar, Container, HeadphoneIcon, Icons, MicIcon, Profile, SettingsIcon, UserData } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Jorge</strong>
          <span>#1746</span>
        </UserData>
      </Profile>
      
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo;