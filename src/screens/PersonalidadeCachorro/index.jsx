import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; // Certifique-se de que o caminho está correto

export default function PersonalidadeCachorro({ route }) {
  const { image, name, detailType, detailValue } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.detailType}>{detailType}</Text>
      <Text style={styles.detailValue}>{detailValue}</Text>
    </View>
  );
}