// Screens/Register.js
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const validateEmail = (email) => {
    return email.includes('@') && email.endsWith('.com');
  };

  const handleRegister = () => {
    if (!validateEmail(email)) {
        Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido.');
        return;
    }

    if (!email || !password || !confirmPassword) {
        Alert.alert('Error', 'Por favor, llene todos los campos');
        return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada.');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Correo Electrónico"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        placeholderTextColor="#A0A0A0"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirmar Contraseña"
        placeholderTextColor="#A0A0A0"
        secureTextEntry
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#388E3C' : '#4CAF50' }
        ]}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
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
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Register;
