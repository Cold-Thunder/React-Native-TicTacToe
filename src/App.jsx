import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './pages/Home';

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="skyblue"/>
      <ScrollView>
          <Home />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999"
  }
});

export default App;
