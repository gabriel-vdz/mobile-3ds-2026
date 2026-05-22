import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Platform } from 'react-native';

export default function Aula03() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      // Correção para funcionar no navegador/PC também
      if (Platform.OS === 'web') {
        alert('Erro: Por favor, preencha todos os campos.');
      } else {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      }
      return;
    }

    const dadosParaO_DB = { email, senha };
    console.log('Enviando para o DB:', dadosParaO_DB);

    // ==========================================
    // INÍCIO DO BLOCO DE TESTE (APAGUE QUANDO FOR USAR O DB)
    // ==========================================
    const mensagemTeste = `E-mail digitado: ${email}\nSenha digitada: ${senha}`;
    
    if (Platform.OS === 'web') {
      alert(`Sucesso (Modo Teste)\n\n${mensagemTeste}`);
    } else {
      Alert.alert('Sucesso (Modo Teste)', mensagemTeste);
    }
    // ==========================================
    // FIM DO BLOCO DE TESTE
    // ==========================================
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={require('./img/lula.jpg')} 
          style={styles.logo}
        />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#999"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#f5f5f7',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
