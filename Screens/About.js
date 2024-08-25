// Screens/Dashboard.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>about</Text>
      <View style={styles.content}>
        <Text style={styles.text}>Bienvenido al About.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default About;
