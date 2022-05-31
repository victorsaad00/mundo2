import React, {useState,useEffect} from "react";
import { View } from "../Themed";
import Text from "../../Themes/Components/Text/Text";
import Button from '../../Themes/Components/Button/Button';
import { IconButton,useTheme} from 'react-native-paper'
import ProgressBar from '@root/components/ProgressBar/ProgressBar';
import {ImageBackground, TouchableOpacity, Image} from 'react-native';

const CommandsLevel5 = ({engine,passos,captured,itemPathTaked,number_movements,minutes,seconds,...props}) => {

    const { colors } = useTheme();

    const [selected,setSelected] = useState(1)

    const [colorButtons,setColorButtons] = useState({
        2: colors.second_light,
        3: colors.second_light,
        4: colors.second_light
    })

    const barconfig = props.barconfig;

    return (
        <View style={{paddingVertical:16,height: 400}}>
            <View style={{paddingHorizontal: 16}}>
                <ProgressBar colorBar="#FF6767" progress={(4-barconfig)/4}> 
                    {4-barconfig}/4 de vida 
                </ProgressBar>
            </View>
            <View style={{flexDirection: "row",height:400}}>
                <View style={{flex:1,
                    height:325,margin:16}}>
                    <View style={{flexDirection:"row",paddingVertical: 16}}>
                        <Text size="small">
                            Time:
                        </Text>
                        <Text size="small">
                            {`${("00" + minutes).slice(-2)}:${("00" + seconds).slice(-2)}`}
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",paddingVertical: 16}}>
                        <Text size="small">
                            Comandos:
                        </Text>
                        <Text size="small">
                            {passos}/{number_movements}
                        </Text>
                    </View>
                    
                </View>
                
                <View style={{flex:1,justifyContent: 'flex-start'}}>
                    <View style={{alignItems: 'center'}}>
                        <IconButton
                            icon="arrow-up"
                            style={{backgroundColor: selected === 1 ? colors.primary : colors.second}}
                            color="#FFF"
                            size={20}
                            onPress={()=>{
                                // addCommand("Para cima")
                                
                                engine.dispatch({type: 'move',command:'move-up',jump:selected})}}
                        />
                        <View style={{flexDirection: "row",width: 150,justifyContent: "space-between",alignItems:'center'}}>
                            <IconButton
                                icon="arrow-left"
                                style={{backgroundColor: selected === 1 ? colors.primary : colors.second}}
                                color="#FFF"
                                size={20}
                                onPress={()=>{
                                    // addCommand("Para Esquerda")
                                    engine.dispatch({type: 'move',command:'move-left',jump:selected})}}
                            />
                            {selected !== 1 ?
                            <View style={{alignItems:'center',justifyContent:'center',backgroundColor: colors.second_light,
                                            width:35,height:35,borderRadius:32}}>
                                <Text size='small' variant='background'>
                                    {selected}x
                                </Text>
                            </View> : <View />}

                            <IconButton
                                icon="arrow-right"
                                style={{backgroundColor: selected === 1 ? colors.primary : colors.second}}
                                color="#FFF"
                                size={20}
                                onPress={()=>{
                                    // addCommand("Para Direita")
                                    engine.dispatch({type: 'move',command:'move-right',jump:selected})}}
                            />
                        </View>
                        <IconButton
                            icon="arrow-down"
                            style={{backgroundColor: selected === 1 ? colors.primary : colors.second}}
                            color="#FFF"
                            size={20}
                            onPress={()=>{
                                // addCommand("Para Baixo")
                                engine.dispatch({type: 'move',command:'move-down',jump:selected})}}
                        />
                    </View>
                    <View style={{paddingVertical:16}} >
                        <Text size="small" variant="second">Repetir comando</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:8,
                                paddingVertical:16}}>

                            <TouchableOpacity onPress={()=>{
                                if (selected !== 2){
                                    if (selected !== 1){
                                        colorButtons[selected] = colors.second_light
                                    }
                                    let new_colorButtons = {...colorButtons}
                                    new_colorButtons[2] = colors.second;
                                    setSelected(2)
                                    setColorButtons(new_colorButtons)
                                } else {
                                    setSelected(1)
                                    let new_colorButtons = {...colorButtons}
                                    new_colorButtons[2] = colors.second_light
                                    setColorButtons(new_colorButtons)
                                }
                                
                            }} 
                            style={{backgroundColor:colorButtons[2],width:50,height:50,borderRadius:32,
                                    alignItems: 'center',justifyContent:'center'}}
                            >
                                <Text size='small'  style={{color:"#fff"}}>
                                    2x
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{
                                    if (selected !== 3){
                                        if (selected !== 1){
                                            colorButtons[selected] = colors.second_light
                                        }
                                        let new_colorButtons = {...colorButtons}
                                        new_colorButtons[3] = colors.second;
                                        setSelected(3)
                                        setColorButtons(new_colorButtons)
                                    } else {
                                        setSelected(1)
                                        let new_colorButtons = {...colorButtons}
                                        new_colorButtons[3] = colors.second_light
                                        setColorButtons(new_colorButtons)
                                    }
                            }}
                            style={{backgroundColor:colorButtons[3],width:50,height:50,borderRadius:32,
                                    alignItems: 'center',justifyContent:'center'}}
                            >
                                <Text size='small'  style={{color:"#fff"}}>
                                    3x
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{
                                    if (selected !== 4){
                                        if (selected !== 1){
                                            colorButtons[selected] = colors.second_light
                                        }
                                        let new_colorButtons = {...colorButtons}
                                        new_colorButtons[4] = colors.second;
                                        setSelected(4)
                                        setColorButtons(new_colorButtons)
                                    } else {
                                        setSelected(1)
                                        let new_colorButtons = {...colorButtons}
                                        new_colorButtons[4] = colors.second_light
                                        setColorButtons(new_colorButtons)
                                    }
                            }}
                            style={{backgroundColor:colorButtons[4],width:50,height:50,borderRadius:32,
                                    alignItems: 'center',justifyContent:'center'}}
                            >
                                <Text size='small' style={{color:"#fff"}}>
                                    4x
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View >
                        <Button onPress={() =>{
                            
                            engine.dispatch({type: 'take'})}}>
                            Ativar
                        </Button>
                    </View>
                    
                </View>      
            </View>
        </View>
    )
};

export default CommandsLevel5;