import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Categorias from './src/screens/Categorias';
import Profile from './src/screens/Profile';
import Cachorro from './src/screens/cachorro/index'; 
import Gato from './src/screens/Gato';
import Passarinho from './src/screens/Passarinho';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categorias" component={Categorias} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Cachorro" component={Cachorro} />
        <Stack.Screen name="Gato" component={Gato} />
        <Stack.Screen name="Passarinho" component={Passarinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}