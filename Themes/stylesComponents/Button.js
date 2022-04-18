import Colors from "../../constants/Colors_app"
import {  StyleSheet } from "react-native";

const button = StyleSheet.create({
    primary: {
        height: 52,
        width: "90%",
        borderRadius:10,
        
        justifyContent: 'center',
    },
    primaryText: {
        color: "#fff",
        fontSize: 34,
    },
    second: {
        height: 52,
        width: "90%",
        borderRadius:10,
        justifyContent: 'center',
    },
    secondText: {
        color: "#fff",
        fontSize: 34,
    },
})

export default button;