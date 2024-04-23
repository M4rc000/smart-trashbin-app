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
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const login = () => {
    router.navigate('/home');
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
          label="Email"
          style={{ width: 300 }}
        />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={secureTextEntry}
          style={{ width: 300, marginTop: '5%' }}
          right={
            <TouchableOpacity onPress={toggleSecureEntry}>
                <Text name={secureTextEntry ? <SimpleLineIcons name="eye" size={24} color="black" /> : <FontAwesome5 name="eye-slash" size={24} color="black" /> }></Text>
            </TouchableOpacity>
          }
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
      <Link href='http://google.com' style={{textAlign: 'center', marginTop: '-35%'}}>
        <Text style={{ fontSize: 12, color: '#1F41BB', fontWeight: 500 }}>Forgot your password?</Text>
      </Link>
      <Link href='/auth/register' style={{textAlign: 'center', marginTop: '5%'}}>
        <Text style={{ fontSize: 12, color: 'rgba(0,0,0,.8)', fontWeight: 500 }}>Create a new account</Text>
      </Link>
    </ImageBackground>
  );
}