// Screens/Footer.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Dashboard } from './Dashboard'; 
import { Ofertas } from './Ofertas'; 
import { About } from './About'; 
import { Perfil } from './Perfil'; 

const Tab = createBottomTabNavigator();

export const Footer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'home'; 
          } else if (route.name === 'Ofertas') {
            iconName = 'tags'; 
          } else if (route.name === 'About') {
            iconName = 'info-circle'; 
          } else if (route.name === 'Perfil') {
            iconName = 'user-circle'; 
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarStyle: { backgroundColor: '#f5f5f5' },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Ofertas" component={Ofertas} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};

export default Footer;
