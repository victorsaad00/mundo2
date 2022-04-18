import {  StyleSheet } from "react-native";
import Colors from "../../constants/Colors_app"

export default StyleSheet.create({
    // Main Button
    size_button: {
        height: 52,
        width: '90%',
        backgroundColor: Colors.primary[10],
        
        borderRadius:10},
    text_button: {
        alignContent: "center",
        color: "#fff",
        fontSize: 26,
    },
    // Second Button
    sizeSecondButton: {
        height: 40  ,
        width: 150,
        backgroundColor: Colors.primary[10],
        borderRadius: 100},
    textSecondText: {
        color: "#fff",
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },

    // Mission button
    missionMainButton: {
        height: 40,
        width: 160,
        backgroundColor: Colors.variant[10],
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100},
    missionMainText: {
        color: "#fff",
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },

    // Mission second button
    missionSecondButton: {
        height: 40,
        width: 60,
        backgroundColor: Colors.variant[20],
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100},
    missionSecondText: {
        color: "#fff",
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
  });