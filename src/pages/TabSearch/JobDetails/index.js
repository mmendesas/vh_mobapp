import React from 'react';
import { View, Text } from 'react-native';
import { shape, object } from 'prop-types';

// import { Container } from './styles';

export default function JobDetails({ route }) {
  const { data } = route.params;

  return (
    <View>
      <Text>DETAILS</Text>
    </View>
  );
}

JobDetails.propTypes = {
  route: shape({
    params: shape({
      data: object,
    }).isRequired,
  }).isRequired,
};
