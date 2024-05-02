import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, SegmentedButtons } from 'react-native-paper';
import apiUrl from './../api';


function DataScreen() {
    const [trashData, setTrashData] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        const getDataTrash = async () => {
            try {
                let url = '';
                if (value === 'full') {
                    url = apiUrl.urlDataFull;
                } else if (value === 'medium') {
                    url = apiUrl.urlDataMedium;
                } else if (value === 'empty') {
                    url = apiUrl.urlDataEmpty;
                } else {
                    url = apiUrl.urlData;
                }

                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const resJson = await response.json();
                setTrashData(resJson); // Set the fetched data to state
            } catch (error) {
                console.error('Error getting data:', error);
            }
        };

        if (value !== '') {
            getDataTrash();
            if(trashData){
                console.log(trashData);
            } 
            else{
                console.log(trashData);
            }
        }
    }, [value]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Notifications</Text>
            </View>
            <View style={styles.segmentedButtonsContainer}>
                <SegmentedButtons
                    value={value}
                    style={styles.segmentedButtons}
                    onValueChange={setValue}
                    buttons={[
                        {
                            value: 'empty',
                            label: 'Empty',
                        },
                        {
                            value: 'medium',
                            label: 'Medium',
                        },
                        {
                            value: 'full',
                            label: 'Full'
                        },
                    ]}
                />
            </View>
            {trashData.length > 0 && trashData.map((bin) => (
                <View key={bin.nama} style={styles.cardContainer}>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Text style={styles.cardText}>{bin.nama} | {bin.level} {bin.location}</Text>
                        </Card.Content>
                    </Card>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#1F41BB',
        padding: 16,
    },
    headerText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '900',
    },
    segmentedButtonsContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    segmentedButtons: {
        width: '90%',
    },
    cardContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    card: {
        width: '89%',
    },
    cardText: {
        fontWeight: '800',
    },
});

export default DataScreen;