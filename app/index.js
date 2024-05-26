import React, {useState, useEffect} from 'react';
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserSession = async () => {
        try {
            const userSession = await AsyncStorage.getItem('userSession');
            if (userSession !== null) {
              const parsedUser = JSON.parse(userSession);
              setUser(parsedUser);
            } else {
              // console.log('User session not found');
            }
          } catch (error) {
            // console.error('Error retrieving user session:', error);
          }
    };
    getUserSession();
  }, []);

  if(!user || user == NULL || user == ''){
    return <Redirect href={'welcome'} />
  }
  else{
    return <Redirect href={'./home'} />
  }
}       