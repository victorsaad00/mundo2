import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider } from "react-native-paper";
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";

const RegisterPage = (props) => {
  const [visible, setVisible] = React.useState(false);

  const { colors } = useTheme();

  const showDialog = () => setVisible(true);

  const levelcard ={
    mapName: "Entrada da doca",
    description: '\t\t\t\t\t\t\t\tCom estas amostras que você coletou finalmente poderemos criar o Defender. Não seria justo se eu não premiasse com um pouco que eu tenho, você coletou grandes amostras.',
    experience: "8 xp",
    reward: "5 moedas",
    lock: ["Desbloqueado diário do viajante dia 9.",'Desbloqueado missão “Liberte a ilha”.','Criado o dispositivo Defender.']
  }

  const alertCard ={
    title: "Visual alterado",
    description: '\t\t\t\t\tTenho que concordar que esse visual está melhor que o anterior.',
  }

  const hideDialog = () => setVisible(false);

  return (
    <SafeAreaView>
      <Appbar >
        <Appbar.BackAction color={colors.surface}/>
        <Appbar.Content color={colors.surface} title="Register Page" />
      </Appbar>
      <View justifyContent="space-around" alignItems="center" style={{height:600,}}>
        <Input label="Nick" variant="outlined" size="expansive" />
        <Input label="E-mail" keyboardType="email-address" variant="outlined" size="expansive" />
        <Input label="Senhas" variant="outlined" size="expansive" />
        <Input label="Nome" variant="outlined" size="expansive" />
        <Input
          label="Senha"
          secureTextEntry={true}
          variant="outlined" size="expansive"
          right={<TextInput.Icon name="eye-off-outline" />}
        />
        <Input
          label="Confirmar Senha"
          secureTextEntry={true}
          variant="outlined" size="expansive"
          right={<TextInput.Icon name="eye-off-outline" />}
        />
        <Button
          onClick={showDialog}
        >
          Registrar-se
        </Button>
        <Alert infoCard={alertCard} hidedialog={hideDialog} visible={visible}/>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
