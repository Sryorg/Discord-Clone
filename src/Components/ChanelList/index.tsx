import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

const ChanelList: React.FC = () => {
  return (
    <Container>
      <Category>
      <span>TEXT CHANNELS</span>
      <AddCategoryIcon />
    </Category>

{/** 
      <ChannelButton channelName="geral"/>
      <ChannelButton channelName="musica"/>
*/}
    </Container>
  )
}

export default ChanelList;