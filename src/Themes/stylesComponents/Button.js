import {  StyleSheet } from "react-native";
import Colors from "../../constants/Colors_app";

const button = StyleSheet.create({
    small: {
        width: '50%',
        fontSize: 16,
        height: 52,
    },
    medium: {
        width: '75%',
        fontSize: 20,
        height: 52,
    },
    expansive: {
        width: '90%',
        fontSize: 24,
        height: 52,
    },
    primary: {
        borderRadius:10,
        justifyContent: 'center',
    },
    primaryText: {
        color: "#fff",
        fontSize: 34,
    },
    second: {
        borderRadius:10,
        justifyContent: 'center',
    },
    secondText: {
        color: "#fff",
        fontSize: 34,
    },
    flat: {
        borderRadius:10,
        justifyContent: 'center',
    },
    surface: {
        borderRadius:10,
        justifyContent: 'center',
    },
    surfaceText: {
        borderRadius:10,
        justifyContent: 'center',
    },
    flatText: {
        color: "#FFF",
    },
    desactived:{
        
    }
});

export default button;