import React, {useEffect,useState,useCallback} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider, BottomNavigation, List } from "react-native-paper";
import {FlatList, ScrollView, ActivityIndicator,RefreshControl } from 'react-native'
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import { View } from "../../components/Themed";
import AlertDiario from "../../components/AlertDiario";

import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import infoMundo from "@root/assets/Diario/Mundo_1/info.json";


const DiarioPage = (props) => {
  const { colors } = useTheme();

  const navigation = useNavigation()

  const [infoShow,setInfoShow] = useState({});
  const [visible,setVisible] = useState(false);

  const [numberFases,setNumberFases] = useState(0);


  const getNumberFases = async()=>{
    const raw_data = await AsyncStorage.getItem('@userInfo')
    const user = JSON.parse(raw_data)

    setNumberFases(user.fase)
  }

  // const availableLevels = infoMundo.slice(0,number_fases);

  const [levels,setLevels] = useState([]);
  const [defaultlevels,setDefaultLevels] = useState([]);
  

  useEffect(() => {
    let firstLevel = [];
    for (let i=0;i<10; i++){
      if (i< numberFases){
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
  },[numberFases])

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

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false)
    });
  }, []);

  useEffect(() => {
    if( refreshing == false){
      getNumberFases()
    }
  },[refreshing])
    
 
  return (
    <SafeAreaView>
      <Appbar>
        
        <Appbar.Content color={colors.surface} title="Diário do viajante" />
      </Appbar>

      <AlertDiario visible={visible} hidedialog={()=>{setVisible(false)}} infoCard={infoShow} />
      <ScrollView  refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }>
        <View style={{marginBottom: 128}}>
          <List.Accordion
            title="Mundo l - Ilha lovelace"
            left={props => <List.Icon {...props} icon="book-open-outline" />}>
            {levels.map(item => <List.Item  key={"1" + item.level} left={props => {
              if (item.description === false){
                return <List.Icon {...props} icon="lock-outline" />
              } else {
                return <List.Icon {...props} icon="pencil-outline" />
              }
            }} onPress={()=>{
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
