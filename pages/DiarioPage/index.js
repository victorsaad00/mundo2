import React, {useEffect,useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider, BottomNavigation } from "react-native-paper";
import {FlatList } from 'react-native'
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";


const DiarioPage = (props) => {
  const { colors } = useTheme();
    
 
  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.Content color={colors.surface} title="Olá, Joe Doe" />
      </Appbar>
      
      <View style={{marginBottom: 128}}>
        
      </View>
      
    </SafeAreaView>
  );
};

export default DiarioPage;
