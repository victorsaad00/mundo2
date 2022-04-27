import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme, Divider, BottomNavigation } from "react-native-paper";
import Input from "../../Themes/Components/Input/Input";
import Button from "../../Themes/Components/Button/Button";
import Text from "../../Themes/Components/Text/Text";
import { View } from "../../components/Themed";
import Alert from "../../components/Alert";

const HomePage = (props) => {
  const { colors } = useTheme();

    
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

  return (
    <SafeAreaView>
      <Appbar >
        <Appbar.Content color={colors.surface} title="Olá, Joe Doe" />
      </Appbar>
      
      
    </SafeAreaView>
  );
};

export default HomePage;
