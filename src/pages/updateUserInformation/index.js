import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme } from "react-native-paper";
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import { View } from "../../components/Themed";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ActivityIndicator } from 'react-native'
import Alert from "@root/components/Alert"

import axios from "axios";

const UpdateUserInformation = () => {
  const navigation = useNavigation();


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const [userConfig, setUserConfig] = useState({})

  const [loadingData, setLoadingData] = useState(true)

  const { colors } = useTheme();

  const [visible, setVisible] = useState(false);

  const [titleAlert, setTitleAlert] = useState("");
  const [descriptionAlert, setDescriptionAlert] = useState("");

  const [auth,setAuth] = useState(false)


  const setEmptyField = () => {
    setPassword("");
    setConfirmPassword("");
    setIncorrectPassword(false);
  };


  const getUserInfo = async () => {
    const raw_data = await AsyncStorage.getItem('@userInfo')
    const user = JSON.parse(raw_data)
    const getAuth = await AsyncStorage.getItem('@auth')

    setAuth(getAuth === "Autenticado")
    setUserConfig(user)
    setName(user.name)
    setLoadingData(false)
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  const updateName = async () => {
    try {

      let user = {};

      user = {
        email: userConfig.email,
        name: name,
      };

      let authUser = { ...userConfig }
      authUser.name = name;
      // console.log(authUser)

      await AsyncStorage.setItem('@userInfo', JSON.stringify(authUser))


      await axios.post("http://10.0.2.2:3000/updateUser", user)

      setTitleAlert("Nome atualizado!")
      setDescriptionAlert("Seu nome foi atualizado com sucesso")

      setVisible(true);

      //console.log(response.data);
      setEmptyField();
    } catch (error) {
      console.log(error)
      console.log(error.response);
    }
  }

  const updatePassword = async () => {
    try {
      let user = {};

      if (password !== confirmPassword || password === "") {
        setIncorrectPassword(true);
        return;
      }

      const raw_data = await AsyncStorage.getItem("@userInfo");
      let authUser = JSON.parse(raw_data)

      user = {
        email: authUser.email,
        password: password,
      };

      await axios.post("http://10.0.2.2:3000/updateUser", user)

      setTitleAlert("Senha atualizada!")
      setDescriptionAlert("Sua senha foi atualizada com sucesso!")

      setVisible(true);

      //console.log(response.data);
      setEmptyField();
    } catch (error) {
      console.log(error.response);
    }
  };

  const LoadComponent = () => {
    if (auth){
      return (
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
          <Button onClick={updateName}>Mudar nome</Button>
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
  
          <Button onClick={updatePassword}>Confirmar</Button>
        </View>
      )
    } else{
      return (
        <View style={{alignItems:'center',justifyContent:'center',height:"90%"}}>
          <Text size="small" variant="black" style={{opacity:0.5}}>
            Usuário não Autenticado
          </Text>
        </View>
      )
    }
    
  }

  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.Content color={colors.surface} title="Alterar informações" />
      </Appbar>
      <Alert visible={visible} hidedialog={() => { setVisible(false) }} infoCard={{ title: titleAlert, description: descriptionAlert }} />
      {loadingData ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <ActivityIndicator size="large" color={colors.black} />
        </View>
      ) : <LoadComponent />}

    </SafeAreaView>
  );
};

export default UpdateUserInformation;
