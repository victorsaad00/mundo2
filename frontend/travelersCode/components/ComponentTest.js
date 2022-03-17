import { ThemeProvider } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function ComponentTest({ path }) {

  return (
    <ThemeProvider theme={}>
        <View>

            
        </View>
    </ThemeProvider>
  );
}
