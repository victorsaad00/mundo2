import {  StyleSheet } from "react-native";
import Colors from "../../constants/Colors_app"

const levelCompleteCard = StyleSheet.create({
    Cardstyle:{
        display: 'flex',
        height: 650,
        elevation: 10,
      },
      titleStyle:{
        fontSize: 26,
        paddingTop: 16,
        marginBottom: 0
      },
      subtitleStyle:{
        fontSize: 24,
        marginTop: 16
      },
      opacity: {
        opacity: 0.5,
      },
      descriptionStyle:{
        width: "100%",
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'justify',
        
      },
      buttonStyle:{
        alignSelf: "center",
        paddingTop: 0
      }
  });

export default levelCompleteCard;