import React from 'react';
import { View, Image, TouchableOpacity, Button } from 'react-native';
import { Link, router } from 'expo-router';
import { Text, List, Dialog, Portal } from 'react-native-paper';
import homeStyles from '../styles/homeStyles';
import { MaterialIcons, SimpleLineIcons, Ionicons } from '@expo/vector-icons';

const hero = require('./../../assets/images/man.jpg');

function ProfileScreen() {
    const styles = homeStyles();
    const logout = () => {
        // setVisible(true);
        router.navigate('/');
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerHero}>
                <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end', marginTop: '4%', marginRight: '4%'  }}><MaterialIcons name="logout" size={24} color="white" onPress={logout}/></TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-start', marginTop: '4%', marginLeft: '4%'  }}><SimpleLineIcons name="settings" size={24} color="white" /></TouchableOpacity>
                <Image style={styles.heroImage} source={hero}></Image>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 700, fontSize: 22, marginTop: '-4%' }}>Prime</Text>
                {/* <Text style={{ textAlign: 'center', color: '#feee', marginTop: '1%'  }}>member</Text> */}
            </View>
            <View style={styles.line}></View>
            <View style={styles.containerList}>
                <List.Section>
                    <TouchableOpacity>
                        <List.Item title="Account information" left={() => <MaterialIcons name="person" size={24} color="blue" />} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <List.Item title="About" left={() => <Ionicons name="information-circle-outline" size={24} color="blue" />}/>
                    </TouchableOpacity>
                </List.Section>
            </View>
        </View>
    );
}

export default ProfileScreen;