import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../services/FireBaseConfig';

export default function Profile() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUsuario(currentUser);
  }, []);

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            await signOut(auth);
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/ex-noticias.png')} 
        style={styles.avatar}
      />

      <Text style={styles.nome}>
        {usuario?.displayName || 'Usuário'}
      </Text>
      <Text style={styles.email}>
        {usuario?.email}
      </Text>

      <TouchableOpacity style={styles.botaoSair} onPress={handleLogout}>
        <Text style={styles.textoBotao}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FF5733',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#CCC',
    marginBottom: 40,
  },
  botaoSair: {
    backgroundColor: '#FF5733',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
