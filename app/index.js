import React from 'react';
import { router } from 'expo-router';
import { View, Text, Image, ImageBackground } from 'react-native';
import authStyles from './styles/authStyles.js';
import { Button } from '@rneui/themed';

const welcomeScreen = require('./../assets/images/welcomeScreen.png');
const welcomeImage = require('../assets/images/welcome.png');
const styles = authStyles();

export default function index() {
  const login = () => {
    router.navigate('/auth/login');
  }
  
  return (
    <ImageBackground style={styles.container} source={welcomeScreen}>
      <View style={styles.containerImage}>
        <Image style={{ width: '75%', height: '75%', marginTop: '3%' }} source={welcomeImage}></Image>
      </View>
      <View style={styles.panel}>
        <Text style={styles.headerText}>Revolutionize Waste</Text>
        <Text style={styles.headerText}>Management With Us</Text>
      </View>
      <View style={styles.containerButton}>
        <Button
          title={'Login'}
          containerStyle={{
            width: 100,
          }}
          buttonStyle={{ 
            borderRadius: 10,
            backgroundColor: '#1F41BB',
          }}
          onPress={login}
        />
      </View>
    </ImageBackground>
  );
}