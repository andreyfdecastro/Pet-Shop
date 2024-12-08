import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Categorias from './src/screens/Categorias';
import Cachorro from './src/screens/cachorro';
import Gato from './src/screens/Gato';
import Passarinho from './src/screens/Passarinho';
import Profile from './src/screens/Profile';
import IdadeCachorro from './src/screens/IdadeCachorro';
import RacaCachorro from './src/screens/RacaCachorro';
import PersonalidadeCachorro from './src/screens/PersonalidadeCachorro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categorias" component={Categorias} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Dog" component={Cachorro} />
        <Stack.Screen name="Cat" component={Gato} />
        <Stack.Screen name="Bird" component={Passarinho} />
        <Stack.Screen name="IdadeCachorro" component={IdadeCachorro} />
        <Stack.Screen name="RacaCachorro" component={RacaCachorro} />
        <Stack.Screen name="PersonalidadeCachorro" component={PersonalidadeCachorro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}