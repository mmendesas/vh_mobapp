import React from 'react';
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

import Card from '~/components/Card';
import InfoSection from '~/components/InfoSection';
import colors from '~/styles/colors';

const data = [1, 2, 3, 4];

export default function Home() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    })
  );

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
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Card data={item} />}
        />
        <FormButton>SEE ALL JOBS</FormButton>
      </View>
    </Container>
  );
}
