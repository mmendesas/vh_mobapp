import React from 'react';
import { View } from 'react-native';
import { shape, object } from 'prop-types';

import {
  Container,
  Company,
  Image,
  Position,
  CompanyName,
  JobInfo,
  Actions,
  JobContent,
  Title,
  Description,
} from './styles';

import LabelText from '~/components/LabelText';
import Button from '~/components/Button';

export default function JobDetails({ route }) {
  const { data } = route.params;

  const {
    company,
    positionName,
    salary,
    city,
    jobType,
    deadline,
    description,
  } = data;

  return (
    <>
      <Container>
        <Company>
          <Image
            source={{
              uri: `http://logo.clearbit.com/${company.toLowerCase()}.com`,
            }}
          />
          <View>
            <Position>{positionName}</Position>
            <CompanyName>{company}</CompanyName>
          </View>
        </Company>

        <JobInfo>
          <LabelText label="Location" text={city} />
          <LabelText label="Salary" text={salary} />
          <LabelText label="Job Type" text={jobType} />
          <LabelText label="Deadline" text={deadline} />
        </JobInfo>

        <JobContent>
          <Title>Job Description</Title>
          <Description>{description.replace(/↵/g, '\n')}</Description>
        </JobContent>
      </Container>
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
    </>
  );
}

JobDetails.propTypes = {
  route: shape({
    params: shape({
      data: object,
    }).isRequired,
  }).isRequired,
};
