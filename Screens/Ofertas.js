// Screens/Ofertas.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert } from 'react-native';

export const Ofertas = () => {
  const jobSections = { //Objeto - Claves y valores.
    'UI/UX': [ //Array
      { //Objeto
        title: 'Diseñador UI',
        description: 'Diseñar interfaces atractivas y fáciles de usar.',
        skills: 'Figma, Sketch, Adobe XD',
        salary: '$35,000 - $45,000 anuales',
      },
      {
        title: 'Diseñador UX',
        description: 'Crear experiencias de usuario intuitivas.',
        skills: 'Investigación de usuario, Prototipado',
        salary: '$40,000 - $50,000 anuales',
      },
      {
        title: 'Especialista en Diseño Gráfico',
        description: 'Desarrollar elementos gráficos visuales.',
        skills: 'Photoshop, Illustrator',
        salary: '$30,000 - $40,000 anuales',
      },
    ],
    'Backend': [ 
      {
        title: 'Desarrollador Backend',
        description: 'Desarrollar APIs robustas y escalables.',
        skills: 'Node.js, Express, MongoDB',
        salary: '$50,000 - $60,000 anuales',
      },
      {
        title: 'Ingeniero de Software',
        description: 'Optimizar el rendimiento del servidor.',
        skills: 'Java, Spring, MySQL',
        salary: '$55,000 - $65,000 anuales',
      },
      {
        title: 'Desarrollador Python',
        description: 'Automatización y desarrollo de backend.',
        skills: 'Python, Django, Flask',
        salary: '$45,000 - $55,000 anuales',
      },
    ],
    'Bases de Datos': [
      {
        title: 'Administrador de Bases de Datos',
        description: 'Gestionar bases de datos empresariales.',
        skills: 'SQL, Oracle, MySQL',
        salary: '$60,000 - $70,000 anuales',
      },
      {
        title: 'Analista de Datos',
        description: 'Analizar grandes volúmenes de datos.',
        skills: 'SQL, Python, Excel',
        salary: '$45,000 - $55,000 anuales',
      },
      {
        title: 'Ingeniero de Big Data',
        description: 'Trabajar con sistemas de big data.',
        skills: 'Hadoop, Spark, Scala',
        salary: '$70,000 - $80,000 anuales',
      },
    ],
  };

  const handleApply = (jobTitle) => {
    Alert.alert('Aplicación Exitosa', `Has aplicado con éxito a la oferta de ${jobTitle}`);
  };

  const renderSection = (sectionTitle, offers) => (
    <View key={sectionTitle} style={styles.section}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      {offers.map((offer, index) => ( //Map method para iterar sobre los array
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
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(jobSections).map(([sectionTitle, offers]) =>
        renderSection(sectionTitle, offers)
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  offerCard: {
    backgroundColor: '#ffffff',
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
    fontSize: 18,
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

export default Ofertas;
