import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Cachorro() {
  const navigation = useNavigation();

  const handlePress = (screen, detailType, detailValue) => {
    navigation.navigate(screen, {
      image: require('../../images/meg.jpg'),
      name: 'Meg',
      detailType,
      detailValue,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../images/meg.jpg')} style={styles.image} />
      <Text style={styles.title}>Meg</Text>
      <Text style={styles.description}>
        Este é o nosso cachorro. Ele é muito amigável e adora brincar.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('IdadeCachorro', 'Idade', '2 anos')}
      >
        <Text style={styles.buttonText}>Idade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('RacaCachorro', 'Raça', 'Labrador')}
      >
        <Text style={styles.buttonText}>Raça</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('PersonalidadeCachorro', 'Personalidade', 'Brincalhão e amigável')}
      >
        <Text style={styles.buttonText}>Personalidade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Categorias')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}