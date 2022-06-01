import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Appbar,
  TextInput,
  useTheme,
  Divider,
  BottomNavigation,
  IconButton
} from "react-native-paper";
import {FlatList, ActivityIndicator,RefreshControl } from 'react-native'


import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";

import CardMundo from "../../components/CardMundo/CardMundo";
import jsonMundos from "../../assets/CardMundo/CardMundo.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

const HomePage = (props) => {
  const { colors } = useTheme();

  const [retrieve, setRetrieve] = useState(false);

  const [worldInfo,setWorldInfo] = useState([]);

  const [name,setName] = useState("")
 

  const navigation = useNavigation();

  const setconfig = async () => {
    try {
      // await AsyncStorage.setItem('@lastWorld', JSON.stringify(1))
      // await AsyncStorage.setItem('@lastLevel', JSON.stringify(1))

      const raw_data = await AsyncStorage.getItem('@userInfo')
      let {name, world,fase} = JSON.parse(raw_data)

      setName(name)
      setWorldInfo(jsonMundos.map(item => {
        if (item.id < world){
          item.status = true
          item.progress = [10, 10];
        } else if (item.id === parseInt(world)) {
          item.status = true
          item.progress = [fase, 10];
        }
        return item
      }))

      setRetrieve(true)


    } catch (e) {
      console.log(e);
    }
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false)
      setRetrieve(false)
    });
  }, []);

  useEffect(() => {
    if (!retrieve) {
      setconfig();
    }
  }, [retrieve]);

  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.Content color={colors.surface} title={`Olá, ${name}`} />
        <Appbar.Action
          color={colors.surface}
          icon="brush"
          onPress={() => navigation.push("Visual")}
        />
        <Appbar.Action
          color={colors.surface}
          icon="cart"
          onPress={() => navigation.push("StorePage")}
        />
        <Appbar.Action
          color={colors.surface}
          icon="logout"
          onPress={() => navigation.navigate("Login")}
        />
      </Appbar>

      <View style={{ marginBottom: 128 }}>
        {worldInfo.length === 0 ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <ActivityIndicator size="large" color={colors.black} />
          </View>
        ) : (
          <FlatList
            data={worldInfo}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            renderItem={({ item }) => {
              return (
                <CardMundo
                  infoCard={item}
                  onClick={() => {
                    navigation.push("WorldPage", { mundo: item.id });
                  }}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        )}

        {/* <Divider style={{height:100}}/> */}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
