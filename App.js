import "react-native-gesture-handler";

import TravelersTheme from "./src/Themes";

import { View } from "./src/components/Themed";

import { Provider as PaperProvider } from "react-native-paper";

import { useLoadedAssets } from "./src/hooks/useLoadedAssets";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "./src/pages/LoginPage/LoginPage";
import Button from "./src/Themes/Components/Button/Button";
import CardMundo from "./src/components/CardMundo/CardMundo";
import AlertLevelComplete from "./src/components/AlertLevelComplete";
import CustomerPage from "./src/pages/CustomerPage";
import BottomHomePage from "./src/pages/BottomHomePage";
import WorldPage from "./src/pages/WorldPage";
import DropDown from "./src/Themes/Components/DropDown";
import Text from "./src/Themes/Components/Text/Text";
import ColorChoose from "./src/components/ColorChoose";
import ProgressBar from "./src/components/ProgressBar/ProgressBar";
import Game from "./src/components/Game/Game";
import RegisterPage from "./src/pages/RegisterPage";
import AppBar from "./src/Themes/Components/AppBar/AppBar";
import UpdateUserInformation from "./src/pages/updateUserInformation";
import StorePage from "./src/pages/StorePage";

export default function App() {
  const isLoadingComplete = useLoadedAssets();

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

  const Stack = createNativeStackNavigator();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={TravelersTheme}>
        {/*<View
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'white'
          }}
        >
          
          
        </View> */}
        {/* <Game /> */}
        {/* <CustomerPage /> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Home"
              component={BottomHomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Visual"
              component={CustomerPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WorldPage"
              component={WorldPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterPage"
              component={RegisterPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Game"
              component={Game}

              name="UpdatePage"
              component={UpdateUserInformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StorePage"
              component={StorePage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <WorldPage info_mundo={card_1}/> */}
        {/* <LoginPage/> */}
        {/* <BottomHomePage /> */}
        {/* <RegisterPage /> */}
        {/* <UpdateUserInformation /> */}
      </PaperProvider>
    );
  }
}
