import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {
  authenticateBiometrics,
  login,
  saveCredentials,
} from '../service/AuthenticationService';

const LoginScreen = ({onLoginSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      await saveCredentials(email, password);
      onLoginSuccess();
      Alert.alert('Success', 'Logged in successfully');
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
      }
    } catch (error) {
      Alert.alert('Error', 'Biometrics authentication failed');
    }
  };

  return (
    <View style={{padding: 20}}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{marginBottom: 20}}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{marginBottom: 20}}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Login with Biometrics" onPress={handleBiometrics} />
    </View>
  );
};

export default LoginScreen;
