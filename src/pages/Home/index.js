import React, { useEffect, useState } from 'react';
import { Image, View, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import logo from '~/assets/vh-logo.png';
import {
  Container,
  Header,
  Title,
  FormInput,
  FormButton,
  List,
} from './styles';

import api from '~/services/api';
import Card from '~/components/Card';
import InfoSection from '~/components/InfoSection';
import colors from '~/styles/colors';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    })
  );

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/jobs?_limit=3');
      setJobs(response.data);
    }
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logo} alt="logo" width="100px" height="100px" />
        <Title variation="primary">Find your dream job abroad</Title>
        <FormInput icon="search" placeholder="Search Jobs" />
      </Header>
      <InfoSection description="Show us your skills and experience so we can match you to the right company" />
      <View>
        <Title variation="base">Recommended Jobs</Title>
        <List
          horizontal
          data={jobs}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Card data={item} />}
        />
        <FormButton>SEE ALL JOBS</FormButton>
      </View>
    </Container>
  );
}
