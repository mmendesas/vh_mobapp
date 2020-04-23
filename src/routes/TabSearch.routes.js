import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '~/pages/TabSearch/Search';
import JobDetails from '~/pages/TabSearch/JobDetails';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerBackTitleStyle: {
        paddingLeft: 10,
      },
      headerTintColor: '#333',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    initialRouteName="Search"
  >
    <Stack.Screen
      name="Search"
      component={Search}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="JobDetails"
      component={JobDetails}
      options={{ title: 'Job Details' }}
    />
  </Stack.Navigator>
);
