import { Button as ButtonApp, useTheme,Dialog, Portal } from "react-native-paper";
import * as React from "react";
import { View } from "../Themed";
import {FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Text from "../../Themes/Components/Text/Text";


const ColorChoose = ({size,...props}) => {
    const {  colors,colorchoose } = useTheme();
    // const cores = [
    //     {
    //         id: 0,
    //         cor: "#694C2F",
    //         selected: false,
    //     },
    //     {
    //         id: 1,
    //         cor: "#71252B",
    //         selected: false,
    //     },
    //     {
    //         id: 2,
    //         cor: "#254571",
    //         selected: false,
    //     },
    //     {
    //         id: 3,
    //         cor: "#368610",
    //         selected: false,
    //     },
    //     {
    //         id: 4,
    //         cor: "red",
    //         selected: false,
    //     },
    //     {
    //         id: 5,
    //         cor: "red",
    //         selected: false,
    //     },
    //     {
    //         id: 6,
    //         cor: "red",
    //         selected: false,
    //     },
    //     {
    //         id: 7,
    //         cor: "red",
    //         selected: false,
    //     },
    //     {
    //         id: 8,
    //         cor: "red",
    //         selected: false,
    //     },
    // ]
    const [cores,setCores] = React.useState(props.listItems);
    const [cor,stateCor] = props.state;

    const handleSelection = (id) => {
        const beforeIndexCor = cores.findIndex((item) => item.selected == true);
        const indexCor = cores.findIndex((item) => item.id == id);
        
        var valueBeforeCor = cores[beforeIndexCor];
        var valueCor = cores[indexCor];

        valueBeforeCor.selected = false;
        valueCor.selected = true;

        var copyCores = [...cores]
        copyCores[beforeIndexCor] = valueBeforeCor;
        copyCores[indexCor] = valueCor

        setCores(copyCores);
        stateCor(valueCor.name);
     
     }
    
    const ItemColor = ({ item  }) => {
        const color_border = item.selected ?  `rgba(224,105,0,0.75)` : `rgba(241,241,241,0.9)`;
        return (
        <TouchableOpacity onPress={() => handleSelection(item.id)} style={{borderRadius:20}}>
            <View style={{
                backgroundColor: item.cor, 
                width: 50, 
                height: 50,
                marginHorizontal: 16,
                borderRadius:30,
                borderWidth:10,
                borderColor: color_border
                }}>
            
            </View>
        </TouchableOpacity>
        );}
    
    return (
        <View style={[colorchoose.viewStyle,{backgroundColor:colors.primary}]} >
            <Icon name="left" size={30} color={colors.black} style={{opacity:0.5}}/>
            <FlatList 
                data={cores}
                style={{height:50,flexGrow: 0}}
                renderItem={ItemColor}
                horizontal
                keyExtractor={item => item.id}
            />
            <Icon name="right" size={30} color={colors.black} style={{opacity:0.5}}/>
        </View >
    );
};

export default ColorChoose;
