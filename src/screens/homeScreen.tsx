import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../themes/styles';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';

export const HomeScreen = () => {
    const navigation = useNavigation();
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {

                navigation.navigate('Login');
            })
            .catch((error) => {
                console.error(error);
            });
    };

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
                >
                    Empezar Juego
                </Button>
                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={handleLogout}
                >
                    Cerrar Sesión
                </Button>
            </View>
        </ImageBackground>
    );
};