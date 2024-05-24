import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, SegmentedButtons } from 'react-native-paper';
import apiUrl from './../api';

const DataScreen = () => {
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
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    // throw new Error(`HTTP error! status: ${response.status}`);
                }

                const resJson = await response.json();
                setTrashData(resJson); // Set the fetched data to state
            } catch (error) {
                // console.error('Error getting data:', error);
                setTrashData([]); // Clear the data in case of an error
            }
        };

        if (value) {
            getDataTrash();
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
                            label: 'Full',
                        },
                    ]}
                />
            </View>
            {trashData.length > 0 ? (
                trashData.map((bin) => (
                    <View key={bin.nama} style={{marginTop: '1%', alignItems: 'center'}}>
                        <Card style={{ width: '89%', marginTop: '3%' }}>
                            <Card.Content>
                                <View style={{  flexDirection: 'row', justifyContent: 'flex-start', gap: 200}}>
                                    <Text variant="bodyMedium"><Text style={{ fontWeight: '800' }}>{bin.nama}</Text> |{bin.level} {bin.location}</Text>
                                </View>
                            </Card.Content>
                        </Card>
                    </View>
                ))
            ) : (
                <Text style={styles.noDataText}>Data tidak ada</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    header: {
        marginBottom: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    segmentedButtonsContainer: {
        marginBottom: 16,
    },
    cardContainer: {
        marginBottom: 16,
    },
    card: {
        padding: 16,
    },
    cardText: {
        fontSize: 16,
    },
    noDataText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 16,
    },
});

export default DataScreen;