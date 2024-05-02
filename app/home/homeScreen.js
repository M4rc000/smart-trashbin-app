import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Button, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import homeStyles from '../styles/homeStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import capitalizeFirstLetter from '../functions';
import apiUrl from './../api';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

function HomeScreen() {
    const styles = homeStyles();  
    
    const [trashData, setTrashData] = useState([]);
    useEffect(() => {
        const getDataTrash = async () => {
        try {
            const response = await fetch(apiUrl.urlData, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
            });
            
            const resJson = await response.json();
            setTrashData(resJson); // Set the fetched data to state
        } catch (error) {
            console.error('Error getting data:', error);
        }
        };
        getDataTrash(); // Fetch data when component mounts
    }, []);
    
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUserSession = async () => {
            try {
                const userSession = await AsyncStorage.getItem('userSession');
                if (userSession !== null) {
                    const parsedUser = JSON.parse(userSession);
                    setUser(parsedUser);
                } else {
                    console.log('User session not found');
                }
            } catch (error) {
                console.error('Error retrieving user session:', error);
            }
        };
        getUserSession();
    }, []);
    
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
        }),
    });
    
    async function registerForPushNotificationsAsync() {
        let token;
      
        if (Platform.OS === 'android') {
          await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        if (Device.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          // Learn more about projectId:
          // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
          token = (await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' })).data;
          console.log(token);
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        return token;
    }

    useEffect(() => {
        if (trashData.length > 0) {
            const binNames = trashData.map(bin => bin.nama); // Extracting bin names
            const binLocation = trashData.map(bin => bin.location); // Extracting bin names
            Notifications.scheduleNotificationAsync({
                content: {
                    title: "Smart Trash Bin",
                    body: `${binNames.join(', '), binLocation} bins already full.` // Joining bin names with comma
                },
                trigger: null, // Change this to the desired trigger
            });
        }
    }, [trashData]);

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.leftTextContainer}>
                    <Text style={{ fontSize: 20 }}>Welcome <Text style={{ color: '#1F41BB' }}>{user ? capitalizeFirstLetter(user.username) : ''}</Text></Text>
                </View>
                <View style={styles.rightTextContainer}>
                    <TouchableOpacity>
                        <Text><MaterialCommunityIcons name="bell" size={24} color="#1F41BB" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ marginLeft: '6%', marginTop: '12%', fontWeight: '700', fontSize: 15 }}>Current notification</Text>
            {trashData.map((bin, index) => (
                <View key={ index } style={{ marginTop: '1%', alignItems: 'center' }}>
                    <Card style={{ width: '89%', marginTop: '3%'}}>
                        <Card.Content>
                            <View style={{  flexDirection: 'row', justifyContent: 'flex-start', gap: 200}}>
                                <Text variant="bodyMedium"><Text style={{ fontWeight: '800' }}>{bin.nama}</Text> |{bin.level} {bin.location}</Text>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            ))}
        </View>
    );
}

export default HomeScreen;