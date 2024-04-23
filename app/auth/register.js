import React from 'react';
import { Link } from 'expo-router';
import { View, Text, ImageBackground } from 'react-native';
import authStyles from '../styles/authStyles.js';
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper'; 

const welcomeScreen = require('../../assets/images/welcomeScreen.png');
const welcomeImage = require('../../assets/images/welcome.png');
const styles = authStyles();

export default function register() {
  const [text, setText] = React.useState('');
  return (
    <ImageBackground style={styles.container} source={welcomeScreen}>
      <View style={styles.containerHeader}>
        <Text style={{ fontWeight: 700, fontSize: 25, color: '#1F41BB' }}>Create account</Text>
        <Text style={{ fontWeight: 300, fontSize: 15, color: '#000', marginTop: '5%' }}>Create an account so you can</Text>
        <Text style={{ fontWeight: 300, fontSize: 15, color: '#000', marginTop: '2%' }}>explore efficient feature</Text>
      </View>
      <View style={styles.panelContainer}>
        <TextInput
          mode="outlined"
          label="Name"
          style={{ width: 300}}
        />
        <TextInput
          mode="outlined"
          label="Email"
          style={{ width: 300, marginTop: '1%' }}
        />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry
          style={{ width: 300, marginTop: '1%'  }}
        />
      </View>
      <View style={styles.containerBtn}>
        <Link href="/auth/login">
          <Button
            title={'Register'}
            containerStyle={{
            width: 300,
            height: 200,
            }}
            buttonStyle={{ 
            borderRadius: 10,
            backgroundColor: '#1F41BB',
            }}
          />
        </Link>
      </View>
      <Link href='/auth/login' style={{textAlign: 'center', marginTop: '-35%'}}>
        <Text style={{ fontSize: 12, color: '#1F41BB', fontWeight: 500 }}>Already have an account?</Text>
      </Link>
    </ImageBackground>
  );
}