import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { Form } from '@unform/mobile';

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

export default function Search() {
  const formRef = useRef();
  const [jobs, setJobs] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    })
  );

  async function loadData(query = null) {
    const url = query ? `/jobs?q=${query}` : '/jobs';
    const response = await api.get(url);
    setJobs(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleSearch(data) {
    console.tron.log('dataTest', data);
    // loadData();
  }

  return (
    <Container>
      <Header>
        <Form ref={formRef} onSubmit={handleSearch}>
          <Input
            icon="search"
            name="search"
            placeholder="Search Jobs"
            onSubmitEditing={() => formRef.current.submitForm()}
          />
        </Form>
        <Location>
          <Label icon="place">Winnipeg, MB</Label>
          <ButtonIcon>
            <Icon name="tune" size={30} color="#777" />
          </ButtonIcon>
        </Location>
      </Header>
      <Content>
        <Title>{jobs.length} Jobs Found</Title>
        <List
          data={jobs}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <JobItem data={item} />}
        />
      </Content>
    </Container>
  );
}
