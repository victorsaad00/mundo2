import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
    progress: [5,10],
    description: 'Continue junto com Fisher para ajudá-lo a criar o dispositivo Defender.',
    status: true,
  };
  
  const card_2 = {
    world: 'Mundo ll',
    name_world: 'Penhasco de Turing',
    status: false,
  };

  //console.log(card_1)

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{alignItems:'center',justifyContent: 'center',}}>
        {/* <Navigation colorScheme={colorScheme} /> */}
        
        <CardMundo infoCard={card_1} onClick={()=>{console.log("PIU")}} />
        <Divider style={{height:30}}/>
        <CardMundo infoCard={card_2} onClick={()=>{console.log("PIU")}} />
        
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
