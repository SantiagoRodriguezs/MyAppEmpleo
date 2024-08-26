// Screens/Main.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './Footer2';

export const Main = () => {
    return (
          <View style={styles.container}>
          <Footer />
          </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
