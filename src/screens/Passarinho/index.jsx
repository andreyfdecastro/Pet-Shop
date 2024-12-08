// src/screens/Passarinho/index.jsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Passarinho() {
  const navigation = useNavigation();

  const handlePress = (screen, detailType, detailValue) => {
    navigation.navigate(screen, {
      image: require('../../images/freddy.jpg'), // Imagem do passarinho
      name: 'Freddy',
      detailType,
      detailValue,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../images/freddy.jpg')} style={styles.image} />
      <Text style={styles.title}>Freddy</Text>
      <Text style={styles.description}>
        Este é o nosso passarinho. Ele é muito colorido e adora cantar.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('IdadePassarinho', 'Idade', '1 ano')}
      >
        <Text style={styles.buttonText}>Idade: 1 ano</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('RacaPassarinho', 'Raça', 'Canário')}
      >
        <Text style={styles.buttonText}>Raça: Canário</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('PersonalidadePassarinho', 'Personalidade', 'Alegre e cantor')}
      >
        <Text style={styles.buttonText}>Personalidade: Alegre e cantor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Categorias')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}