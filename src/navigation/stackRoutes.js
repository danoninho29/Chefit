import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/FireBaseConfig';

import HomeScreen from '../screens/home';
import Login from '../screens/login';
import Registrar from '../screens/cadastro';
import Profile from '../screens/profile';
import Dashboard from '../screens/dashboard';

const Stack = createStackNavigator();

function DrawerToggle() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Text style={{ fontSize: 30, marginRight: 15 }}>☰</Text>
    </TouchableOpacity>
  );
}

export default function StackRoutes() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    // Tela de loading simples enquanto verifica usuário
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <ActivityIndicator size="large" color="#FF5733" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {usuario ? (
        // Usuário logado: 
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'StackChefit',
              headerRight: () => <DrawerToggle />,
            }}
          />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Profile" component={Profile} />
        </>
      ) : (
        // Usuário não logado: 
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registrar" component={Registrar} />
        </>
      )}
    </Stack.Navigator>
  );
}
