import React, {useEffect,useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider, BottomNavigation,IconButton } from "react-native-paper";
import {FlatList, Image, TouchableOpacity, DeviceEventEmitter} from 'react-native'
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";
import { useNavigation, useRoute } from '@react-navigation/native';
import jsonMundos from '../../assets/CardMundo/CardMundo.json';
import Icon from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-async-storage/async-storage';

const WorldPage = (props) => {
  const { colors } = useTheme();

  const LevelNames = ["Floresta inicial","Lago Bin","As Montanhas Hilbert","Rupturas rochosas","Cidade Lovelace"]

  const [level,setLevel] = useState(1);  

  const [available,setAvailable] = useState(1);

  const [updateData, setUpdateData] = useState(true)
  
  const {push,route,goBack} = useNavigation();
  const OtherPageroute = useRoute();

  const index = jsonMundos.findIndex(object => {
    return object.id === OtherPageroute.params.mundo;
  });
  
  const info_mundo = jsonMundos[index];

  const mapas = {
    1: require('../../assets/Map/Mapa_1.png'),
  }

  const setFase = async () =>{

    try {

      const raw_data = await AsyncStorage.getItem('@userInfo')
      let {fase} = JSON.parse(raw_data)

      setAvailable(fase + 1)
      setUpdateData(false)

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>{
    if (updateData){
      setFase()
    }
  },[updateData])

  DeviceEventEmitter.addListener("updateData", (eventData) => setUpdateData(true));

 
  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.BackAction color="white" onPress={()=> goBack()} />
        <Appbar.Content color={colors.surface} title={info_mundo.world} />
      </Appbar>
      
      <View style={{marginBottom: 128,padding:16}}>
        <View>
            <Text variant="second" size="medium">
                {info_mundo.name_world}
            </Text>
        </View>
        <View style={{borderWidth : 4,borderColor: "#9c7c66",marginVertical: 16}}>
            <Image style={{width: "100%",resizeMode: 'stretch',height:450}}
                    source={mapas[OtherPageroute.params.mundo]}
                    />
        </View>
        <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center',marginVertical: 16}}>
            
            <TouchableOpacity onPress={() =>{
              
              if (level !== 1) {
                setLevel(level - 1)
              }
            }}>
              <Icon name="left" size={30} color={colors.primary} style={{opacity:0.5}}/>
            </TouchableOpacity>
            <Text variant="primary" size="small">
              {level}:{LevelNames[level-1]}
            </Text>
            <TouchableOpacity onPress={() =>{
              if (level < available){
                setLevel(level + 1)
              }
            }}>
              <Icon name="right" size={30} color={colors.primary} style={{opacity:0.5}}/>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:'center'}}>
          <Button size="small" onPress={()=>{
            push("Game",{level:level})
          }}>
            Entrar fase
          </Button>
        </View>
        <TouchableOpacity onPress={() => {console.log("Navegar")}}style={{alignItems: 'center',marginVertical: 16}}>
            
            <Text variant="black" size="small" style={{textAlign:'center'}}>
                Missões {info_mundo.world} {"->"} --Indisponível--
            </Text>
            
        </TouchableOpacity>
        
      </View>
      
    </SafeAreaView>
  );
};

export default WorldPage;
