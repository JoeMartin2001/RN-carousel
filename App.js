import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Onboarding} from './src/components/Onboarding';

const App = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
