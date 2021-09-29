import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { View, Title, Heading, Center, NativeBaseProvider } from "native-base"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Title>Olá mundo 👋</Title> */}
      <Text style={{fontSize: 42}}>Olá mundo 👋</Text>
      <StatusBar style="auto" />
      <Text>Esse é meu primeiro app em react native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a9e89',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
