import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        headerMode="none"
        tabBarOptions={{
          inactiveTintColor: '#ddd',
          style: {
            height: 100,
            paddingTop: 10,
            elevation: 8,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <Icon name="dashboard" size={40} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <Icon name="search" size={40} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorites}
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <Icon name="favorite-border" size={40} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <Icon name="account-circle" size={40} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
