import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Passarinho() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../../images/freddy.jpg')} style={styles.image} />
      <Text style={styles.title}>Passarinho</Text>
      <Text style={styles.description}>
        Este é o nosso passarinho. Ele é muito colorido e adora cantar.
      </Text>
      <Text style={styles.info}>Idade: 1 ano</Text>
      <Text style={styles.info}>Raça: Canário</Text>
      <Text style={styles.info}>Personalidade: Alegre e cantor</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Categorias')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}