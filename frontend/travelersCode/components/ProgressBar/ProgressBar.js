import { Text, View } from "../Themed";

import styles from "./StylesProgressBar.js"

export default function ProgressBar(props){

    const text_children = props.children;
    const progress = props.progress;
    //const color_progress = props.color

    // Selecionar o estilo do Butão e do texto
    //const styles_to_apply = ButtonStyles[style_button]

    return ( 
        <View style={styles.viewProgress}>
            
            <View style={[styles.actualProgress, {width: progress*250, color:"red"}]} />
                
            <Text style={styles.textProgress}>
                    {text_children}
            </Text>
        </View>
            
    );
}

