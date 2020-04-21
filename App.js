import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.lighter,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <Text>Hello world</Text>
      </SafeAreaView>
    </>
  );
}
