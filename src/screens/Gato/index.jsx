import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const tomImage = require('../../../assets/images/tom.jpg'); 

export default function Gato() {
  const navigation = useNavigation();
  const animalName = 'Tom';

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
      <Image source={tomImage} style={styles.image} /> 
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('IdadeGato', 'Idade', '3 anos')}
      >
        <Text style={styles.buttonText}>Idade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('RacaGato', 'Raça', 'Siamês')}
      >
        <Text style={styles.buttonText}>Raça</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('PersonalidadeGato', 'Personalidade', 'Calmo e carinhoso')}
      >
        <Text style={styles.buttonText}>Personalidade</Text>
      </TouchableOpacity>
    </View>
  );
}
