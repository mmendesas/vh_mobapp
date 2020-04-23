import React from 'react';
import { bool } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  ImageWrapper,
  Image,
  Position,
  Company,
  Country,
  Since,
  IconButton,
} from './styles';

export default function JobItem({ liked }) {
  return (
    <Container>
      <ImageWrapper>
        <Image source={{ uri: 'http://logo.clearbit.com/google.com' }} />
      </ImageWrapper>
      <Content>
        <Position>Software Developer</Position>
        <Company>Google</Company>
        <Country>Winnipeg, CA</Country>
        <Since>78% match</Since>
      </Content>
      <IconButton>
        <Icon name={liked ? 'favorite' : 'favorite-border'} size={25} />
      </IconButton>
    </Container>
  );
}

JobItem.defaultProps = {
  liked: false,
};

JobItem.propTypes = {
  liked: bool,
};
