import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '~/pages/Search';
import JobDetails from '~/pages/JobDetails';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      headerBackTitleVisible: true,
    }}
    initialRouteName="Search"
  >
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen
      name="JobDetails"
      component={JobDetails}
      options={{ title: 'Job Details' }}
    />
  </Stack.Navigator>
);
