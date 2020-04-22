import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Type,
  Position,
  Content,
  Image,
  Country,
  City,
} from './styles';

export default function Card() {
  return (
    <Container>
      <View>
        <Type>FullTime</Type>
        <Position>Frontend Developer</Position>
      </View>

      <Content>
        <Image source={{ uri: 'http://logo.clearbit.com/boldcommerce.com' }} />
        <View>
          <Country>Boldcommerce</Country>
          <City>Winnipeg, CA</City>
        </View>
      </Content>
    </Container>
  );
}
