import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme, View } from "react-native";
import {ButtonApp,SecondButtonApp} from "./components/Button/Button_app";
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
        <ButtonApp onClick={()=> console.log('Piu')}>Teste</ButtonApp>
        <Divider style={{height:15}}></Divider>
        <SecondButtonApp>Second Button</SecondButtonApp>
        
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
