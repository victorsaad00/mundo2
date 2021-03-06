import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import TravelersIcon from "../../assets/Icons/TravelersIcon";
import Text from "../../Themes/Components/Text/Text";
import { View } from "react-native";
import Input from "../../Themes/Components/Input/Input";
import loginPageStyles from "./LoginPageStyles.js";
import Button from "../../Themes/Components/Button/Button";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const LoginAuthentication = async () => {
    setLoginError(false);
    setPasswordError(false);
    try {
      if (email === null || email === "") {
        setLoginError(true);
        return;
      }

      if (password === null || password === "") {
        setPasswordError(true);
        return;
      }

      const params = { email: email, password: password };
      const res = await axios.post("http://10.0.2.2:3000/login", params);
      const user = res.data;

      if (res.status != "200") {
        setLoginError(true);
        setPasswordError(true);
        return;
      } else {
        await AsyncStorage.setItem("@userInfo", JSON.stringify(user));
        await AsyncStorage.setItem("@auth", "Autenticado");

        navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={loginPageStyles.view}>
      <View style={{ paddingVertical: 16 }}>
        <Text variant="black" size="small">
          Traveler's Code
        </Text>
      </View>

      <View style={{ paddingBottom: 16 }}>
        <TravelersIcon />
      </View>
      <View style={{ paddingVertical: 32 }}>
        <Text variant="second">LOGAR</Text>
      </View>

      <Input
        label="Email"
        variant="outlined"
        size="expansive"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        error={loginError}
      />

      <Input
        label="Senha"
        variant="outlined"
        size="expansive"
        secureTextEntry={true}
        value={password}
        right={<TextInput.Icon name="eye-off-outline" />}
        onChangeText={(text) => setPassword(text)}
        error={passwordError}
      />

      <View
        style={{ paddingVertical: 16, width: "100%", alignItems: "center" }}
      >
        <Button onClick={LoginAuthentication}>Logar</Button>
      </View>
      <View style={{ paddingVertical: 8, width: "100%", alignItems: "center" }}>
        <Button
          mode="flat"
          size="medium"
          style={{ width: "100%" }}
          onClick={async () => {
            let userInfo = await AsyncStorage.getItem('@userInfo')
            // Primeria vez
            if (userInfo === null) {
              await AsyncStorage.setItem('@userInfo', JSON.stringify(
                { // Fazer visuais padroes
                  name: "Viajante",
                  fase: 0,
                  world: 1,
                  experience: 0,
                  items: {
                    skins: {
                      head: ["1"],
                      armor: ["1"],
                      shoes: ["1"],
                      weapon: [],
                    },
                    cash: 0
                  },
                  user_styles: {
                    eyeColor: "blue",
                    genre: 'male',
                    hairColor: 'brown',
                    head: '2',
                    skinColor: 'branca',
                    armor: "1",
                    shoes: "1"
                  }
                }
              )
              )
              await AsyncStorage.setItem("@firstTime", "yes");
            }
            await AsyncStorage.setItem("@auth", "");
            navigation.navigate("Home");
          }}
        >
          Entrar sem logar
        </Button>
      </View>
      {/* <View
        style={{ paddingVertical: 16, width: "100%", alignItems: "center" }}
      >
        <Button
          mode="flat"
          size="small"
          style={{ width: "100%" }}
          onClick={() => {
            console.log("Esqueceu a senha!");
          }}
        >
          Esqueceu a senha?
        </Button>
      </View> */}
      <View
        style={{ paddingVertical: 16, width: "100%", alignItems: "center" }}
      >
        <Button
          mode="flat"
          size="small"
          onClick={() => {
            navigation.push("RegisterPage");
          }}
        >
          Registrar
        </Button>
      </View>
    </View>
  );
};

export default LoginPage;
