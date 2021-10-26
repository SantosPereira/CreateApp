import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function TelaCadastro({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput style={styles.input}/>

      <Text style={styles.texto}>CPF</Text>
      <TextInput style={styles.input}/>

      <Text style={styles.texto}>E-mail</Text>
      <TextInput style={styles.input}/>

      <Button 
        title="Cadastre-se" 
        style={styles.login}
        onPress={() => {navigation.navigate('Tela Inicial')}}
        />
    </View>
  );
}

function TelaInicial({ navigation }) {
  return(
    <View style={styles.container}>
    <Image
        style={styles.user}
        source={require('./assets/user.png')}
    />

    <Text style={styles.texto}>Usuário</Text>
    <TextInput style={styles.input}/>

    <Text style={styles.texto}>Senha</Text>
    <TextInput style={styles.input}/>

    <Button 
      title="Login" 
      style={styles.login}
      />
    <Button 
      title="Não tenho uma conta" 
      style={styles.login}
      onPress={() => {navigation.navigate('Tela de Cadastro')}}
      />

    <StatusBar style="auto" />
  </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Tela Inicial" component={TelaInicial}/>
        <Stack.Screen name="Tela de Cadastro" component={TelaCadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 22,
  },

  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },

  user: {
    width: 90,
    height: 90,
    marginBottom: 30
  },

  login: {
    fontSize: 20,
    marginTop: 30
  },
});
