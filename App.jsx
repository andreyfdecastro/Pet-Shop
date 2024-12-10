import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Categorias from './src/screens/Categorias';
import Cachorro from './src/screens/cachorro';
import Gato from './src/screens/Gato';
import Passarinho from './src/screens/Passarinho';
import SobreMim from './src/screens/SobreMim';
import IdadeCachorro from './src/screens/IdadeCachorro';
import RacaCachorro from './src/screens/RacaCachorro';
import PersonalidadeCachorro from './src/screens/PersonalidadeCachorro';
import IdadeGato from './src/screens/IdadeGato';
import RacaGato from './src/screens/RacaGato';
import PersonalidadeGato from './src/screens/PersonalidadeGato';
import IdadePassarinho from './src/screens/IdadePassarinho';
import RacaPassarinho from './src/screens/RacaPassarinho';
import PersonalidadePassarinho from './src/screens/PersonalidadePassarinho';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categorias" component={Categorias} />
        <Stack.Screen name="SobreMim" component={SobreMim} />
        <Stack.Screen name="Dog" component={Cachorro} />
        <Stack.Screen name="Cat" component={Gato} />
        <Stack.Screen name="Bird" component={Passarinho} />
        <Stack.Screen name="IdadeCachorro" component={IdadeCachorro} />
        <Stack.Screen name="RacaCachorro" component={RacaCachorro} />
        <Stack.Screen name="PersonalidadeCachorro" component={PersonalidadeCachorro} />
        <Stack.Screen name="IdadeGato" component={IdadeGato} />
        <Stack.Screen name="RacaGato" component={RacaGato} />
        <Stack.Screen name="PersonalidadeGato" component={PersonalidadeGato} />
        <Stack.Screen name="IdadePassarinho" component={IdadePassarinho} />
        <Stack.Screen name="RacaPassarinho" component={RacaPassarinho} />
        <Stack.Screen name="PersonalidadePassarinho" component={PersonalidadePassarinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}