import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; 

const tomImage = require('../../../assets/images/tom.jpg');

export default function PersonalidadeGato() {
  return (
    <View style={styles.container}>
      <Image source={tomImage} style={styles.image} />
      <Text style={styles.title}>Tom</Text>
      <Text style={styles.detailType}>Personalidade:</Text>
      <Text style={styles.detailValue}>Tom possui uma personalidade calma e carinhoso porem em alguns momentos ele fica revoltado e tenta morder ou unhar as pessoas.</Text>
    </View>
  );
}