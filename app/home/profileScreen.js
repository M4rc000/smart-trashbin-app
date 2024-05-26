import React, {useState, useEffect} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Text, List, Dialog, Portal, Button, PaperProvider } from 'react-native-paper';
import homeStyles from '../styles/homeStyles';
import { MaterialIcons, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import capitalizeFirstLetter from '../functions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const hero = require('./../../assets/images/man.jpg');

function ProfileScreen() {
    const styles = homeStyles();
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('userSession');
            // Reset user state
            setUser(null);
            // Navigate to the home screen or any other desired destination
            router.navigate('/');
        } catch (error) {
            // console.error('Error clearing user session:', error);
        }
    };
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
    
    // DIALOG ACCOUNT INFORMATION
    const [accountVisible, setAccountVisible] = React.useState(false);
    const showAccountDialog = () => setAccountVisible(true);
    const hideAccountDialog = () => setAccountVisible(false);

    // DIALOG ABOUT INFORMATION
    const [aboutVisible, setAboutVisible] = React.useState(false);
    const showAboutDialog = () => setAboutVisible(true);
    const hideAboutDialog = () => setAboutVisible(false);
 
    return (
        <PaperProvider>
            <View style={styles.container}>
                <View style={styles.containerHero}>
                    <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end', marginTop: '4%', marginRight: '4%'  }}><MaterialIcons name="logout" size={24} color="white" onPress={logout}/></TouchableOpacity>
                    <TouchableOpacity onPress={showAboutDialog} style={{ position: 'absolute', alignSelf: 'flex-start', marginTop: '4%', marginLeft: '4%'  }}><SimpleLineIcons name="settings" size={24} color="white" /></TouchableOpacity>
                    <Image style={styles.heroImage} source={hero}></Image>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 700, fontSize: 22, marginTop: '-4%' }}>{user ? capitalizeFirstLetter(user.username) : ''}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.containerList}>
                    <List.Section>
                        <TouchableOpacity onPress={showAccountDialog}>
                            <List.Item title="Account information" left={() => <MaterialIcons name="person" size={24} color="blue" />} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={showAboutDialog}>
                            <List.Item title="About" left={() => <Ionicons name="information-circle-outline" size={24} color="blue" />}/>
                        </TouchableOpacity>
                    </List.Section>
                </View>

            {/* ACCOUNT INFORMATION */}
            <View>
                <Portal>
                    <Dialog visible={accountVisible} onDismiss={hideAccountDialog}>
                        <Dialog.Title>Account</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">Username : {user ? capitalizeFirstLetter(user.username) : ''}</Text>
                            <Text>Name : {user ? capitalizeFirstLetter(user.name) : ''}</Text>
                            <Text>Role : {user ? capitalizeFirstLetter(user.role) : ''}</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideAccountDialog}>Close</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            {/* ACCOUNT INFORMATION */}

            {/* ABOUT INFORMATION */}
            <View>
                <Portal>
                    <Dialog visible={aboutVisible} onDismiss={hideAboutDialog}>
                        <Dialog.Title>About</Dialog.Title>
                        <Dialog.Content>
                            <Text>Smart Trash Bin</Text>
                            <Text variant="bodyMedium">version 1.0.0</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideAboutDialog}>Close</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            {/* ABOUT INFORMATION */}
            </View>
        </PaperProvider>
    );
}

export default ProfileScreen;