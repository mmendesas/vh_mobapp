import React from 'react';
import { bool, shape } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

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

export default function JobItem({ data }) {
  const { navigate } = useNavigation();

  const { liked } = data;

  function handleClick() {
    navigate('JobDetails', { data });
  }

  return (
    <Container onPress={handleClick}>
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
  data: shape({
    liked: bool,
  }),
};
