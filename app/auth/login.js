import React, {useState} from 'react';
import { Link, router } from 'expo-router';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import authStyles from '../styles/authStyles.js';
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper'; 
import { FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';

const welcomeScreen = require('../../assets/images/welcomeScreen.png');
const welcomeImage = require('../../assets/images/welcome.png');
const styles = authStyles();

export default function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const login = async (username, password) => {
  //   console.log(username);
  //   console.log(password);
  //   const url = 'http://localhost/smart-trashbin/user/'; // Assuming this is the correct endpoint for logging in
  
  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });
  
  //     if (response.ok) {
  //       // Login successful
  //       const responseData = await response.json();
  //       // Assuming the server returns a token upon successful login
  //       const token = responseData.token;
  //       console.log('Login successful');
  //       // Perform navigation here or store the token in localStorage
  //       // Example: localStorage.setItem('token', token);
  //     } else {
  //       // Login failed
  //       const errorData = await response.json();
  //       console.error('Login failed:', errorData.message); // Assuming the server returns an error message
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }
  // }

  // Usage example:


  const login = () => {
    router.navigate('./../home');
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