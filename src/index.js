import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

import './config/ReactotronConfig';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello world</Text>
      </SafeAreaView>
    </>
  );
}
