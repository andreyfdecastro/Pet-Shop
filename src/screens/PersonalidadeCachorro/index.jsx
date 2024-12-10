import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; 

const megImage = require('../../../assets/images/meg.jpg');

export default function PersonalidadeCachorro() {
  return (
    <View style={styles.container}>
      <Image source={megImage} style={styles.image} />
      <Text style={styles.title}>Meg</Text>
      <Text style={styles.detailType}>Personalidade:</Text>
      <Text style={styles.detailValue}>Amigável, brincalhona, divertida e ciumenta.</Text>
    </View>
  );
}