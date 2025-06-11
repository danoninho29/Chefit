import { Image, StyleSheet,ScrollView, Text, View, TextInput, Switch, Button, Modal, TouchableOpacity } from 'react-native';
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {globalStyle} from "./global"

export default function App({navigation}) {
  const [modal,setModal] = useState(false)
  const [modal2, setModal2] = useState(false);
  const [genero, setGenero] = useState('');
  const [raca, setRaca] = useState('');
  const [altura, setAltura] = useState(1.0);
  const [nome, setNome] = useState(''); 
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [peso, setPeso] = useState(50);
  const [idade, setIdade] = useState(0);
  const [fuma, setFuma] = useState(false);
  const [trabalha, setTrabalha] = useState(false);

  // calcular imc
  const imc = (peso / (altura * altura)).toFixed(2);
  var resultadoIMC = "";
  if (imc < 18.5) {
    var resultadoIMC = 'Abaixo do peso';
  } else if (imc < 24.9) {
    var resultadoIMC = 'Peso normal';
  } else if (imc < 29.9) {
    var resultadoIMC = 'Sobrepeso';
  } else if (imc < 34.9) {
    var resultadoIMC = 'Obesidade grau I';
  } else if (imc < 39.9) {
    var resultadoIMC = 'Obesidade grau II';
  } else {
    var resultadoIMC = 'Obesidade grau III (mórbida)';
  }
   

  return (
    <View style={{backgroundColor:'black', flex:1, padding:10, alignItems:'center', justifyContent:'center', }}>
      <Text style={globalStyle.whiteTitle}>Vamos fazer a sua analise corporal?</Text>
      <Image source={require('../assets/images/felicidadeCorporal.jpg')} style={{width:'100%', height:'40%', borderRadius:15,}} />
    <TouchableOpacity style={globalStyle.orangeButton} onPress={()=>{setModal(
      true)}}>
     <Text style={globalStyle.blackTitle} >Vamos</Text>
    </TouchableOpacity>
  
    <Modal animationType="slide" visible={modal}>
    <ScrollView  style={styles.container}>
      <Text style={globalStyle.blackTitle}>Analise Corporal</Text>
      <Text style={globalStyle.text}>Nome</Text>
      <TextInput value={nome} onChangeText={setNome} placeholder='Ex: Joãozinho' style={styles.input} />

      <Text style={globalStyle.text}>Sobrenome</Text>
      <TextInput value={sobrenome} onChangeText={setSobrenome} placeholder='Ex: da Silva' style={styles.input} />

      <Text style={globalStyle.text}>Telefone</Text>
      <TextInput value={telefone} onChangeText={setTelefone} keyboardType='phone-pad' maxLength={11} placeholder='61 99999-9999' style={styles.input} />

      <Text style={globalStyle.text}>Qual o seu objetivo?</Text>
      <TextInput value={objetivo} onChangeText={setObjetivo} placeholder='Ex: Perder peso' style={styles.input} />

      <Text style={globalStyle.text}>Qual a sua idade?</Text>
      <TextInput value={idade} onChangeText={setIdade} keyboardType="number-pad" maxLength={2} style={styles.input} />

      <View style={styles.switchRow}>
        <Text style={globalStyle.text}>Você fuma?</Text>
        <Switch value={fuma} onValueChange={setFuma} thumbColor={'black'} trackColor={{ false: '#ccc', true: '#ff5733' }} />
        <Text style={globalStyle.text}>Trabalha?</Text>
        <Switch value={trabalha} onValueChange={setTrabalha} thumbColor={'black'} trackColor={{ false: '#ccc', true: '#ff5733' }} />
      </View>


      <Text style={globalStyle.text} >A sua altura é: {altura.toFixed(2)} m</Text>
      <Slider
        minimumValue={1.0}
        maximumValue={2.0}
        value={altura}
        onValueChange={(value) => setAltura(parseFloat(value))}
        step={0.01}
        thumbTintColor='black'
        maximumTrackTintColor='grey'
        minimumTrackTintColor='black'
      />

      <Text style={globalStyle.text} >Qual o seu peso? {peso} kg</Text>
      <Slider
        minimumValue={50}
        maximumValue={250}
        value={peso}
        onValueChange={(value) => setPeso(parseFloat(value))}
        step={1}
        thumbTintColor='black'
        maximumTrackTintColor='grey'
        minimumTrackTintColor='black'
      />

      <Text style={globalStyle.text}>Qual o seu gênero?</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={genero} onValueChange={setGenero} style={styles.picker}>
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Feminino" value="feminino" />
          <Picker.Item label="Outro" value="outro" />
        </Picker>
      </View>

      <Text style={globalStyle.text}>Qual a sua raça?</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={raca} onValueChange={setRaca} style={styles.picker}>
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Branca" value="Branca" />
          <Picker.Item label="Parda" value="Parda" />
          <Picker.Item label="Amarela" value="Amarela" />
          <Picker.Item label="Negra" value="Negra" />
          <Picker.Item label="Outro" value="outro" />
        </Picker>
      </View>
        

        <Modal animationType="slide" visible={modal2} >
          <ScrollView style={styles.modalResultado}>
            <Text style={styles.title}>Olá {nome}, vamos conferir os seus dados?</Text>
            <View style={styles.cardResultado}>
              <Text style={styles.title}>Medidas</Text>
              <Text style={styles.modalText}>Você possui {altura.toFixed(2)}m de altura, e está pesando {peso}kg.</Text>
            </View>
            <View style={styles.cardResultado}>
              <Text style={styles.title}>Caracteristicas</Text>
              <Text style={styles.modalText}>Seu gênero é {genero} e a sua etinia é {raca}.</Text>
              <Text style={styles.modalText}>O seu objetivo é:</Text>
              <Text style={styles.modalText}>{objetivo}</Text>
            </View>
            <View style={styles.cardResultado}>
              <Text style={styles.title}>IMC</Text>
              <Text style={styles.modalText}>{nome}, o resultado do seu IMC é {imc}, sendo ela como {"\n"} {resultadoIMC}.</Text>
            </View>
            <View style={styles.cardResultado}>
              <Text style={styles.title}>Contato</Text>
              <Text style={styles.modalText}>{nome}, estaremos entrando em contato com você pelo seu telefone {telefone}, informando mais sobre como alcançar os seus objetivos!</Text>
            </View>
          </ScrollView>
          <TouchableOpacity
  style={globalStyle.orangeButton}
  onPress={() => {
    setModal2(false);
    setModal(false);
    navigation.navigate('Chefit');
  }}
>
  <Text style={globalStyle.blackTitle}>Confirmar</Text>
</TouchableOpacity>
        </Modal>
        <Text></Text>
    <TouchableOpacity onPress={() => setModal2(true)} style={globalStyle.orangeButton}>
          <Text style={globalStyle.blackTitle}>Calcular</Text>
        </TouchableOpacity>
      <TouchableOpacity style={globalStyle.orangeButton} onPress={()=>{setModal2(false), setModal(false)}}>
        <Text style={globalStyle.blackTitle} >Voltar</Text>
      </TouchableOpacity>
      <Text style={globalStyle.blackTitle} ></Text>
    </ScrollView>
    </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff5733',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    gap: 10,
  },
  pickerContainer: {
    marginBottom: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f1f1f1',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#333',
  },
  modalResultado: {
    padding: 20,
    backgroundColor: '#fff',
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    lineHeight: 24,
  },
  cardResultado: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff5733',
    backgroundColor: '#fdfdfd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
