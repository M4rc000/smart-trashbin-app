import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import homeStyles from '../styles/homeStyles';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

const hero = require('./../../assets/images/man.jpg');

function ProfileScreen() {
    const styles = homeStyles();
    return (
        <View style={styles.container}>
            <View style={styles.containerHero}>
                <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end', marginTop: '4%', marginRight: '4%'  }}><MaterialIcons name="logout" size={24} color="white" /></TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-start', marginTop: '4%', marginLeft: '4%'  }}><SimpleLineIcons name="settings" size={24} color="white" /></TouchableOpacity>
                <Image style={styles.heroImage} source={hero}></Image>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 700, fontSize: 22, marginTop: '-4%' }}>Marco Antonio</Text>
                <Text style={{ textAlign: 'center', color: '#feee', marginTop: '1%'  }}>Member</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.containerList}>
                
            </View>
        </View>
    );
}

export default ProfileScreen;