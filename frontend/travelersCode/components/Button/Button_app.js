import { Text, View } from "../Themed";
import {  TouchableOpacity, StyleSheet } from "react-native";
import {main_orange_color_app} from "../../constants/Colors_app"

export function ButtonApp(props){
    const text_button = props.children.toString();
    const function_button = props.onClick;

    return ( 
        <TouchableOpacity onPress={function_button} style={styles.size_button} >
            <Text style={styles.text_button}>
                {text_button}
            </Text>
        </TouchableOpacity>
    );
}

export function SecondButtonApp(props){
    const text_button = props.children.toString();
    const function_button = props.onClick;

    return ( 
        <TouchableOpacity onPress={function_button} style={styles.sizeSecondButton} >
            <Text style={styles.textSecondText}>
                {text_button}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    size_button: {
        height: 52,
        width: '90%',
        backgroundColor: main_orange_color_app,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:10},
    text_button: {
        color: "#fff",
        fontSize: 32,
    },
    sizeSecondButton: {
        height: 35,
        width: 150,
        backgroundColor: main_orange_color_app,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100},
    textSecondText: {
        color: "#fff",
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
  });