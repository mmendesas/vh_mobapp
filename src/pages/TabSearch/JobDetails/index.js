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

  return (
    <>
      <Container>
        <Company>
          <Image
            source={{ uri: 'http://logo.clearbit.com/boldcommerce.com' }}
          />
          <View>
            <Position>Software Developer</Position>
            <CompanyName>Bold Commerce</CompanyName>
          </View>
        </Company>

        <JobInfo>
          <LabelText label="Location" text="Winnipeg, MB" />
          <LabelText label="Salary" text="$60k - $70k (annually)" />
          <LabelText label="Location" text="Full-time" />
          <LabelText label="Deadline" text="April 23, 2020" />
        </JobInfo>

        <JobContent>
          <Title>Job Description</Title>
          <Description>
            Here's what we're looking for{'\n\n'}We’re looking for software
            developers with a wide range of experience and exposure to different
            technologies to add to our forward-thinking, driven development
            teams. {'\n\n'}At Bold we use PHP, Go, Ruby, and JavaScript,
            however, if your experience is with other languages we’d still love
            to meet you! More than just technical skills, we’re looking for
            like-minded individuals who are generally awesome and will make the
            office a better place for everyone.{'\n\n'}We’re looking for someone
            who: Likes to get shit done Thrives in an environment of talented,
            hard-working people Resonates with our values
          </Description>
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
