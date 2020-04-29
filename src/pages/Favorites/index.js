import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default function Favorites() {
  return (
    <Container>
      <Icon name="block" size={50} color="#ccc" />
      <Text>Empty List</Text>
    </Container>
  );
}
