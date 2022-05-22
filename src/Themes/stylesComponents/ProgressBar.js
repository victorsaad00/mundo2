import {  StyleSheet } from "react-native";
import Colors from "../../constants/Colors_app"

const progressBar = StyleSheet.create({
    viewProgress: {
        width: '100%',
        height: 35,
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        opacity: 20,
    },
    actualProgress: {
        height: 35,
        backgroundColor: Colors.primary[20],
        borderWidth: 1,
        borderColor: Colors.primary[10],
        borderRadius: 20,
        
    },
    textProgress: {
        position: 'absolute',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }
  });

export default progressBar;