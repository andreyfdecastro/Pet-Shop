import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Gato() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../../images/Tom.jpg')} style={styles.image} />
      <Text style={styles.title}>Gato</Text>
      <Text style={styles.description}>
        Este é o nosso gato. Ele é muito carinhoso e adora dormir.
      </Text>
      <Text style={styles.info}>Idade: 3 anos</Text>
      <Text style={styles.info}>Raça: Siamês</Text>
      <Text style={styles.info}>Personalidade: Calmo e carinhoso</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Categorias')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}