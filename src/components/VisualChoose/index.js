import { Button as ButtonApp, useTheme,Dialog, Portal } from "react-native-paper";
import * as React from "react";
import { View } from "../Themed";
import {FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Text from "../../Themes/Components/Text/Text";


const VisualChoose = ({size,...props}) => {
    const {  colors,colorchoose } = useTheme();

    const [visuais,setVisuais] = React.useState([]);
    const [idColor,setIdColor] = props.state;
    React.useEffect(() => {
        setVisuais(props.listItems);
    })

    const handleSelection = (id) => {
        const beforeIndexCor = visuais.findIndex((item) => item.selected == true);
        const indexCor = visuais.findIndex((item) => item.id == id);
        
        var valueBeforeCor = visuais[beforeIndexCor];
        var valueCor = visuais[indexCor];

        valueBeforeCor.selected = false;
        valueCor.selected = true;

        var copyVisuais = [...visuais]
        copyVisuais[beforeIndexCor] = valueBeforeCor;
        copyVisuais[indexCor] = valueCor

        setVisuais(copyVisuais);
        setIdColor(valueCor.id);
     
     }
    
    const ItemColor = ({ item  }) => {
        const color_border = item.selected ?  `rgba(224,105,0,0.75)` : `rgba(241,241,241,0.9)`;
        return (
        <TouchableOpacity onPress={() => handleSelection(item.id)} style={{borderRadius:20}}>
            <Image style={{
                backgroundColor: `rgba(241,241,241,0.9)`, 
                width: 50, 
                height: 50,
                marginHorizontal: 16,
                borderRadius:30,
                borderWidth:10,
                borderColor: color_border
                }}
                source={item.pathHair}
                />

        </TouchableOpacity>
        );}
    
    return (
        <View style={[colorchoose.viewStyle,{backgroundColor:colors.primary}]} >
            <Icon name="left" size={30} color={colors.black} style={{opacity:0.5}}/>
            <FlatList 
                data={visuais}
                style={{height:50,flexGrow: 0}}
                renderItem={ItemColor}
                horizontal
                keyExtractor={item => item.id}
            />
            <Icon name="right" size={30} color={colors.black} style={{opacity:0.5}}/>
        </View >
    );
};

export default VisualChoose;
