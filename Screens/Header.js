// Screens/Header.js
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Constants from 'expo-constants'; // Importa constantes de Expo, como la altura de la barra de estado.
import { useNavigation } from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.header}>JobLinker</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default Header;
