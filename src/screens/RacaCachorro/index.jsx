import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; 

const megImage = require('../../../assets/images/meg.jpg');

export default function RacaCachorro() {
  return (
    <View style={styles.container}>
      <Image source={megImage} style={styles.image} />
      <Text style={styles.title}>Meg</Text>
      <Text style={styles.detailType}>Raça:</Text>
      <Text style={styles.detailValue}>Pastor alemão.</Text>
    </View>
  );
}