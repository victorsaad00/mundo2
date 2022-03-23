import { Text, View } from "../Themed";
import { Button as ButtonApp } from 'react-native-paper';

import styles from "./styles_button_app.js"

export default function Button(props){

    const ButtonStyles = {
        "main_color_app": {
            "text": styles.text_button,
            "button": styles.size_button
        },
        "second_color_app": {
            "text": styles.textSecondText,
            "button": styles.sizeSecondButton
        },
        "mission_main_color_app": {
            "text": styles.missionMainText,
            "button": styles.missionMainButton
        },
        "mission_second_color_app": {
            "text": styles.missionSecondText,
            "button": styles.missionSecondButton
        },

    }

    const text_button = props.children.toString();
    const function_button = props.onClick;

    // Pegar o valor 
    const style_button = props.style_button == null | 
        !(Object.keys(ButtonStyles).includes(props.style_button))  ? "main_color_app" : props.style_button;


    // Selecionar o estilo do Butão e do texto
    const styles_to_apply = ButtonStyles[style_button]

    return ( 
        <ButtonApp mode="contained" onPress={function_button} style={styles_to_apply.button} >
            <Text style={styles_to_apply.text}>
                {text_button}
            </Text>
        </ButtonApp>
    );
}

