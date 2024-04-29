import React, {useState} from 'react';
import {Link, router} from 'expo-router';
import { View, Text, ImageBackground } from 'react-native';
import authStyles from '../styles/authStyles.js';
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper'; 
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const welcomeScreen = require('../../assets/images/welcomeScreen.png');
const styles = authStyles();

export default function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function generateSessionToken() {
    return uuidv4();
  } 
  const login = () => {
    const userData = { username, password };
    
    fetch("http://192.168.1.100/smart-trashbin/user/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(resJson => {
      // Check if there is a user with the provided username and password
      const user = resJson.find(user => user.username === username && user.password === password);
      if (user) {
        // Redirect to home page
        router.navigate('/home');
        // Generate a session token (you may use a library for this purpose)
        const sessionToken = generateSessionToken(); // Replace generateSessionToken() with your actual function to generate a session token
        // Store the session token in local storage
        AsyncStorage.setItem('sessionToken', sessionToken);
        AsyncStorage.setItem('userId', user.user_id);
        AsyncStorage.setItem('username', user.username); // Store username
      } else {
          alert('Username or password is incorrect');
      }
    })
    .catch(e => { 
      console.log(e);
      return 'Login failed: ' + e.message;
    });
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
            onChangeText={text => setPassword(text)}
          />
        </View>
      <View style={styles.containerBtn}>
        <Link href="/auth/login">
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
            onPress={login}
          />
        </Link>
      </View>
    </ImageBackground>
  );
}