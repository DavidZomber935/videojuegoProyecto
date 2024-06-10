import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../themes/styles';

export const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.textHead}>Home</Text>
        </View>
    );
};