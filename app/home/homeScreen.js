import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import homeStyles from '../styles/homeStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import capitalizeFirstLetter from '../functions';

function HomeScreen() {
    const styles = homeStyles();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUserSession = async () => {
            try {
                const userSession = await AsyncStorage.getItem('userSession');
                if (userSession !== null) {
                    const parsedUser = JSON.parse(userSession);
                    setUser(parsedUser);
                    console.log(parsedUser);
                } else {
                    console.log('User session not found');
                }
            } catch (error) {
                console.error('Error retrieving user session:', error);
            }
        };
        getUserSession();
    }, []);
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
            <View style={{ marginTop: '1%', alignItems: 'center' }}>
                <Card style={{ width: '89%', marginTop: '3%'}}>
                    <Card.Content>
                        <View style={{  flexDirection: 'row', justifyContent: 'flex-start', gap: 200}}>
                        <Text variant="bodyMedium"><Text style={{ fontWeight: '800' }}>Trash Bin 001</Text> | Lt. 1 A001</Text>
                        </View>
                    </Card.Content>
                </Card>
            </View>
            <View style={{ marginTop: '1%', alignItems: 'center' }}>
                <Card style={{ width: '89%', marginTop: '3%'}}>
                    <Card.Content>
                        <View style={{  flexDirection: 'row', justifyContent: 'flex-start', gap: 200}}>
                            <Text variant="bodyMedium"><Text style={{ fontWeight: '800' }}>Trash Bin 001</Text> | Lt. 1 A002</Text>
                        </View>
                    </Card.Content>
                </Card>
            </View>
            <View style={{ marginTop: '1%', alignItems: 'center' }}>
                <Card style={{ width: '89%', marginTop: '3%'}}>
                    <Card.Content>
                        <View style={{  flexDirection: 'row', justifyContent: 'flex-start', gap: 200}}>
                            <Text variant="bodyMedium"><Text style={{ fontWeight: '800' }}>Trash Bin 001</Text> | Lt. 1 A002</Text>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </View>
    );
}

export default HomeScreen;