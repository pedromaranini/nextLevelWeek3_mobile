import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function OrphanageDetails() {
    return (
        <View style={styles.container} >
            <Text style={styles.textInitial}>OrphanageDetails</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInitial: {
        color: 'red',
    },
});