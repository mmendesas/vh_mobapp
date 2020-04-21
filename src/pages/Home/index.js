import React from 'react';
import { Image } from 'react-native';

import { Container, Header, Title } from './styles';

import logo from '~/assets/vh-logo.png';

export default function Home() {
  return (
    <Container>
      <Header>
        <Image source={logo} alt="logo" width="100px" height="100px" />
        <Title>Find your dream job abroad</Title>
      </Header>
    </Container>
  );
}
