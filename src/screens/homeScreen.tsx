import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Button,} from 'react-native-paper';
import { styles } from '../themes/styles';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground 
            source={require('../images/fondo3.jpg')} 
            style={styles.backgroundImage}>
            <View style={styles.root}>
            <Image 
                    source={require('../images/logo.png')} 
                    style={styles.logo}
                />
            <Button
                style={styles.button} 
                mode="contained"
                onPress={() => navigation.navigate('Game')}
            >Empezar Juego</Button>
            </View>
        </ImageBackground>
        
    );
};