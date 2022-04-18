import "react-native-gesture-handler";

import TravelersTheme from "./Themes"

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider, Text } from 'react-native-paper';

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme, View, Image } from "react-native";
import Button from "./components/Button/Button";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import CardMundo from "./components/CardMundo/CardMundo";
import { Divider } from "react-native-paper";




export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  const card_1 = {
    world: 'Mundo l',
    name_world: 'Ilha Lovelace',
    progress: [5, 10],
    description: 'Continue junto com Fisher para ajudá-lo a criar o dispositivo Defender.',
    status: true,
  };

  const card_2 = {
    world: 'Mundo ll',
    name_world: 'Penhasco de Turing',
    status: false,
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={TravelersTheme}>

        <View style={{height: "100%",display: 'flex',alignItems:"center",justifyContent:"center"}}>

          <Button mode="primary" onClick={()=>{console.log("Primary")}}>Primary</Button>
          <Divider style={{height:25}} />
          <Button mode="second" onClick={()=>{console.log("Second")}}>Second!</Button>
        </View>
        

      </PaperProvider>

    );
  }
}
