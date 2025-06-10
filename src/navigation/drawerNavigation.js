// src/navigation/drawerNavigation.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from './stackRoutes';
import Sobre from '../components/atividade3';
import Perfil from '../screens/profile';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator drawerPosition="left" screenOptions={{ headerShown: false }} >
      <Drawer.Screen name="Início" component={StackRoutes} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}
