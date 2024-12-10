import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; 

const freddyImage = require('../../../assets/images/freddy.jpg');

export default function RacaPassarinho() {
  return (
    <View style={styles.container}>
      <Image source={freddyImage} style={styles.image} />
      <Text style={styles.title}>Freddy</Text>
      <Text style={styles.detailType}>Raça:</Text>
      <Text style={styles.detailValue}>Calopsita de cor branca, cinza e preto.</Text>
    </View>
  );
}