import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';

const Register = ({ navigation }) => {
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      console.error('Passwords do not match');
    } else {
      console.log('Registering with', email, password);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Register</Title>
          <Paragraph style={styles.errorText}>{error}</Paragraph>
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
          <TextInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            secureTextEntry
            mode="outlined"
          />
          <Button mode="contained" onPress={handleRegister} style={styles.button}>
            Register
          </Button>
        </Card.Content>
        <Card.Actions style={styles.switchContainer}>
          <Paragraph>Already have an account?</Paragraph>
          <Button onPress={() => navigation.navigate('Login')}>Login</Button>
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
  errorText: {
    color: '#ffa300',
    marginBottom: 10,
  },
});

export default Register;
