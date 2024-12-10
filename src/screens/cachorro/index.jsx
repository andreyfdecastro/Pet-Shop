import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const megImage = require('../../../assets/images/meg.jpg');

export default function Cachorro() {
  const navigation = useNavigation();
  const animalName = 'Meg';

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
      <Image source={megImage} style={styles.image} />
      <Text style={styles.description}>
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('IdadeCachorro', 'Idade', '2 anos')}
      >
        <Text style={styles.buttonText}>Idade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('RacaCachorro', 'Raça', 'Labrador')}
      >
        <Text style={styles.buttonText}>Raça</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('PersonalidadeCachorro', 'Personalidade', 'Amigável e brincalhão')}
      >
        <Text style={styles.buttonText}>Personalidade</Text>
      </TouchableOpacity>
    </View>
  );
}