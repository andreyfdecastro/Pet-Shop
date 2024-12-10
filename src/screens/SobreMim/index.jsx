import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const andreyImage = require('../../../assets/images/andreyfcastro.jpg'); 

export default function SobreMim() {
  return (
    <View style={styles.container}>
      <Image source={andreyImage} style={styles.image} />
      <Text style={styles.title}>Biografia</Text>
      <Text style={styles.description}>
        Olá, Sou o Andrey Francisco de Castro, tenho 18 anos e estou cursando
        desenvolvimento de sistemas no Senai de Valinhos-SP. Não pretendo seguir
        na área de DS, porém posso continuar com esse trabalho. Quero cursar Psicologia e me tornar psicólogo ou psipegagogo.
      </Text>
    </View>
  );
}