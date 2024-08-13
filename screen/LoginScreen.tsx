import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';
import {
  authenticateBiometrics,
  login,
  saveCredentials,
} from '../service/AuthenticationService';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

const LoginScreen = ({onLoginSuccess}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      if (response.success) {
        await saveCredentials(email, password);
        onLoginSuccess();
        Alert.alert('Success', 'Logged in successfully');
      } else {
        Alert.alert('Error', 'Login failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Login failed');
    }
  };

  const handleBiometrics = async () => {
    try {
      const success = await authenticateBiometrics();
      if (success) {
        onLoginSuccess();
        Alert.alert('Success', 'Authenticated successfully');
      } else {
        Alert.alert('Error', 'Biometrics authentication failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Biometrics authentication failed');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Login with Biometrics" onPress={handleBiometrics} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default LoginScreen;
