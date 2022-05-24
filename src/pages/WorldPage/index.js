import React, {useEffect,useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider, BottomNavigation, } from "react-native-paper";
import {FlatList, Image, TouchableOpacity} from 'react-native'
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";
import { useNavigation, useRoute } from '@react-navigation/native';
import jsonMundos from '../../assets/CardMundo/CardMundo.json';

const WorldPage = (props) => {
  const { colors } = useTheme();

  

  
  const navigation = useNavigation();
  const route = useRoute();

  const index = jsonMundos.findIndex(object => {
    return object.id === route.params.mundo;
  });
  
  const info_mundo = jsonMundos[index];

  const mapas = {
    1: require('../../assets/Map/Mapa_1.png'),
  }
    
 
  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.BackAction color="white" onPress={()=> navigation.goBack()} />
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
                    source={mapas[route.params.mundo]}
                    />
        </View>
        <View style={{alignItems: 'center',marginVertical: 16}}>
            <Text variant="black" size="medium">
                Carousel
            </Text>
        </View>
        <TouchableOpacity onPress={() => {console.log("Navegar")}}style={{alignItems: 'center',marginVertical: 16}}>
            
            <Text variant="black" size="small">
                Missões {info_mundo.world} {"->"}
            </Text>
            
        </TouchableOpacity>
        
      </View>
      
    </SafeAreaView>
  );
};

export default WorldPage;
