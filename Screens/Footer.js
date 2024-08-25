// Screens/Footer.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Login } from './Login';
import { Register } from './Register';

const Tab = createBottomTabNavigator();

export const Footer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Login') {
            iconName = 'sign-in'; // Icono de login
          } else if (route.name === 'Register') {
            iconName = 'user-plus'; // Icono de registro
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarStyle: { backgroundColor: '#f5f5f5' },
      })}
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
};

export default Footer;
