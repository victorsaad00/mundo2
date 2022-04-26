import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput } from "react-native-paper";
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import { View } from "../../components/Themed";

const RegisterPage = (props) => {
  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.BackAction />
        <Appbar.Content title="Register Page" />
      </Appbar>
      <View justifyContent="center" alignItems="center">
        <Input label="Nick" />
        <Input label="E-mail" keyboardType="email-address" />
        <Input label="Senhas" />
        <Input label="Nome" />
        <Input
          label="Senha"
          secureTextEntry={true}
          right={<TextInput.Icon name="eye-off-outline" />}
        />
        <Input
          label="Confirmar Senha"
          secureTextEntry={true}
          right={<TextInput.Icon name="eye-off-outline" />}
        />
        <Button
          onClick={() => {
            console.log("AI AI AI");
          }}
        >
          Registrar-se
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
