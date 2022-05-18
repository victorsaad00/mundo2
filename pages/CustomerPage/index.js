import React, {useEffect,useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider, BottomNavigation } from "react-native-paper";
import {FlatList, Image, TouchableOpacity } from 'react-native'
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import ColorChoose from "../../components/ColorChoose";
import VisualChoose from "../../components/VisualChoose"
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";

const CustomerPage = (props) => {
  const { colors } = useTheme();
  const [eyeColor,setEyeColor] = useState("blue");
  const [genre,setGenre] = useState("male");
  const [hairColor,setHairColor] = useState("brown");
  const [idColor,setIdColor] = useState("1");

  const pathsRequires = {
      eye: {
        blue: require("../../assets/character/Eyes/eye_blue.png"),
        brown: require("../../assets/character/Eyes/eye_brown.png"),
        gray: require("../../assets/character/Eyes/eye_gray.png"),
        green: require("../../assets/character/Eyes/eye_green.png"),
        red: require("../../assets/character/Eyes/eye_red.png"),
      },
      hair: {
        male: {
          brown: {
            '1': require("../../assets/character/Head/male/1_brown.png"),
            '2': require("../../assets/character/Head/male/2_brown.png"),
            '3': require("../../assets/character/Head/male/3_brown.png"),
            '4': require("../../assets/character/Head/male/4_brown.png"),
            '5': require("../../assets/character/Head/male/5_brown.png"),
          },
          preto: {
            '1': require("../../assets/character/Head/male/1_preto.png"),
            '2': require("../../assets/character/Head/male/2_preto.png"),
            '3': require("../../assets/character/Head/male/3_preto.png"),
            '4': require("../../assets/character/Head/male/4_preto.png"),
            '5': require("../../assets/character/Head/male/5_preto.png"),
          },
          loiro: {
            '1': require("../../assets/character/Head/male/1_loiro.png"),
            '2': require("../../assets/character/Head/male/2_loiro.png"),
            '3': require("../../assets/character/Head/male/3_loiro.png"),
            '4': require("../../assets/character/Head/male/4_loiro.png"),
            '5': require("../../assets/character/Head/male/5_loiro.png"),
          },
          ruivo: {
            '1': require("../../assets/character/Head/male/1_ruivo.png"),
            '2': require("../../assets/character/Head/male/2_ruivo.png"),
            '3': require("../../assets/character/Head/male/3_ruivo.png"),
            '4': require("../../assets/character/Head/male/4_ruivo.png"),
            '5': require("../../assets/character/Head/male/5_ruivo.png"),
          },
          azul: {
            '1': require("../../assets/character/Head/male/1_azul.png"),
            '2': require("../../assets/character/Head/male/2_azul.png"),
            '3': require("../../assets/character/Head/male/3_azul.png"),
            '4': require("../../assets/character/Head/male/4_azul.png"),
            '5': require("../../assets/character/Head/male/5_azul.png"),
          }
        },
        female: {
          brown: {
            '1': require("../../assets/character/Head/female/1_brown.png"),
            '2': require("../../assets/character/Head/female/2_brown.png"),
            '3': require("../../assets/character/Head/female/3_brown.png"),
            '4': require("../../assets/character/Head/female/4_brown.png"),
            '5': require("../../assets/character/Head/female/5_brown.png"),
          },
          preto: {
            '1': require("../../assets/character/Head/female/1_preto.png"),
            '2': require("../../assets/character/Head/female/2_preto.png"),
            '3': require("../../assets/character/Head/female/3_preto.png"),
            '4': require("../../assets/character/Head/female/4_preto.png"),
            '5': require("../../assets/character/Head/female/5_preto.png"),
          },
          loiro: {
            '1': require("../../assets/character/Head/female/1_loiro.png"),
            '2': require("../../assets/character/Head/female/2_loiro.png"),
            '3': require("../../assets/character/Head/female/3_loiro.png"),
            '4': require("../../assets/character/Head/female/4_loiro.png"),
            '5': require("../../assets/character/Head/female/5_loiro.png"),
          },
          ruivo: {
            '1': require("../../assets/character/Head/female/1_ruivo.png"),
            '2': require("../../assets/character/Head/female/2_ruivo.png"),
            '3': require("../../assets/character/Head/female/3_ruivo.png"),
            '4': require("../../assets/character/Head/female/4_ruivo.png"),
            '5': require("../../assets/character/Head/female/5_ruivo.png"),
          },
          azul: {
            '1': require("../../assets/character/Head/female/1_azul.png"),
            '2': require("../../assets/character/Head/female/2_azul.png"),
            '3': require("../../assets/character/Head/female/3_azul.png"),
            '4': require("../../assets/character/Head/female/4_azul.png"),
            '5': require("../../assets/character/Head/female/5_azul.png"),
          }
        }
      }
  }

  const [hairs,setHairs] =  useState([]);
  
  useEffect(() => {
    const objectPathHair = Object.entries(pathsRequires.hair[genre][hairColor]);

    setHairs(objectPathHair.map((item) => {
      if (item[0] == idColor){
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



  const hairColors =  [
    {
        id: 0,
        cor: "#A66351",
        selected: true,
        name: "brown"
    },
    {
        id: 1,
        cor: "#4D4D4D",
        selected: false,
        name: "preto"
    },
    {
        id: 2,
        cor: "#996F00",
        selected: false,
        name: "loiro"
    },
    {
        id: 3,
        cor: "#80134A",
        selected: false,
        name: "ruivo"
    },
    {
        id: 4,
        cor: "#001C99",
        selected: false,
        name: "azul"
    }
    ]

  const eyeColors =  [
    {
        id: 0,
        cor: "red",
        selected: true,
        name: "red"
    },
    {
        id: 1,
        cor: "#9595b0",
        selected: false,
        name: "gray"
    },
    {
        id: 2,
        cor: "#059500",
        selected: false,
        name: "green"
    },
    {
        id: 3,
        cor: "#422a28",
        selected: false,
        name: "brown"
    },
    {
        id: 4,
        cor: "#0874d1",
        selected: false,
        name: "blue"
    }
    ]

  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.BackAction color="white" onPress={() => {}} />
        <Appbar.Content color={colors.surface} title="Olá, Joe Doe" />
      </Appbar>
      
      <View style={{marginBottom: 128,alignItems: 'center'}}>
        <View style={{backgroundColor: 'white',width: 192,height:350}}>
            <Image style={{width: 192,resizeMode: 'stretch',height:408}}
                        source={require('../../assets/character/Skin/Skin_branca.png')}
                        />
            <Image style={{width: 192,resizeMode: 'stretch',height:12,position: "absolute",left:0,top:126}}
                        source={pathsRequires.eye[eyeColor]}
                        />
            <Image style={{width: 192,resizeMode: 'stretch',height:408,position: "absolute"}}
                        source={require('../../assets/character/Default/default_clothes.png')}
                        />
            <Image style={{width: 192,resizeMode: 'stretch',height:186,position: "absolute"}}
                        source={pathsRequires.hair[genre][hairColor][idColor]}
                        />
        </View>
        <Button onClick={()=>{
          if (genre == 'male')
            setGenre('female');
          else
            setGenre('male');
        }}>Mudar genero</Button>
        <ColorChoose listItems={eyeColors} state={[eyeColor,setEyeColor]}/>
        <ColorChoose listItems={hairColors} state={[hairColor,setHairColor]}/>
        <VisualChoose listItems={hairs} state={[idColor,setIdColor]}/>
      </View>
      
    </SafeAreaView>
  );
};

export default CustomerPage;
