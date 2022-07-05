import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChanelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      
      <Title> Geral </Title>

      <Separator />

      <Description> Chat Geral </Description>
    </Container>
  )
}

export default ChanelInfo;