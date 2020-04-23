import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from '~/routes/Main.routes';

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
