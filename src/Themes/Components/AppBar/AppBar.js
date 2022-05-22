import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppBar = ({ navigation, back }) => {

  // const navigation = useNavigation();
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="My awesome app" />   
    </Appbar.Header>
  );
};

export default AppBar;
