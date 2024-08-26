// Screens/Dashboard.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert } from 'react-native';

export const Dashboard = () => {
  const jobOffers = [ //Array 
    { //Objeto - Claves y valores.
      title: 'Desarrollador Frontend',
      description: 'Se busca un desarrollador frontend con experiencia en React y JavaScript para trabajar en proyectos innovadores y desafiantes. El candidato ideal deberá ser capaz de trabajar en equipo y cumplir con plazos ajustados.',
      skills: 'React, JavaScript, CSS',
      salary: '$40,000 - $50,000 anuales',
    },
    {
      title: 'Diseñador UX/UI',
      description: 'Buscamos un diseñador UX/UI con experiencia en diseño de interfaces y experiencia de usuario para mejorar la apariencia y usabilidad de nuestras aplicaciones. Deberás tener un ojo para el detalle y habilidades creativas.',
      skills: 'Figma, Sketch, Adobe XD',
      salary: '$35,000 - $45,000 anuales',
    },
    {
      title: 'Analista de Datos',
      description: 'Se requiere un analista de datos con experiencia en SQL y análisis de grandes volúmenes de datos. El candidato ideal debe ser capaz de extraer información valiosa que impulse las decisiones estratégicas de la empresa.',
      skills: 'SQL, Python, Excel',
      salary: '$45,000 - $55,000 anuales',
    },
  ];

  const handleApply = (jobTitle) => {
    Alert.alert('Aplicación Exitosa', `Has aplicado con éxito a la oferta de ${jobTitle}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bienvenido a Empleanet</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Descubre oportunidades laborales diseñadas para impulsar tu carrera. 
          En Empleanet, conectamos a talentos excepcionales con empresas líderes. 
          Navega por nuestras ofertas y encuentra el empleo perfecto que se ajuste a tus habilidades 
          y aspiraciones profesionales.
        </Text>
      </View>
      {jobOffers.map((offer, index) => (
        <View key={index} style={styles.offerCard}>
          <Text style={styles.offerTitle}>{offer.title}</Text>
          <Text style={styles.offerDescription}>{offer.description}</Text>
          <Text style={styles.offerSkills}>Habilidades: {offer.skills}</Text>
          <Text style={styles.offerSalary}>Salario: {offer.salary}</Text>
          <Button 
            title="Aplicar"
            onPress={() => handleApply(offer.title)}
            color="#4CAF50"
          />
        </View>
      ))}
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
    marginBottom: 10,
  },
  descriptionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  offerCard: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  offerDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  offerSkills: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  offerSalary: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});

export default Dashboard;
