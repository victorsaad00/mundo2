import React, {useEffect,useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider, BottomNavigation,IconButton } from "react-native-paper";
import {FlatList, Image, TouchableOpacity, ScrollView  } from 'react-native'
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import ColorChoose from "../../components/ColorChoose";
import VisualChoose from "../../components/VisualChoose"
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";
import pathsRequires from "@root/assets/character/pathRequires.js";
import rawEyeColors from "@root/assets/character/eyeColors.js";
import rawhairColors from "@root/assets/character/hairColors.js";
import rawskinColors from "@root/assets/character/skinColors.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DefaultInfo from "@root/assets/CharacterInfo/info.json";
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const CustomerPage = (props) => {
  const navigation = useNavigation();
  const [visible,setVisible] = useState(false);

  const { colors } = useTheme();

  const [userInfo,setUserInfo] = useState(DefaultInfo);
  const [retrieve, setRetrieve] = useState(false);

  const [eyeColor,setEyeColor] = useState("blue");
  const [genre,setGenre] = useState("male");
  const [hairColor,setHairColor] = useState("brown");
  const [head,setHead] = useState("2");
  const [skinColor,setSkinColor] = useState("branca");
  const [armor,setArmor] = useState("1");
  const [shoes,setShoes] = useState("1");

  const getData = async () => {
    try {
    
      const raw_data = await AsyncStorage.getItem('@userInfo')
      const user = JSON.parse(raw_data)

      setUserInfo(user.user_styles)
      setRetrieve(true)

    } catch (e) {
      console.log(e);
      }
  }

  useEffect(() => {
    if (!retrieve){
      getData()
      
    }
    setEyeColor(userInfo.eyeColor);
    setGenre(userInfo.genre);
    setHairColor(userInfo.hairColor);
    setHead(userInfo.head);
    setSkinColor(userInfo.skinColor);
    setArmor(userInfo.armor);
    setShoes(userInfo.shoes);
  },[retrieve])

  const [hairs,setHairs] =  useState([]);
  
  useEffect(() => {
    const objectPathHair = Object.entries(pathsRequires.hair[genre][hairColor]);
    
    setHairs(objectPathHair.map((item) => {
      if (item[0] == head){
        return {
          id: item[0],
          selected: true,
          pathHair: item[1]
        } 
      }
      else{
        return {
          id: item[0],
          selected: false,
          pathHair: item[1]
        }
      }
        
    }))

  },[hairColor,genre]);

  const [armors,setArmors] =  useState([]);
  
  useEffect(() => {
    const objectPathHair = Object.entries(pathsRequires.armor[genre]);

    setArmors(objectPathHair.map((item) => {
      if (item[0] == armor){
        return {
          id: item[0],
          selected: true,
          pathHair: item[1]
        } 
      }
      else{
        return {
          id: item[0],
          selected: false,
          pathHair: item[1]
        }
      }
        
    }))

  },[genre]);

  const [ListShoes,setListShoes] =  useState([]);
  
  useEffect(() => {
    const objectPathHair = Object.entries(pathsRequires.shoes);

    setListShoes(objectPathHair.map((item) => {
      if (item[0] == shoes){
        return {
          id: item[0],
          selected: true,
          pathHair: item[1].display
        } 
      }
      else{
        return {
          id: item[0],
          selected: false,
          pathHair: item[1].display
        }
      }
        
    }))

  },[genre]);
  
  const skinColors = rawskinColors.map((item) => {
    if (item.name === skinColor){
      item.selected = true
    } 
    return item
  });

  const hairColors = rawhairColors.map((item) => {
    if (item.name == hairColor){
      item.selected = true
    } 
    return item
  });

  const eyeColors = rawEyeColors.map((item) => {
    if (item.name == eyeColor){
      item.selected = true
      
    } 
    return item
  });

  const saveVisual = async () =>{

    if (eyeColor !== userInfo.eyeColor || genre !== userInfo.genre || hairColor !== userInfo.hairColor ||
      head !== userInfo.head ||  skinColor !== userInfo.skinColor || armor !== userInfo.armor ||
      shoes !== userInfo.shoes){
        const user_styles = {
          eyeColor,
          genre,
          hairColor,
          head,
          skinColor,
          armor,
          shoes
        }

        try {
          const raw_data = await AsyncStorage.getItem('@userInfo')
          let user = JSON.parse(raw_data)
          user.user_styles = user_styles;
          await AsyncStorage.setItem('@userInfo', JSON.stringify(user))
          
          setVisible(true)
        
          
        } catch (e) {
          console.log(e);
        }

      }
  }

  return (
    <SafeAreaView>
      <Alert visible={visible} hidedialog={()=>{setVisible(false)}} infoCard={{title: "Visual atualizado!",description: "Esse visual ficou maneiro viajante!"}} />

      <Appbar>
        <Appbar.BackAction color="white" onPress={()=> navigation.goBack()} />
        <Appbar.Content color={colors.surface} title="Olá, Joe Doe" />
        <Appbar.Action color={colors.surface} icon="check" onPress={saveVisual} />
      </Appbar>
      
      <View style={{marginBottom: 128,alignItems: 'center'}}>
        <View style={{backgroundColor: 'white',width: 192,height:350}}>
            <Image style={{width: 192,resizeMode: 'stretch',height:408}}
                        source={pathsRequires.skin[genre][skinColor]}
                        />
            <Image style={{width: 192,resizeMode: 'stretch',height:12,position: "absolute",left:0,top:126}}
                        source={pathsRequires.eye[eyeColor]}
                        />
            <Image style={{width: 192,resizeMode: 'stretch',height:408,position: "absolute"}}
                        source={pathsRequires.armor[genre][armor]}
                        />
            <Image style={{width: 192,resizeMode: 'stretch',height:186,position: "absolute"}}
                        source={pathsRequires.hair[genre][hairColor][head]}
                        />
            <Image style={{width: 192,resizeMode: 'stretch',height:408,position: "absolute"}}
                        source={pathsRequires.shoes[shoes].visual}
                        />        
                          
        </View>
        <View style={{height:300}}>
          <View style={{backgroundColor: colors.primary,height:60,justifyContent: "center",
              marginVertical: 16}}>
            <Text size="medium" style={{color: colors.background,paddingLeft: 16}}>Estilos personagem</Text>
          </View>
          <ScrollView contentContainerStyle ={{alignItems: 'center'}}>
            <View style={{borderBottomWidth:3,borderBottomColor: colors.disabled,paddingVertical:16}}>
              <Text variant='second' size="medium" style={{padding: 16}}>Gênero personagem</Text>
              <View style={{flexDirection: 'row',width:'100%', justifyContent: 'space-evenly'}}>
                <IconButton style={{backgroundColor: genre == "male" ? colors.primary : colors.accent}} color={colors.background} icon="gender-male" size={40} onPress={() => setGenre('male')}/>
                <IconButton style={{backgroundColor: genre == "female" ? colors.primary : colors.accent}} color={colors.background} icon="gender-female" size={40} onPress={() => setGenre('female')}/>
              </View>
            </View>

            <View style={{borderBottomWidth:3,borderBottomColor: colors.disabled,paddingVertical:16}}>
              <Text variant='second' size="medium" style={{padding: 16}}>Cor da pele</Text>
              <ColorChoose style={{paddingVertical: 16}} listItems={skinColors} state={[skinColor,setSkinColor]}/>
            </View>

            <View style={{borderBottomWidth:3,borderBottomColor: colors.disabled,paddingVertical:16}}>
              <Text variant='second' size="medium" style={{padding: 16}}>Cor dos olhos</Text>
              <ColorChoose style={{paddingVertical: 16}} listItems={eyeColors} state={[eyeColor,setEyeColor]}/>
            </View>

            <View style={{borderBottomWidth:3,borderBottomColor: colors.disabled,paddingVertical:16}}>
              <Text variant='second' size="medium" style={{padding: 16}}>Cabelo</Text>
              <Text variant='second' size="small" style={{padding: 16}}>Cor</Text>
              <ColorChoose listItems={hairColors} state={[hairColor,setHairColor]}/>
              <Text variant='second' size="small" style={{padding: 16}}>Tipo</Text>
              <VisualChoose listItems={hairs} state={[head,setHead]}/>
            </View>

            <View style={{borderBottomWidth:3,borderBottomColor: colors.disabled,paddingVertical:16}}>
              <Text variant='second' size="medium" style={{padding: 16}}>Vestimento</Text>
              <VisualChoose listItems={armors} state={[armor,setArmor]}/>
            </View>
            
            <View style={{borderBottomWidth:3,borderBottomColor: colors.disabled,paddingVertical:16}}>
              <Text variant='second' size="medium" style={{padding: 16}}>Sapatos</Text>
              <VisualChoose listItems={ListShoes} state={[shoes,setShoes]}/>
            </View>
            
            <Divider style={{height:16}}/>
            
            <Divider style={{height:16}}/>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomerPage;
