import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text } from 'react-native';
import AppStack from './src/routes/AppStack';

/*

green: #37c45d
blue: #2970a6
red: #e62c1c
black-light: #252529

*/

export default function App() {
  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}