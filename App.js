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

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={TravelersTheme}>
        
        {/* <View
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
        </View> */}
        <LoginPage/>
      </PaperProvider>
    );
  }
}
