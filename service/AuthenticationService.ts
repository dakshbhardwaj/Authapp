import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import TouchID from 'react-native-touch-id';

// Configuration object for TouchID authentication
const optionalConfigObject = {
  title: 'Authentication Required',
  color: '#e00606',
  fallbackLabel: 'Show Passcode',
};

export const login = async (email: string, password: string) => {
  try {
    // Simulated login response for demonstration purposes
    const simulatedResponse = {
      success: true,
      token: 'mockToken12345',
    };

    const data = simulatedResponse;

    // If login is successful, store the token
    if (data.success) {
      await AsyncStorage.setItem('userToken', data.token);
      return data;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

export const saveCredentials = async (email: string, password: string) => {
  try {
    await Keychain.setGenericPassword(email, password);
  } catch (error) {
    console.error('Could not save credentials', error);
  }
};

export const getCredentials = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    return credentials;
  } catch (error) {
    console.error('Could not load credentials', error);
  }
};

export const authenticateBiometrics = async () => {
  try {
    const success = await TouchID.authenticate(
      'Authenticate to access the app',
      optionalConfigObject,
    );
    return success;
  } catch (error) {
    console.error('Biometrics authentication failed', error);
    throw error;
  }
};
