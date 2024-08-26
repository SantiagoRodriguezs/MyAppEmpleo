// Screens/Perfil.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export const Perfil = () => {
  const user = { //Objeto - Claves y valores.
    fullName: 'Juan Pérez',
    age: 28,
    phoneNumber: '+52 123 456 7890',
    email: 'juan.perez@example.com',
    selfDescription: 'Desarrollador de software apasionado por crear soluciones innovadoras. Experiencia en desarrollo frontend y backend.',
    skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    education: 'Ingeniería en Sistemas Computacionales - Universidad Nacional de Colombia',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        <Image source={require('../assets/user-icon.png')} style={styles.userIcon} />
        <Text style={styles.userName}>{user.fullName}</Text>
        <Text style={styles.userInfo}>Edad: {user.age}</Text>
        <Text style={styles.userInfo}>Número: {user.phoneNumber}</Text>
        <Text style={styles.userInfo}>Correo: {user.email}</Text>
        
        <Text style={styles.sectionTitle}>Autodescripción</Text>
        <Text style={styles.sectionText}>{user.selfDescription}</Text>

        <Text style={styles.sectionTitle}>Habilidades</Text>
        {user.skills.map((skill, index) => (
          <Text key={index} style={styles.skillItem}>{skill}</Text>
        ))}

        <Text style={styles.sectionTitle}>Estudios</Text>
        <Text style={styles.sectionText}>{user.education}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  profileCard: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  userIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 15,
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  skillItem: {
    fontSize: 16,
    color: '#333',
  },
});

export default Perfil;
