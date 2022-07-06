import React from 'react';
import ChannelButton from '../ChannelButton';

import { Container, Content, Category, AddCategoryIcon } from './styles';

const ChanelList: React.FC = () => {
  return (
    <Container>
      <Category>
      <span>TEXT CHANNELS</span>
      <AddCategoryIcon />
    </Category>

 
    <ChannelButton channelName="geral"/>
    <ChannelButton channelName="musica"/>


    <Content>

    </Content>
    </Container>
  )
}

export default ChanelList;