import "react-native-gesture-handler";

import TravelersTheme from "./Themes";

import { Provider as PaperProvider, Divider } from "react-native-paper";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import { View } from "react-native";
import Button from "./Themes/Components/Button/Button";
import Input from "./Themes/Components/Input/Input";
import Icon from "./images/icon.svg";
import TravelersIcon from "./assets/Icons/TravelersIcon";
import LoginPage from "./pages/LoginPage/LoginPage";
import CardMundo from "./components/CardMundo/CardMundo";
import CardLevelComplete from "./components/CardLevelComplete";

export default function App() {
  const isLoadingComplete = useLoadedAssets();

  const card_1 = {
    world: "Mundo l",
    name_world: "Ilha Lovelace",
    progress: [5, 10],
    description:
      "Continue junto com Fisher para ajudá-lo a criar o dispositivo Defender.",
    status: true,
  };

  const card_2 = {
    world: "Mundo ll",
    name_world: "Penhasco de Turing",
    status: false,
  };

  const levelcard ={
    mapName: "Entrada da doca",
    description: 'Com estas amostras que você coletou finalmente poderemos criar o Defender. Não seria justo se eu não premiasse com um pouco que eu tenho, você coletou grandes amostras.',
    experience: "8xp",
    reward: "5 moedas",
    lock: ["Desbloqueado diário do viajante dia 9.",'Desbloqueado missão “Liberte a ilha”.','Criado o dispositivo Defender.']
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={TravelersTheme}>
        
        <View
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <TravelersIcon /> */}
          <CardLevelComplete infoCard={levelcard} onClick={() => {console.log("Teste")}}></CardLevelComplete>
        </View>
        {/* <LoginPage/> */}
      </PaperProvider>
    );
  }
}
