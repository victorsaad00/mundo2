import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme, View } from "react-native";
import Button from "./components/Button/Button_app";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { Divider } from "react-native-paper";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{alignItems:'center',justifyContent: 'center',}}>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <Button  onClick={()=> console.log('Botão 1')}>Teste</Button>
        <Divider style={{height:15}}></Divider>
        <Button style_button="second_color_app" onClick={()=> console.log('Botão 2')}>Teste</Button>
        <Divider style={{height:15}}></Divider>
        <Button style_button="mission_main_color_app" onClick={()=> console.log('Botão 3')}>Teste</Button>
        <Divider style={{height:15}}></Divider>
        <Button style_button="mission_second_color_app" onClick={()=> console.log('Botão 4')}>x2</Button>
        <Divider style={{height:15}}></Divider>
        <ProgressBar progress={0.5}>5/10 concluída</ProgressBar>

        
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
