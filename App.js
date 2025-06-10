// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './src/navigation/drawerNavigation';
import { View } from 'react-native';

export default function App() {
  return (
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
  );
}
