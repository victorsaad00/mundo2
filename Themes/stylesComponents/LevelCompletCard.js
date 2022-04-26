import {  StyleSheet } from "react-native";
import Colors from "../../constants/Colors_app"

const levelCompleteCard = StyleSheet.create({
    Cardstyle:{
        display: 'flex',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        height: "90%",
        paddingHorizontal: 8,
        paddingVertical: 32,
        elevation: 10,
      },
      titleStyle:{
        fontSize: 28,
      },
      subtitleStyle:{
        fontSize: 24,
        paddingVertical: 16
      },
      descriptionStyle:{
        width: "100%",
        height: 290,
        fontSize: 24,
        lineHeight: 30,
        

      },
      buttonStyle:{
        alignSelf: "flex-end",
      }
  });

export default levelCompleteCard;