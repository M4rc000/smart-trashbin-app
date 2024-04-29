import React from 'react';
import { View } from 'react-native';
import { Text, Card } from 'react-native-paper';

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