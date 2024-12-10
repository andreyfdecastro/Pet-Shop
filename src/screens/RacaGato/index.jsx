import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const tomImage = require('../../../assets/images/tom.jpg');

export default function RacaGato() {
  return (
    <View style={styles.container}>
      <Image source={tomImage} style={styles.image} />
      <Text style={styles.title}>Raça:</Text>
      <Text style={styles.description}>Tom é um gato da raça Laranja.</Text>
    </View>
  );
}