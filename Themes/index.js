import { DefaultTheme, configureFonts } from "react-native-paper";
import Colors from "../constants/Colors_app";
import Button_theme from "./stylesComponents/Button";
import Input_theme from "./stylesComponents/TextInput";
import Text_theme from './stylesComponents/Text';
import ProgressB_theme from './stylesComponents/ProgressBar';
import mundoCard_theme from './stylesComponents/CardMundo';
import levelCompleteAlert_theme from './stylesComponents/AlertCompletCard';
import alert_theme from './stylesComponents/Alert'
import colorChoose_theme from './stylesComponents/ColorChoose'

const fontConfig = {
  default: {
    regular: {
      fontFamily: "VCR_MONO",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "VCR_MONO",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "VCR_MONO",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "VCR_MONO",
      fontWeight: "normal",
    },
  },
};

const travelersTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  dark: false,
  roundness: 10,
  colors: {
    primary: Colors.primary[10],
    accent: Colors.primary[20],
    second: Colors.variant[10],
    second_light: Colors.variant[20],
    flat: "#FFF",
    black: "#202020",
    background: "#FFF",
    surface: "#fff",
    text: "#145DA0",
    error: "#B71F0E",
    disabled: "#BEC6C6",
    placeholder: "#1481BA",
    backdrop: "#707070",
  },
  button: Button_theme,
  input: Input_theme,
  text: Text_theme,
  progressBar: ProgressB_theme,
  cardMundo: mundoCard_theme,
  alertLevelComplete: levelCompleteAlert_theme,
  alert: alert_theme,
  colorchoose: colorChoose_theme,

  fonts: configureFonts(fontConfig),
};
// VCR_OSD_MONO_1
export default travelersTheme;
