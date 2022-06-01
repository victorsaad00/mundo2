import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider, BottomNavigation, IconButton } from "react-native-paper";
import { FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
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
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import axios from "axios";


const StorePage = (props) => {
  const [name, setName] = useState("...")
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const [availableItems, setAvailableItems] = useState({});

  const { colors } = useTheme();

  const [userInfo, setUserInfo] = useState(DefaultInfo);
  const [retrieve, setRetrieve] = useState(false);

  const [eyeColor, setEyeColor] = useState("blue");
  const [genre, setGenre] = useState("male");
  const [hairColor, setHairColor] = useState("brown");
  const [head, setHead] = useState("2");
  const [skinColor, setSkinColor] = useState("branca");
  const [armor, setArmor] = useState("1");
  const [shoes, setShoes] = useState("1");

  const [titleAlert,setTitleAlert] = useState("");
  const [descriptionAlert,setDescriptionAlert] = useState("");

  const [gold,setGold] = useState(0)

  const priceItems = {
    head: {
      '1': 20,
      '2': 30,
      '3': 50,
      '4': 70,
      '5': 7,
    },
    armor: {
      '1': 20,
      '2': 30,
      '3': 50,
      '4': 70,
      '5': 7,
    },
    shoes: {
      '1': 20,
      '2': 30,
      '3': 50,
      '4': 70,
      '5': 7,
    },
  }

  const getData = async () => {
    try {

      const raw_data = await AsyncStorage.getItem('@userInfo')
      const user = JSON.parse(raw_data)

      setName(user.name)
      setUserInfo(user.user_styles)
      setAvailableItems(user.items.skins)
      setGold(user.items.cash)

      setRetrieve(true)

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!retrieve) {
      getData()

    }
    setEyeColor(userInfo.eyeColor);
    setGenre(userInfo.genre);
    setHairColor(userInfo.hairColor);
    setHead(userInfo.head);
    setSkinColor(userInfo.skinColor);
    setArmor(userInfo.armor);
    setShoes(userInfo.shoes);
  }, [retrieve])

  const [hairs, setHairs] = useState([]);

  useEffect(() => {
    if (retrieve) {
      const objectPathHair = Object.entries(pathsRequires.hair[genre][hairColor]);
      const filteredPathHair = objectPathHair.filter((item) => { return !availableItems.head.includes(item[0]) })

      setHairs(filteredPathHair.map((item) => {
        if (retrieve) {
          if (item[0] === head) {
            return {
              id: item[0],
              selected: true,
              pathHair: item[1]
            }
          }
          else {
            return {
              id: item[0],
              selected: false,
              pathHair: item[1]
            }
          }
        }
      }))
    }
  }, [hairColor, genre, retrieve]);

  const [armors, setArmors] = useState([]);

  useEffect(() => {
    if (retrieve) {
      const objectPathHair = Object.entries(pathsRequires.armor[genre]);
      const filteredPathHair = objectPathHair.filter((item) => {
        return !availableItems.armor.includes(item[0])
      })

      setArmors(filteredPathHair.map((item) => {
        if (item[0] === armor) {
          return {
            id: item[0],
            selected: true,
            pathHair: item[1]
          }
        }
        else {
          return {
            id: item[0],
            selected: false,
            pathHair: item[1]
          }
        }

      }))
    }
  }, [genre, retrieve]);

  const [ListShoes, setListShoes] = useState([]);

  useEffect(() => {
    if (retrieve) {
      const objectPathHair = Object.entries(pathsRequires.shoes);

      const filteredPathHair = objectPathHair.filter((item) => { return !availableItems.shoes.includes(item[0]) })

      setListShoes(filteredPathHair.map((item) => {
        if (item[0] === shoes) {
          return {
            id: item[0],
            selected: true,
            pathHair: item[1].display
          }
        }
        else {
          return {
            id: item[0],
            selected: false,
            pathHair: item[1].display
          }
        }

      }))
    }

  }, [genre, retrieve]);

  useEffect(() => {
    getTotalPrice()
  }, [armor, head, shoes])

  const getTotalPrice = () => {
    const armorPrice = armor === userInfo.armor ? 0 : priceItems.armor[armor]
    const headPrice = head === userInfo.head ? 0 : priceItems.head[head]
    const shoesPrice = shoes === userInfo.shoes ? 0 : priceItems.shoes[shoes]
    setTotalPrice(armorPrice + headPrice + shoesPrice)
  }

  const buyVisual = async () => {

    if ( head !== userInfo.head || armor !== userInfo.armor || shoes !== userInfo.shoes) {
      const user_styles = {
        eyeColor,
        genre,
        hairColor,
        head,
        skinColor,
        armor,
        shoes
      }
      // Sem saldo
      if (totalPrice > gold){
        setTitleAlert("Sem moedas suficiente!")
        setDescriptionAlert("Faça mais desafios ou compre GoldCoins")
        setVisible(true)
      } else{
        try {
          const raw_data = await AsyncStorage.getItem('@userInfo')
          let user = JSON.parse(raw_data)
  
          // Não tem a cabeça
          if ( !user.items.skins.head.includes(user_styles.head)){
            user.items.skins.head.push(user_styles.head)
          }
  
          // Não tem a armadura
          if ( !user.items.skins.armor.includes(user_styles.armor)){
            user.items.skins.armor.push(user_styles.armor)
          }
  
          // Não tem a bota
          if ( !user.items.skins.shoes.includes(user_styles.shoes)){
            user.items.skins.shoes.push(user_styles.shoes)
          }
  
          // desconta o valor
          user.items.cash -= totalPrice
  
          await AsyncStorage.setItem('@userInfo', JSON.stringify(user))
  
          const auth = await AsyncStorage.getItem('@auth')
          if (auth === "Autenticado") {
            await axios.post("http://10.0.2.2:3000/updateUser", user)
          }
  
          setTitleAlert("Compra feita com sucesso!")
          setDescriptionAlert("Você ficará mais elegante com esses visuais viajante.")
          setVisible(true)
        } catch (e) {
          console.log(e);
        }
      }

      

    }
  }

  const [totalPrice, setTotalPrice] = useState(0);

  

  return (
    <SafeAreaView>
      <Alert visible={visible} hidedialog={() => { setVisible(false) }} infoCard={{ title: titleAlert, description: descriptionAlert }} />

      <Appbar>
        <Appbar.BackAction color="white" onPress={() => navigation.goBack()} />
        <Appbar.Content color={colors.surface} title={`Olá, ${name}`} />
        <Button size="small" mode='primary' onPress={
            () => {
              setArmor(userInfo.armor)
              setHead(userInfo.head)
              setShoes(userInfo.shoes)
            }
          }>Reset Visual
          </Button>
        {/* <Appbar.Action color={colors.surface} icon="check" onPress={saveVisual} /> */}
      </Appbar>

      <View style={{ marginBottom: 128, alignItems: 'center' }}>
        <View style={{alignItems:'center'}}>
          <View style={{ backgroundColor: 'white', width: 192, height: 350 }}>
            
            <Image style={{ width: 192, resizeMode: 'stretch', height: 408 }}
              source={pathsRequires.skin[genre][skinColor]}
            />
            <Image style={{ width: 192, resizeMode: 'stretch', height: 12, position: "absolute", left: 0, top: 126 }}
              source={pathsRequires.eye[eyeColor]}
            />
            <Image style={{ width: 192, resizeMode: 'stretch', height: 408, position: "absolute" }}
              source={pathsRequires.armor[genre][armor]}
            />
            <Image style={{ width: 192, resizeMode: 'stretch', height: 186, position: "absolute" }}
              source={pathsRequires.hair[genre][hairColor][head]}
            />
            <Image style={{ width: 192, resizeMode: 'stretch', height: 408, position: "absolute" }}
              source={pathsRequires.shoes[shoes].visual}
            />

          </View>
          <View style={{position:"absolute",flexDirection:'row',width:"100%",paddingVertical:8,justifyContent:"flex-start"}}>
            <Icon name="coins" size={20} color={"orange"} style={{opacity:0.75,paddingHorizontal:8}} />
            <Text size="small">
              {gold} moedas disponíveis
            </Text>
          </View>
        </View>
        <Text style={{ position: 'absolute', top: 315, paddingVertical: 4 }}>{totalPrice} moedas</Text>

        <View style={{ height: 350 }}>
          <View style={{alignItems:'center',paddingVertical:8}}>
            <Button size="small" mode='primary' onPress={
              () => {
                if (totalPrice > 0){
                  buyVisual()
                }
              }
            }>Comprar
            </Button>
          </View>
          <View style={{
            backgroundColor: colors.primary, height: 60, justifyContent: "center",
            marginVertical: 16
          }}>
            <Text size="medium" style={{ color: colors.background, paddingLeft: 16 }}>Estilos personagem</Text>
          </View>
          <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <View style={{ borderBottomWidth: 3, borderBottomColor: colors.disabled, paddingVertical: 16 }}>
              <Text variant='second' size="medium" style={{ padding: 16 }}>Gênero personagem</Text>
              <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                <IconButton style={{ backgroundColor: genre == "male" ? colors.primary : colors.accent }} color={colors.background} icon="gender-male" size={40} onPress={() => setGenre('male')} />
                <IconButton style={{ backgroundColor: genre == "female" ? colors.primary : colors.accent }} color={colors.background} icon="gender-female" size={40} onPress={() => setGenre('female')} />
              </View>
            </View>

            <View style={{ borderBottomWidth: 3, borderBottomColor: colors.disabled, paddingVertical: 16, width: "100%" }}>
              <Text variant='second' size="medium" style={{ padding: 16 }}>Cabelo</Text>
              <VisualChoose listItems={hairs} state={[head, setHead]} />
            </View>

            <View style={{ borderBottomWidth: 3, borderBottomColor: colors.disabled, paddingVertical: 16, width: "100%" }}>
              <Text variant='second' size="medium" style={{ padding: 16 }}>Vestimento</Text>
              <VisualChoose listItems={armors} state={[armor, setArmor]} />
            </View>

            <View style={{ borderBottomWidth: 3, borderBottomColor: colors.disabled, paddingVertical: 16, width: "100%" }}>
              <Text variant='second' size="medium" style={{ padding: 16 }}>Sapatos</Text>
              <VisualChoose listItems={ListShoes} state={[shoes, setShoes]} />
            </View>

            <Divider style={{ height: 16 }} />

            <Divider style={{ height: 16 }} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StorePage;
