import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Cachorro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../../images/meg.jpg')} style={styles.image} />
      <Text style={styles.title}>Cachorro</Text>
      <Text style={styles.description}>
        Este é o nosso cachorro. Ele é muito amigável e adora brincar.
      </Text>
      <Text style={styles.info}>Idade: 2 anos</Text>
      <Text style={styles.info}>Raça: Labrador</Text>
      <Text style={styles.info}>Personalidade: Brincalhão e amigável</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Categorias')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}