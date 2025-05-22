import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { BlurView } from 'expo-blur';
import { StyleSheet, Text, View, ImageBackground, ScrollView,Platform,TouchableOpacity, Modal , Button } from 'react-native';
import Noticias from './components/noticias';
import About from './components/about';
import Atv3 from './components/atividade3'
import Atv4 from './components/atividade4'
import Teste from './components/teste'
import {globalStyle} from "./components/global"

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" style="light" />
      <View style={styles.header}>
      <ImageBackground source={require('./assets/images/wall2.webp')}style={styles.backgoundimage}>
        <Text style={styles.logo}>Chefit</Text>
      </ImageBackground>
      </View>
      <ScrollView vertical>
        <View style={styles.main}>
          <Noticias />
          <Text style={styles.text}>O que é Chefit?</Text>
          <About />
          <Atv3 />
          <Text style={globalStyle.whiteTitle}>Vamos fazer a sua análise corporal?</Text>

          
          <Atv4 />
        </View>

        <View style={styles.footer}></View>
      </ScrollView>
      <TouchableOpacity style={styles.navMenu} onPress={()=>{setModalVisible(true)}}>
        <Modal animationType="slide" visible={modalVisible}>
          <Teste />
          <TouchableOpacity style={globalStyle.orangeButton} onPress={()=>{setModalVisible(false)}}>
            <Text>Voltar</Text>
          </TouchableOpacity>
        </Modal>
        <Text style={{color:'#ff5733', fontSize:22, alignItems:'center',}}>Menu de navegação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1D',
    ...(Platform.OS === 'web' ? {flexDirection:'column',justifyContent:'center', alignItems:'center'} : {backgroundColor: 'black',marginTop:15}),
  },
  header: {
    top: 0,
    width:'100%',
    maxHeight:'10%',
  },
  main: {
    marginBottom:70,
  },
  footer: {
    ...(Platform.OS === 'web'?{backgroundColor: '#ff5733',height: 50, bottom:0}:{}),
  },
  logo: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  backgoundimage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  navMenu:{
    height:'10%',
    flexDirection:'row',
    borderTopWidth:3,
    backgroundColor: 'rgba(73, 70, 70, 0.15)',
    border: 2, 
    borderColor:'rgba(255, 255, 255, 0.2)',
  },
});


