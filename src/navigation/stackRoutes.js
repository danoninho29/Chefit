// src/navigation/stackRoutes.js

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text,  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import Login from '../screens/login';
import Registrar from '../screens/registrar';
import Profile from '../screens/profile';
import { globalStyle } from "../components/global"

const Stack = createStackNavigator();

function DrawerToggle() {
    const navigation = useNavigation();
  
    return (
      <TouchableOpacity onPress={() => navigation.openDrawer()} >
        <Text style={{ fontSize: 30, marginRight: 15 }}>☰</Text>
      </TouchableOpacity>
    );
  }

export default function StackRoutes() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
       <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'StackChefit',
          headerRight: () => <DrawerToggle />,
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registrar" component={Registrar} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
