import React, { useState, useEffect } from 'react';
import { Linking, Clipboard, Alert, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '~/styles/colors';

import {
  Button,
  Container,
  Content,
  Header,
  Image,
  Name,
  Title,
  Email,
  Info,
  Description,
  Options,
} from './styles';

import api from '~/services/api';

export default function Profile() {
  const [profile, setProfile] = useState({});
  const { image, name, email, positionName, github, linkedin, about } = profile;

  const imgUri =
    image || 'https://api.adorable.io/avatars/285/abott@adorable.png';

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/userInfo');
      setProfile(response.data);
    }
    loadData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    })
  );

  async function writeToClipboard(text) {
    await Clipboard.setString(text);
    Alert.alert('Copied to clipboard');
  }

  return (
    <Container>
      <Content>
        <Header>
          <Image source={{ uri: imgUri }} />
          <Name>{name}</Name>
          <Email>{positionName}</Email>
        </Header>

        <Options>
          <Button onPress={() => Linking.openURL(linkedin)}>
            <Icon name="linkedin" size={50} color={colors.primary.light} />
          </Button>
          <Button onPress={() => Linking.openURL(github)}>
            <Icon name="git" size={50} color={colors.primary.light} />
          </Button>
          <Button onPress={() => writeToClipboard(email)}>
            <Icon
              name="google-plus-box"
              size={50}
              color={colors.primary.light}
            />
          </Button>
        </Options>

        <Info>
          <Title>About</Title>
          <Description>{about}</Description>
        </Info>
      </Content>
    </Container>
  );
}
