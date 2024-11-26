import { View, Text, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/Andrey castro.jpg")}
        style={{ width: 200, height: 200 }}
        className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
      />
      <Text style={styles.title}>Andey Francisco de Castro</Text>

      <Text style={styles.title}>
        Biografia:Olá,Sou o Andrey Francisco de castro,tenho 18 anos estou cursando
        desenvolvimento de sistemas no Senai de valinhos-sp,não pretendo seguir
        na área de DS porem posso continuar com esse trabalho,quero cursas Psicologia me tornando piscologo ou psiquiatra.
      </Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.navbottom}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Categorias")}
      >
        <Text style={styles.navbottom}>Categoria</Text>
      </TouchableOpacity>
    </View>
  );
}
