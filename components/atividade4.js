import { StyleSheet,ScrollView, Text, View, TextInput, Switch, Button, Modal } from 'react-native';
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [modal,setModalVisible] = useState(false)
  const [genero, setGenero] = useState('');
  const [cor, setCor] = useState('');
  const [altura, setAltura] = useState(1.0);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [peso, setPeso] = useState(50);
  const [fuma, setFuma] = useState(false);
  const [trabalha, setTrabalha] = useState(false);

  return (
    <ScrollView  style={styles.container}>
      <Text style={styles.title}>Vamos fazer a sua análise corporal?</Text>
      <Text>Nome</Text>
      <TextInput value={nome} onChangeText={setNome} placeholder='Ex: Joãozinho' style={styles.input} />

      <Text>Sobrenome</Text>
      <TextInput value={sobrenome} onChangeText={setSobrenome} placeholder='Ex: da Silva' style={styles.input} />

      <Text>Telefone</Text>
      <TextInput value={telefone} onChangeText={setTelefone} keyboardType='phone-pad' placeholder='61 99999-9999' style={styles.input} />

      <Text>Qual o seu objetivo?</Text>
      <TextInput value={objetivo} onChangeText={setObjetivo} placeholder='Ex: Perder peso' style={styles.input} />

      <View style={styles.switchRow}>
        <Text>Você fuma?</Text>
        <Switch value={fuma} onValueChange={setFuma} thumbColor={'black'} trackColor={{ false: '#ccc', true: '#ff5733' }} />
        <Text>Trabalha?</Text>
        <Switch value={trabalha} onValueChange={setTrabalha} thumbColor={'black'} trackColor={{ false: '#ccc', true: '#ff5733' }} />
      </View>


      <Text>A sua altura é: {altura.toFixed(2)} m</Text>
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

      <Text>Qual o seu peso? {peso} kg</Text>
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

      <Text>Qual o seu gênero?</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={genero} onValueChange={setGenero} style={styles.picker}>
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Feminino" value="feminino" />
          <Picker.Item label="Outro" value="outro" />
        </Picker>
      </View>

      <Text>Qual a sua cor?</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={cor} onValueChange={setCor} style={styles.picker}>
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Branca" value="Branca" />
          <Picker.Item label="Parda" value="Parda" />
          <Picker.Item label="Amarela" value="Amarela" />
          <Picker.Item label="Negra" value="Negra" />
          <Picker.Item label="Outro" value="outro" />
        </Picker>
      </View>

        <Button title='Enviar e ver resultado' onPress={() => setModalVisible(true)} color="#ff5733" />
        <Modal animationType="slide" visible={modal} >
          <ScrollView style={styles.modalResultado}>
            <Text style={styles.title}>Olá {nome}, vamos conferir o seu resultado?</Text>
            <View style={styles.pickerContainer}>
              <Text style={styles.title}>Medidas</Text>
              <Text style={styles.modalText}>Você possui {altura}m de altura, e está pesando {peso}kg.</Text>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.title}>Caracteristicas</Text>
              <Text style={styles.modalText}>Seu gênero é {genero} e a sua cor é {cor}.</Text>
              <Text style={styles.modalText}>O seu objetivo é:</Text>
              <Text style={styles.modalText}>{objetivo}</Text>
            </View>
            <Text style={styles.modalText}>{nome}, estaremos entrando em contato com você pelo seu telefone {telefone}, informando mais sobre como alcançar os seus objetivos!</Text>
            <Button title='Voltar' onPress={() => setModalVisible(false)} color="#ff5733" />
          </ScrollView>
        </Modal>
        <Text></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'white',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  picker: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: '#ff5733',
    borderRadius: 15,
    color: 'white',
  },
  pickerContainer: {
    marginVertical: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ff5733',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  modalResultado:{
    padding:10,
  },
  modalText:{
    fontSize:20
  },
});
