import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-paper';
import homeStyles from '../styles/homeStyles';
import { MaterialIcons, SimpleLineIcons, Ionicons, AntDesign } from '@expo/vector-icons';

const hero = require('./../../assets/images/man.jpg');

function DataScreen() {
    return (
        <View>
            <View style={{ backgroundColor: '#1F41BB' }}>
                <Text style={{ color: 'white', margin: '5%', fontSize: 15, fontWeight: '900' }}>
                    Notifications
                </Text>
            </View>
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
                            <Text variant="bodyMedium"><Text style={{ fontWeight: '800' }}>Trash Bin 001</Text> | Lt. 1 A003</Text>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </View>
    );
}

export default DataScreen;