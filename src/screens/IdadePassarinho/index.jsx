import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; 

const freddyImage = require('../../../assets/images/freddy.jpg');

export default function IdadePassarinho() {
  return (
    <View style={styles.container}>
      <Image source={freddyImage} style={styles.image} />
      <Text style={styles.title}>Freddy</Text>
      <Text style={styles.detailType}>Idade:</Text>
      <Text style={styles.detailValue}>Mais de 8 anos de idade.</Text>
    </View>
  );
}