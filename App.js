import "react-native-gesture-handler";

import TravelersTheme from "./Themes";

import { View } from './components/Themed';

import { Provider as PaperProvider } from "react-native-paper";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import LoginPage from "./pages/LoginPage/LoginPage";
import Button from "./Themes/Components/Button/Button"
import CardMundo from "./components/CardMundo/CardMundo";
import AlertLevelComplete from "./components/AlertLevelComplete";
import BottomHomePage from "./pages/BottomHomePage";
import DropDown from "./Themes/Components/DropDown";
import Text from "./Themes/Components/Text/Text";
import ColorChoose from "./components/ColorChoose";
import ProgressBar from "./components/ProgressBar/ProgressBar";


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
    description: '\t\t\t\t\t\t\t\tCom estas amostras que você coletou finalmente poderemos criar o Defender. Não seria justo se eu não premiasse com um pouco que eu tenho, você coletou grandes amostras.',
    experience: "8 xp",
    reward: "5 moedas",
    lock: ["Desbloqueado diário do viajante dia 9.",'Desbloqueado missão “Liberte a ilha”.','Criado o dispositivo Defender.']
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={TravelersTheme}>
        {/* <View
          style={{
            height: 500 ,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            desactived={true}
            onClick={() => {console.log("teste")}}
          >
            Entrar
          </Button>
          
        </View> */}
        {/* <LoginPage/> */}
        <BottomHomePage />
        

      </PaperProvider>
    );
  }
}

{
  /* <View
  style={{
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <TravelersIcon />
  <Input label="ARROZ" variant="outlined" size="small" />
  <Divider style={{ height: 25 }} />

  <Input label="ARROZ" variant="outlined" />
  <Divider style={{ height: 25 }} />

  <Button
    mode="primary"
    onClick={() => {
      console.log("Primary");
    }}
  >
    ENTRAR
  </Button>
  <Divider style={{ height: 25 }} />
  <Button
    mode="flat"
    size="small"
    onClick={() => {
      console.log("Second");
    }}
  >
    Entrar sem logar
  </Button>
</View> */
}
