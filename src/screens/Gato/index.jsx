import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Gato() {
  const navigation = useNavigation();

  const handlePress = (screen, detailType, detailValue) => {
    navigation.navigate(screen, {
      image: require('../../images/tom.jpg'), // Imagem do gato
      name: 'Tom',
      detailType,
      detailValue,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../images/tom.jpg')} style={styles.image} />
      <Text style={styles.title}>Tom</Text>
      <Text style={styles.description}>
        Este é o nosso gato. Ele é muito calmo e carinhoso.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('IdadeGato', 'Idade', '3 anos')}
      >
        <Text style={styles.buttonText}>Idade: 3 anos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('RacaGato', 'Raça', 'Siamês')}
      >
        <Text style={styles.buttonText}>Raça: Siamês</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('PersonalidadeGato', 'Personalidade', 'Calmo e carinhoso')}
      >
        <Text style={styles.buttonText}>Personalidade: Calmo e carinhoso</Text>
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