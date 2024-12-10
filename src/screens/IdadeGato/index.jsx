import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const tomImage = require('../../../assets/images/tom.jpg');

export default function IdadeGato() {
  return (
    <View style={styles.container}>
      <Image source={tomImage} style={styles.image} />
      <Text style={styles.title}>Idade:</Text>
      <Text style={styles.description}>Não sabemos a idade correta porem acreditamo que seja mais de 2 anos de idade.</Text>
    </View>
  );
}