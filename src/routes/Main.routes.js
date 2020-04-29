/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '~/pages/Home';
import Favorites from '~/pages/Favorites';
import Profile from '~/pages/Profile';

import TabSearch from '~/routes/TabSearch.routes';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
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
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="dashboard" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={TabSearch}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorites}
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => (
            <Icon name="favorite-border" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <CIcon name="account" size={40} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
