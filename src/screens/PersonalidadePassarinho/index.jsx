import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; // Verifique se o caminho está correto

export default function PersonalidadePassarinho({ route }) {
  const { image, name, personality } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.detailType}>Personalidade</Text>
      <Text style={styles.detailValue}>{personality}</Text>
    </View>
  );
}