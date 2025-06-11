// src/navigation/drawerNavigation.js

import React from 'react';
import { Image , View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from './stackRoutes';
import Sobre from '../components/atividade3';
import teste from '../components/teste';
import Perfil from '../screens/login';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (

    <Drawer.Navigator  drawerPosition="left"
      screenOptions={{ 
        drawerType:'back',
        // overlayColor:'	rgba(255, 87, 51, 0.6)',
        headerShown: true , 
        headerTintColor: '#FFF',
        drawerActiveTintColor:'#FF573' , 
        drawerActiveBackgroundColor:'rgba(	255, 87, 51, 0.9)' ,
        drawerInactiveBackgroundColor:'rgba(0, 0, 0, 0.9)' ,
        headerBackground: () => (
          <Image
            source={require('../assets/images/wall2.webp')} // substitua pela sua imagem
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        ),

        headerStyle:{
          backgroundColor:'black',
        },
        drawerStyle: {
          backgroundColor: '#000',
          borderRightWidth:1.5,
          borderColor:'#ff5733',
          borderOpacity: 0.2,
        },
        drawerItemStyle: {
          borderColor: 'rgba(	255, 87, 51, 0.7)',
          borderWidth: 1,
          marginTop:10,
          opacity: 1,
          borderRadius:30,
        },
        drawerLabelStyle: {
          color: '#FFF', //cor do texto
          fontSize: 20,
          fontFamily: 'Arial',
          fontWeight:'bold',
        },
      }}>
      <Drawer.Screen name="Chefit" component={StackRoutes} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="teste" component={teste} />
    </Drawer.Navigator>
    
  );
}