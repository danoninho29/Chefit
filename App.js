import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView,Platform,TouchableOpacity, Modal , Button } from 'react-native';
import Noticias from './components/noticias';
import About from './components/about';
import Atv3 from './components/atividade3'
import Atv4 from './components/atividade4'
import Teste from './components/teste'

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" style="light" />
      <View style={styles.header}>
        <ImageBackground source={require('./assets/images/chefitBackgroundLaranja.jpeg')}style={styles.backgoundimage}>
          <Text style={styles.logo}>Chefit</Text>
         </ImageBackground>
      </View>

      <ScrollView vertical>
        <View style={styles.main}>
          <Noticias />
          <Text style={styles.text}>O que é Chefit?</Text>
          <About />
          <Atv3 />
          <Text style={styles.text}>Vamos fazer a sua análise corporal?</Text>
          <Button onPress={() => { setModal(true) }} title='Vamos' color={'#ff5733'}></Button>
          <Modal animationType="slide" visible={modal}>
            <Atv4 />
            <Button title='Voltar' onPress={() => setModal(false)} color="#000" />
          </Modal>
          
        </View>

        <View style={styles.footer}></View>
      </ScrollView>

      <TouchableOpacity style={styles.navMenu} onPress={()=>{setModalVisible(true)}}>
        <Modal animationType="slide" visible={modalVisible}>
          <Teste />
        </Modal>
        <Text style={{color:'#ff5733', fontSize:22, alignItems:'center',}}>Futura Nav Bar</Text>
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
    maxHeight:'20%',
    height: 70,
  },
  main: {

  },
  footer: {
    ...(Platform.OS === 'web'?{backgroundColor: '#ff5733',height: 50, bottom:0}:{}),
  },
  logo: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 22,
    fontWeight:'bold',
    color: 'white',
    margin: 10,
  },
  backgoundimage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navMenu:{
    height:'10%',
    backgroundColor:'black',
    flexDirection:'row',
    borderTopWidth:3,
    borderColor:'#ff5733',
  },
});
