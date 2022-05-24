import React, {useEffect,useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider, BottomNavigation, List } from "react-native-paper";
import {FlatList, ScrollView } from 'react-native'
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import { View } from "../../components/Themed";
import AlertDiario from "../../components/AlertDiario";

import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import infoMundo from "@root/assets/Diario/Mundo_1/info.json";


const DiarioPage = (props) => {
  const { colors } = useTheme();

  const navigation = useNavigation()

  const [infoShow,setInfoShow] = useState({});
  const [visible,setVisible] = useState(false);

  const number_fases = 5;

  // const availableLevels = infoMundo.slice(0,number_fases);

  const [levels,setLevels] = useState([]);
  const [defaultlevels,setDefaultLevels] = useState([]);
  

  useEffect(() => {
    let firstLevel = [];
    for (let i=0;i<10; i++){
      if (i< number_fases){
        firstLevel.push(infoMundo[i])
      }else {
        firstLevel.push({
          level: i+1,
          name: "?????????",
          description: false
        })
      }
    }
    setLevels(firstLevel);
  },[])

  useEffect(() => {
    let firstLevel = [];
    for (let i=0;i<10; i++){
        firstLevel.push({
          level: i+1,
          name: "?????????",
          description: false
        })
    }
    setDefaultLevels(firstLevel);
  },[])
    
 
  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.Content color={colors.surface} title="Olá, Joe Doe" />
        <Appbar.Action color={colors.surface} icon="brush" onPress={()=> navigation.push("Visual")} />
      </Appbar>

      <AlertDiario visible={visible} hidedialog={()=>{setVisible(false)}} infoCard={infoShow} />

      <ScrollView>
      <View style={{marginBottom: 128}}>
        <List.Accordion
          title="Mundo l - Ilha lovelace"
          left={props => <List.Icon {...props} icon="book-open-outline" />}>
          {levels.map(item => <List.Item left={props => {
            if (item.description === false){
              return <List.Icon {...props} icon="lock-outline" />
            } else {
              return <List.Icon {...props} icon="pencil-outline" />
            }
          }} key={item.level} onPress={()=>{
            setInfoShow({
              "title": item.name,
              "description": item.description
            })
            setVisible(true)
          }} title={item.name} />)}
        </List.Accordion>
        <List.Accordion
          title="Mundo ll - Penhasco de Turing"
          left={props => <List.Icon {...props} icon="book-open-outline" />}>
          {defaultlevels.map(item => <List.Item key={item.level} left={props => {
            if (item.description === false){
              return <List.Icon {...props} icon="lock-outline" />
            } else {
              return <List.Icon {...props} icon="pencil-outline" />
            }
          }} title={item.name} />)}
        </List.Accordion>
        <List.Accordion
          title="Mundo lll - Floresta Conectada"
          left={props => <List.Icon {...props} icon="book-open-outline" />}>
          {defaultlevels.map(item => <List.Item key={item.level} left={props => {
            if (item.description === false){
              return <List.Icon {...props} icon="lock-outline" />
            } else {
              return <List.Icon {...props} icon="pencil-outline" />
            }
          }} title={item.name} />)}
        </List.Accordion>
      </View>
      
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default DiarioPage;
