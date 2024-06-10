import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15     
    
    },
    inputs:{
        width:'90%'
    },
    text:{
        fontSize:25,
        fontWeight: 'bold'
    },
    secondaryText:{
        fontSize:20,
        fontWeight: 'bold'
    },
    button:{
        width: '90%',
        backgroundColor: '#14FF00'
    },


    textHead: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'#14FF00'
    },

    textRedirect: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000000'
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

})