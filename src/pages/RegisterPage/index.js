import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme } from "react-native-paper";
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";
import { useNavigation } from "@react-navigation/native";

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

  const levelcard = {
    mapName: "Entrada da doca",
    description:
      "\t\t\t\t\t\t\t\tCom estas amostras que você coletou finalmente poderemos criar o Defender. Não seria justo se eu não premiasse com um pouco que eu tenho, você coletou grandes amostras.",
    experience: "8 xp",
    reward: "5 moedas",
    lock: [
      "Desbloqueado diário do viajante dia 9.",
      "Desbloqueado missão “Liberte a ilha”.",
      "Criado o dispositivo Defender.",
    ],
  };

  const alertCard = {
    title: "Visual alterado",
    description:
      "\t\t\t\t\tTenho que concordar que esse visual está melhor que o anterior.",
  };

  const hideDialog = () => setVisible(false);

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

      const usedItems = {
        head: "1",
        armor: "1",
        eyeColor: "brown",
        feet: "1",
        hairColor: "brown",
        skinColor: "brown",
      };

      const items = {
        cash: 0,
        skins: {
          head: [],
          armor: [],
          feet: [],
        },
      };

      console.log(email);
      if (email === "") {
        console.log("EMAIL VAZIO CARAIO");
        return;
      }

      if (name === "") {
        console.log("NOME VAZIO PORRA");

        return;
      }

      if (password === "") {
        console.log("SENHA CARAI");
        return;
      }

      if (password !== confirmPassword) {
        console.log("ARROCHOU A SENHA ERRADA");

        return;
      }

      user = {
        name: name,
        email: email,
        password: password,
        usedItems: usedItems,
        items: items,
      };
      //return user;
      //sendUser(user);
      //console.log(user);
      const response = await axios.post("http://10.0.2.2:3000/register", user);

      console.log(response.data);
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

        <Alert infoCard={alertCard} hidedialog={hideDialog} visible={visible} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
