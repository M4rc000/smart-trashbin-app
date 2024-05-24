import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import authStyles from '../styles/authStyles.js';
import apiUrl from './../api';

const welcomeScreen = require('../../assets/images/welcomeScreen.png');

export default function Login() {
  const [userSes, setUserSes] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUserSession = async () => {
      try {
        const userSession = await AsyncStorage.getItem('userSession');
        if (userSession !== null) {
          const parsedUser = JSON.parse(userSession);
          setUserSes(parsedUser);
        } else {
          // console.log('User session not found');
        }
      } catch (error) {
        // console.error('Error retrieving user session:', error);
      }
    };
    getUserSession();
  }, []);

  useEffect(() => {
    if (userSes) {
      router.push('/home');
    }
  }, [userSes]);

  const styles = authStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function signIn() {
    const userData = { username, password };
    try {
      const response = await fetch(apiUrl.urlUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        alert('Network response was not ok');
      }

      const resJson = await response.json();
      const user = resJson.find(user => user.username === username && user.password === password);

      if (user) {
        await AsyncStorage.setItem('userSession', JSON.stringify(user));
        router.push('/home');
      } else {
        alert('Username or password is incorrect');
      }
    } catch (error) {
      // console.error('Login failed:', error);
      return 'Login failed: ' + error.message;
    }
  }

  return (
    <ImageBackground style={styles.container} source={welcomeScreen}>
      <View style={styles.containerHeader}>
        <Text style={{ fontWeight: 700, fontSize: 25, color: '#1F41BB' }}>Login here</Text>
        <Text style={{ fontWeight: 300, fontSize: 15, color: '#000', marginTop: '5%' }}>Welcome back you've been missed!</Text>
      </View>
      <View style={styles.panelContainer}>
        <TextInput
          mode="outlined"
          label="Username"
          style={{ width: 300 }}
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          mode="outlined"
          label="Password"
          style={{ width: 300, marginTop: '5%' }}
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.containerBtn}>
        <Button
          title={'Login'}
          containerStyle={{
            width: 300,
            height: 200,
          }}
          buttonStyle={{
            borderRadius: 10,
            backgroundColor: '#1F41BB',
          }}
          onPress={signIn}
        />
      </View>
    </ImageBackground>
  );
}