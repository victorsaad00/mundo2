import "react-native-gesture-handler";

import TravelersTheme from "./Themes";

import { Provider as PaperProvider } from "react-native-paper";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={TravelersTheme}>
        {/* <LoginPage /> */}
        <RegisterPage />
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
