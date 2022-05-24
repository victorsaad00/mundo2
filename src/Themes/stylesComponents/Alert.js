import {  StyleSheet } from "react-native";
import Colors from "../../constants/Colors_app"

const levelCompleteAlert= StyleSheet.create({
    Alertstyle:{
        display: 'flex',
        justifyContent: 'space-between',
        elevation: 10,
        height: 300,
        borderRadius: 25,
       
      },
      AlertDiarioDiariostyle:{
        display: 'flex',
        justifyContent: 'space-between',
        elevation: 10,
        height: "100%",
        borderRadius: 25,
        backgroundColor: 'transparent',
        shadowColor: 'transparent',
        marginVertical: 16,
        marginHorizontal: 0
      },
      titleStyle:{
        fontSize: 26,
        paddingTop: 8,
        marginBottom: 0,
        backgroundColor: 'transparent'
      },
      titleDiarioStyle:{
        fontSize: 26,
        paddingTop: 8,
        marginBottom: 0,
        backgroundColor: 'transparent',
        paddingVertical: 16
      },
      opacity: {
        opacity: 0.5,
      },
      descriptionStyle:{
        width: "100%",
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'justify',
        backgroundColor: 'transparent',

      },
      descriptionDiarioStyle:{
        width: "100%",
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'justify',
        backgroundColor: 'transparent',
        height: "100%"
      },
      buttonStyle:{
        alignSelf: "center",
        paddingBottom: 32
      }
  });

export default levelCompleteAlert;