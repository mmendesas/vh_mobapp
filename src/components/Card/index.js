import React from 'react';
import { shape, string } from 'prop-types';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Type,
  Position,
  Content,
  Image,
  Country,
  City,
} from './styles';

export default function Card({ data }) {
  const { navigate } = useNavigation();

  const { jobType, positionName, city, company } = data;

  function handleClick() {
    navigate('JobDetails', { data });
  }

  return (
    <Container onPress={handleClick}>
      <View>
        <Type>{jobType}</Type>
        <Position>{positionName}</Position>
      </View>

      <Content>
        <Image
          source={{
            uri: `http://logo.clearbit.com/${company.toLowerCase()}.com`,
          }}
        />
        <View>
          <Country>{company}</Country>
          <City>{city}</City>
        </View>
      </Content>
    </Container>
  );
}

Card.propTypes = {
  data: shape({
    jobType: string.isRequired,
    positionName: string.isRequired,
    city: string.isRequired,
    company: string.isRequired,
  }).isRequired,
};
