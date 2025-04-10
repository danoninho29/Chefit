import { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";


export default function(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Na Chefit, unimos sabor, saúde e criatividade para transformar sua alimentação em uma experiência única. Desenvolvemos receitas exclusivas, deliciosas e nutritivas, utilizando ingredientes frescos e de alta qualidade. Nosso compromisso é levar até você refeições equilibradas, práticas e cheias de sabor.</Text>
      <Image source={require('../assets/images/sopa.jpg')} style={styles.imagem}/>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        ...(Platform.OS === 'web'?{flexDirection:'row',justifyContent:'center'}:{flexDirection:'row'})
    },
    imagem:{
        width:'40%',
        minHeight:250,
        height:'auto',
        borderRadius:15,
        marginHorizontal:10,
    },
    text:{
        fontSize: 18,
        textAlign:'left',
        marginLeft:10,
        color: 'white',
        width:'55%',
        maxWidth:400
    },
})