import {  StyleSheet } from "react-native";

const cardMundo = StyleSheet.create({
    Cardstyle:{
      display: 'flex',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      height: 350,
      paddingHorizontal: 8,
      paddingVertical: 32,
      elevation: 10,
    },
    titleStyle:{
      fontSize: 32,
    },
    subtitleStyle:{
      fontSize: 24,
      paddingVertical: 16
    },
    descriptionStyle:{
      width: "100%",
      fontSize: 18,
      height: 125,
      lineHeight: 30,
      paddingVertical: 16
    },
    buttonStyle:{
      alignSelf: "flex-end",
    }
  });

  export default cardMundo;