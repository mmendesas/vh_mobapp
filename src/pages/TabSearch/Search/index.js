import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '~/components/Input';
import Label from '~/components/Label';
import JobItem from '~/components/JobItem';

import api from '~/services/api';

import {
  Container,
  Header,
  Content,
  Location,
  ButtonIcon,
  List,
  Title,
} from './styles';

const data = [1, 2, 3, 4, 5, 6, 7];

export default function Search() {
  const [jobs, setJobs] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    })
  );

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/jobs');
      setJobs(response.data);
    }
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Input icon="search" placeholder="Search Jobs" />
        <Location>
          <Label icon="place">Winnipeg, MB</Label>
          <ButtonIcon>
            <Icon name="tune" size={30} color="#777" />
          </ButtonIcon>
        </Location>
      </Header>
      <Content>
        <Title>{data.length} Jobs Found</Title>
        <List
          data={jobs}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <JobItem data={item} />}
        />
      </Content>
    </Container>
  );
}
