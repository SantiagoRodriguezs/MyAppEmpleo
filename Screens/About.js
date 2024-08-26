// Screens/About.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quiénes Somos</Text>
        <Text style={styles.sectionText}>
          Empleanet es una plataforma dedicada a conectar a los profesionales con las mejores oportunidades de empleo disponibles en el mercado. Nuestra misión es facilitar el proceso de búsqueda de empleo tanto para los candidatos como para las empresas, ofreciendo un espacio intuitivo y eficiente para ambos.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Historia de la Empresa</Text>
        <Text style={styles.sectionText}>
          Fundada en 2020, Empleanet nació de la necesidad de simplificar y mejorar el mercado laboral digital. Desde entonces, hemos crecido rápidamente, adaptándonos a las necesidades cambiantes de los empleadores y trabajadores, integrando tecnología avanzada para hacer el proceso más efectivo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dónde Estamos Ubicados</Text>
        <Text style={styles.sectionText}>
          Nuestra sede principal se encuentra en la Ciudad de Bogota D.C., pero operamos a nivel nacional e internacional, conectando a candidatos y empresas de diferentes partes del mundo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Empleos Generados</Text>
        <Text style={styles.sectionText}>
          Hasta la fecha, hemos ayudado a generar más de 10,000 empleos a través de nuestra plataforma, conectando a empresas líderes con candidatos calificados en diversos sectores.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>¿Por Qué Somos Mejores?</Text>
        <Text style={styles.sectionText}>
          En Empleanet, nos diferenciamos por nuestro enfoque en la experiencia del usuario y la innovación. Ofrecemos herramientas avanzadas de búsqueda y filtros personalizados que permiten a los candidatos encontrar empleos que realmente se ajusten a sus habilidades e intereses. Además, proporcionamos a las empresas acceso a una amplia base de datos de candidatos calificados, haciendo que el proceso de contratación sea más rápido y efectivo.
        </Text>
      </View>
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
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
  },
});

export default About;
