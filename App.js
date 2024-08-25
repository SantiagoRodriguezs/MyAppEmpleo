// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './Screens/Footer';
import { Header } from './Screens/Header';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Footer />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
