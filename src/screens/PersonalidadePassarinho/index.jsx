import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; 

const freddyImage = require('../../../assets/images/freddy.jpg');

export default function PersonalidadePassarinho() {
  return (
    <View style={styles.container}>
      <Image source={freddyImage} style={styles.image} />
      <Text style={styles.title}>Freddy</Text>
      <Text style={styles.detailType}>Personalidade:</Text>
      <Text style={styles.detailValue}>Alegre, cantor e extremamente divertido gostando muito de "conversar" cantando para os outros. </Text>
    </View>
  );
}