import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';
import { login } from './api';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      setMessage('Login successful');
      // Optionally, navigate to another screen or store the token
    } catch (error) {
      setMessage(error.message || 'Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Login</Title>
          <Paragraph>{message}</Paragraph>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
            mode="outlined"
          />
          <Button mode="outlined" onPress={handleLogin} style={styles.button}>
            Login
          </Button>
        </Card.Content>
        <Card.Actions style={styles.switchContainer}>
          <Paragraph>Don't have an account?</Paragraph>
          <Button onPress={() => navigation.navigate('Register')}>Register</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  switchContainer: {
    justifyContent: 'center',
  },
});

export default Login;
