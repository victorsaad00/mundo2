import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme } from "react-native-paper";
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

const RegisterPage = (props) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");

  const { colors } = useTheme();

  const showDialog = () => setVisible(true);


  const userAlertInfo = {
    title: "Usuário cadastrado",
    description:
      "Usuário criado com sucesso",
  };

  const hideDialog = () => {
    setVisible(false)
    navigation.goBack()
  };

  const setEmptyField = () => {
    setEmail("");
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  const register = async () => {
    try {
      let user = {
        name: "",
        email: "",
        password: "",
        usedItems: undefined,
      };

      console.log(email);
      if (email === "") {
        console.log("EMAIL VAZIO ");
        return;
      }

      if (name === "") {
        console.log("NOME VAZIO");

        return;
      }

      if (password === "") {
        console.log("SENHA VAZIA");
        return;
      }

      if (password !== confirmPassword) {
        console.log("CONFIRMAÇÃO DA SENHA ERRADA");

        return;
      }

      await AsyncStorage.setItem("@firstTime", "yes");

      user = {
        name: name,
        email: email,
        password: password,
        fase: 0,
        world: 1,
        experience: 0,
        items: {
          skins:{
            head: ["1"],
            armor: ["1"],
            shoes: ["1"],
            weapon: [],
          },
          cash: 0
        },
        user_styles:{
          eyeColor: "blue",
          genre: 'male',
          hairColor: 'brown',
          head: '1',
          skinColor: 'branca',
          armor: "1",
          shoes: "1"
        }
      };
      
      const response = await axios.post("http://10.0.2.2:3000/register", user);

      setEmptyField();
      setVisible(true)
    } catch (error) {
      console.log(error)
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
        <Appbar.Content color={colors.surface} title="Register Page" />
      </Appbar>
      <View
        justifyContent="space-around"
        alignItems="center"
        style={{ height: 600 }}
      >
        <Input
          label="E-mail"
          keyboardType="email-address"
          variant="outlined"
          size="expansive"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

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
          right={<TextInput.Icon name="eye-off-outline" />}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <Button onClick={register}>Registrar-se</Button>

        <Alert infoCard={userAlertInfo} hidedialog={hideDialog} visible={visible} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
