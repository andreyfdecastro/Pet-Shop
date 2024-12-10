import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const logoImage = require('../../../assets/images/logopet.png'); // Atualize o caminho e o nome da imagem conforme necessário

export default function Categorias() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dog')}
      >
        <Text style={styles.buttonText}>Cachorros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cat')}
      >
        <Text style={styles.buttonText}>Gatos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Bird')}
      >
        <Text style={styles.buttonText}>Pássaros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SobreMim')}
      >
        <Text style={styles.buttonText}>Sobre Mim</Text>
      </TouchableOpacity>
    </View>
  );
}