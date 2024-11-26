import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/BirdStyles';

export default function Bird() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../../images/bird.jpg')} style={styles.image} />
      <Text style={styles.title}>Pássaro</Text>
      <Text style={styles.description}>
        Este é o nosso pássaro. Ele é muito colorido e adora cantar.
      </Text>
      <Text style={styles.info}>Informação adicional 1</Text>
      <Text style={styles.info}>Informação adicional 2</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Categorias')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}