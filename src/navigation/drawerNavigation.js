import React, { useEffect, useState } from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/FireBaseConfig';

import StackRoutes from './stackRoutes';
import Sobre from '../components/atividade3';
import piadas from '../screens/piadasAPI';
import Perfil from '../screens/profile'; 
import ACorporal from '../components/atividade4'; 

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
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
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <ActivityIndicator size="large" color="#FF5733" />
      </View>
    );
  }

  return (
    <Drawer.Navigator
      drawerPosition="left"
      screenOptions={{
        drawerType: 'back',
        headerShown: true,
        headerTintColor: '#FFF',
        drawerActiveTintColor: '#FF5733',
        drawerActiveBackgroundColor: 'rgba(255, 87, 51, 0.9)',
        drawerInactiveBackgroundColor: 'rgba(0, 0, 0, 0.9)',
        headerBackground: () => (
          <Image
            source={require('../assets/images/wall2.webp')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        ),
        headerStyle: {
          backgroundColor: 'black',
        },
        drawerStyle: {
          backgroundColor: '#000',
          borderRightWidth: 1.5,
          borderColor: '#ff5733',
        },
        drawerItemStyle: {
          borderColor: 'rgba(255, 87, 51, 0.7)',
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 15,
        },
        drawerLabelStyle: {
          color: '#FFF',
          fontSize: 20,
          fontFamily: 'Arial',
          fontWeight: 'bold',
        },
      }}
    >
      {/* Sempre acessível: Login/Cadastro via Stack */}
      <Drawer.Screen name="Chefit" component={StackRoutes} />

      {/* Telas extras só para usuários logados */}
      {usuario && (
        <>
          <Drawer.Screen name="Sobre" component={Sobre} />
          <Drawer.Screen name="Perfil" component={Perfil} />
          <Drawer.Screen name="Análise Corporal" component={ACorporal} />
          <Drawer.Screen name="Piadas API" component={piadas} />
        </>
      )}
    </Drawer.Navigator>
  );
}
