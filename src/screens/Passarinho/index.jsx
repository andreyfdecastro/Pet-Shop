import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const freddyImage = require('../../../assets/images/freddy.jpg');

export default function Passarinho() {
  const navigation = useNavigation();
  const animalName = 'Freddy';

  const handlePress = (screen, detailType, detailValue) => {
    navigation.navigate(screen, {
      name: animalName,
      detailType,
      detailValue,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{animalName}</Text>
      <Image source={freddyImage} style={styles.image} />
      <Text style={styles.description}>
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('IdadePassarinho', 'Idade', '1 ano')}
      >
        <Text style={styles.buttonText}>Idade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('RacaPassarinho', 'Raça', 'Canário')}
      >
        <Text style={styles.buttonText}>Raça</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('PersonalidadePassarinho', 'Personalidade', 'Alegre e cantor')}
      >
        <Text style={styles.buttonText}>Personalidade</Text>
      </TouchableOpacity>
    </View>
  );
}