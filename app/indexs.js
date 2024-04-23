import React from 'react';
import { Link, router } from 'expo-router';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import authStyles from './styles/authStyles.js';
import { Ionicons } from '@expo/vector-icons';
import { color } from '@rneui/base';
import { Button } from '@rneui/themed';

const welcomeScreen = require('./../assets/images/welcomeScreen.png');
const welcomeImage = require('../assets/images/welcome.png');
const styles = authStyles();

export default function index() {
  const login = () => {
    router.navigate('/auth/login');
  }
  const register = () => {
    router.navigate('/auth/register');
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
        <Button
          title={'Register'}
          containerStyle={{
            width: 100,
          }}
          buttonStyle={{ 
            borderRadius: 10,
            backgroundColor: '#1F41BB',
          }}
          onPress={register}
        />
      </View>
    </ImageBackground>
  );
}