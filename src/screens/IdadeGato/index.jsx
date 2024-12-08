import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function IdadeGato({ route }) {
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