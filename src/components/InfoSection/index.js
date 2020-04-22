import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';

import { Container, Content, Description, Action } from './styles';

export default function InfoSection({ description }) {
  return (
    <Container>
      <Icon name="description" color={colors.primary.light} size={50} />
      <Content>
        <Description>{description}</Description>
        <Action>Update your profile</Action>
      </Content>
    </Container>
  );
}
