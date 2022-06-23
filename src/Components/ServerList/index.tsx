import React from 'react';

import ServerButton from '../ServerButton';
import { Separator } from './styles';

import { Container } from './styles';

const ServerList: React.FC = () => {
 return (
  <Container>
    <ServerButton isHome />

    <Separator  />

    <ServerButton />
    <ServerButton hasNotification />
    <ServerButton />
    <ServerButton hasNotification/>
    <ServerButton />
    <ServerButton mentions={3}/>
    <ServerButton />
    <ServerButton hasNotification/>
    <ServerButton />
    <ServerButton />
    <ServerButton mentions={3}/>
  </Container>
 )
};

export default ServerList;