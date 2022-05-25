import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Appbar,
  TextInput,
  useTheme,
  Divider,
  BottomNavigation,
} from "react-native-paper";
import { FlatList, ActivityIndicator } from "react-native";

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
  const [worldInfo, setWorldInfo] = useState([]);

  const navigation = useNavigation();

  const setconfig = async () => {
    try {
      // await AsyncStorage.setItem('@lastWorld', JSON.stringify(1))
      // await AsyncStorage.setItem('@lastLevel', JSON.stringify(1))

      const world = await AsyncStorage.getItem("@lastWorld");
      const level = await AsyncStorage.getItem("@lastLevel");

      setWorldInfo(
        jsonMundos.map((item) => {
          if (item.id < world) {
            item.status = true;
            item.progress = [10, 10];
          } else if (item.id === parseInt(world)) {
            item.status = true;
            item.progress = [level, 10];
          }
          return item;
        })
      );

      setRetrieve(true);
      console.log(worldInfo);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!retrieve) {
      setconfig();
    }
  }, [retrieve]);

  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.Content color={colors.surface} title="Olá, Joe Doe" />
        <Appbar.Action
          color={colors.surface}
          icon="brush"
          onPress={() => navigation.push("Visual")}
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
      <View style={{ marginBottom: 128 }}>
        <FlatList
          data={jsonMundos}
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
        {/* <Divider style={{height:100}}/> */}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
