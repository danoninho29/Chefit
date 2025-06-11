import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../services/FireBaseConfig';

const Dashboard = ({ navigation }) => {

  const fazerLogout = async () => {
    try {
      await signOut(auth);
      Alert.alert('Sucesso', 'Você saiu da sua conta.');
      // Após logout, o listener no App.js vai redirecionar para Login automaticamente
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível sair: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao Dashboard!</Text>

      <TouchableOpacity style={styles.botao} onPress={fazerLogout}>
        <Text style={styles.textoBotao}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#FF5733',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
  