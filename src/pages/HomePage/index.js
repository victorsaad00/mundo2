import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Appbar,
  TextInput,
  useTheme,
  Divider,
  BottomNavigation,
} from "react-native-paper";
import { FlatList } from "react-native";
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";
import CardMundo from "../../components/CardMundo/CardMundo";
import jsonMundos from "../../assets/CardMundo/CardMundo.json";
import { useNavigation } from "@react-navigation/native";

const HomePage = (props) => {
  const { colors } = useTheme();

  const navigation = useNavigation();

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
