import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme } from "react-native-paper";
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import { View } from "../../components/Themed";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

const UpdateUserInformation = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const { colors } = useTheme();

  const hideDialog = () => setVisible(false);

  const setEmptyField = () => {
    setEmail("");
    setName("");
    setPassword("");
    setConfirmPassword("");
    setIncorrectPassword(false);
  };

  const updateInformation = async () => {
    try {
      let user = {
        name: "",
        password: "",
        usedItems: undefined,
      };

      if (password !== confirmPassword) {
        setIncorrectPassword(true);
        return;
      }

      const authUser = JSON.parse(await AsyncStorage.getItem("@user"));

      user = {
        email: authUser.email,
        name: name,
        password: password,
      };

      await axios.post("http://10.0.2.2:3000/updateUser", user);

      //console.log(response.data);
      setEmptyField();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.BackAction
          color={colors.surface}
          onPress={() => navigation.goBack("Login")}
        />
        <Appbar.Content color={colors.surface} title="Alterar informações" />
      </Appbar>
      <View
        justifyContent="space-around"
        alignItems="center"
        style={{ height: 600 }}
      >
        <Input
          label="Nome"
          variant="outlined"
          size="expansive"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          label="Senha"
          secureTextEntry={true}
          variant="outlined"
          size="expansive"
          value={password}
          right={<TextInput.Icon name="eye-off-outline" />}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          label="Confirmar Senha"
          secureTextEntry={true}
          variant="outlined"
          size="expansive"
          value={confirmPassword}
          errpr={incorrectPassword}
          right={<TextInput.Icon name="eye-off-outline" />}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <Button onClick={updateInformation}>Confirmar</Button>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUserInformation;
