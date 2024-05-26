import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import homeStyles from '../styles/homeStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import capitalizeFirstLetter from '../functions';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

function HomeScreen() {
    const styles = homeStyles();  
    
    const [trashData, setTrashData] = useState([]);
    const [lastNotified, setLastNotified] = useState(null); // Track the last notification
    const [user, setUser] = useState(null);
    const urlDataNotifFull = process.env.EXPO_PUBLIC_API_URLDataNotifFull;

    useEffect(() => {
        const getDataTrash = async () => {
            try {
                const response = await fetch(urlDataNotifFull, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    // throw new Error(`Network response was not ok: ${errorText}`);
                }

                const resJson = await response.json();
                setTrashData(resJson);
            } catch (error) {
                // console.error('Error getting data:', error);
            }
        };

        // Polling the server every 5 seconds for real-time updates
        const intervalId = setInterval(getDataTrash, 5000);
        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

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

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
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
            try {
                const projectId = Constants.expoConfig?.extra?.eas?.projectId;
                if (!projectId) {
                    // throw new Error('Project ID is not defined in the app configuration.');
                }
                token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
                // console.log(token);
            } catch (error) {
                // console.error('Error encountered while fetching Expo token:', error);
            }
        } else {
            alert('Must use physical device for Push Notifications');
        }
    
        return token;
    }

    useEffect(() => {
        registerForPushNotificationsAsync();
    }, []);

    useEffect(() => {
        if (trashData.length > 0) {
            const latestData = JSON.stringify(trashData);
            if (latestData !== lastNotified) {
                const binNames = trashData.map(bin => bin.nama); // Extracting bin names
                const binLocations = trashData.map(bin => bin.location); // Extracting bin locations
                Notifications.scheduleNotificationAsync({
                    content: {
                        title: "Smart Trash Bin",
                        body: `${binNames.join(', ')}, located at ${binLocations.join(', ')}, are full.`
                    },
                    trigger: null, // Trigger immediately
                });
                setLastNotified(latestData); // Update the last notification data
            }
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
                                <Text variant="bodyMedium">
                                    <Text style={{ fontWeight: '800' }}>{bin.nama}
                                    </Text> |{bin.level} {bin.location}
                                </Text>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            ))}
        </View>
    );
}
export default HomeScreen;