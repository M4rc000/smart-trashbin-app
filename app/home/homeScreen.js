import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import homeStyles from '../styles/homeStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function HomeScreen() {
    const styles = homeStyles();
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.leftTextContainer}>
                    <Text style={{ fontSize: 20 }}>Welcome <Text style={{ color: '#1F41BB' }}>Marco</Text></Text>
                </View>
                <View style={styles.rightTextContainer}>
                    <Text><MaterialCommunityIcons name="bell" size={24} color="#1F41BB" /></Text>
                </View>
            </View>
        </View>
    );
}

export default HomeScreen;