import { Button as ButtonApp, useTheme } from "react-native-paper";

const Button = ({size,...props}) => {
  const { button, colors } = useTheme();

  const text_button = props.children.toString();
  const function_button = props.onClick;

  // Propriedade para desativar o button
  const desactived = props.desactived == null ? false : props.desactived;

  // Modo do butão, mais informações vai no Theme do butão que tem todos os estilos existentes
  /*Lembrando que há dois visuais para o botão: o visual do botão e do texto do botão por isso
    existe no component butão o style={button[mode]} e labelStyle={button[mode+"Text"]}*/

  const mode = props.mode == null ? "primary" : props.mode;
  size = size == undefined ? "expansive" : size;


  return (
    <ButtonApp
      disabled={desactived}
      mode="contained"
      onPress={function_button}
      labelStyle={[button[mode + "Text"], {fontSize:  button[size].fontSize}]}
      style={[button[mode], button[size], { backgroundColor: colors[mode] }]}
      {...props}
    >
      {text_button}
    </ButtonApp>
  );
};

export default Button;
