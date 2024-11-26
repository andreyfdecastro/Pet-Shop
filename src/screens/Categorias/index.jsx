import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Categorias() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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