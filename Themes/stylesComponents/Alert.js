import {  StyleSheet } from "react-native";
import Colors from "../../constants/Colors_app"

const levelCompleteAlert= StyleSheet.create({
    Alertstyle:{
        display: 'flex',
        justifyContent: 'space-between',
        elevation: 10,
        height: 300,
        borderRadius: 25
      },
      titleStyle:{
        fontSize: 26,
        paddingTop: 8,
        marginBottom: 0
      },
      opacity: {
        opacity: 0.5,
      },
      descriptionStyle:{
        width: "100%",
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'justify'
      },
      buttonStyle:{
        alignSelf: "center",
        paddingBottom: 32
      }
  });

export default levelCompleteAlert;