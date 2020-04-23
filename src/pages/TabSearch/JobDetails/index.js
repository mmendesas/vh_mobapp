import React from 'react';
import { View, Text } from 'react-native';
import { shape, object } from 'prop-types';

import {
  Container,
  Company,
  Image,
  Position,
  CompanyName,
  JobInfo,
  Actions,
} from './styles';

import LabelText from '~/components/LabelText';
import Button from '~/components/Button';

export default function JobDetails({ route }) {
  const { data } = route.params;

  return (
    <Container>
      <Company>
        <Image source={{ uri: 'http://logo.clearbit.com/netflix.com' }} />
        <View>
          <Position>Software Developer</Position>
          <CompanyName>Netflix Inc</CompanyName>
        </View>
      </Company>

      <JobInfo>
        <LabelText label="Location" text="Winnipeg, CA" />
        <LabelText label="Salary" text="$60k - $70k (annually)" />
        <LabelText label="Location" text="Full-time" />
        <LabelText label="Deadline" text="April 23, 2020" />
      </JobInfo>

      <Text>Job Description</Text>

      <Actions>
        <Button
          style={{ flex: 1, marginRight: 15 }}
          variation="outline"
          icon="favorite-border"
        >
          Like
        </Button>
        <Button style={{ flex: 2 }}>Apply Now</Button>
      </Actions>
    </Container>
  );
}

JobDetails.propTypes = {
  route: shape({
    params: shape({
      data: object,
    }).isRequired,
  }).isRequired,
};
