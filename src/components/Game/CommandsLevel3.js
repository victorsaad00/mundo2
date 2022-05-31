import React, {useState,useEffect} from "react";
import { View } from "../../components/Themed";
import Text from "../../Themes/Components/Text/Text";
import Button from '../../Themes/Components/Button/Button';
import { IconButton} from 'react-native-paper'
import {ImageBackground, TouchableOpacity, Image} from 'react-native';

const CommandLevel3 = ({engine,passos,captured,itemPathTaked,minutes,seconds,...props}) => {
    const [colorChoosed,setColorChoosed] = useState(0)

    const colorsPath = {
        1: require("@root/assets/level/Fase_3/Flag_floor_blue.png"),
        2: require("@root/assets/level/Fase_3/Flag_floor_green.png"),
        3: require("@root/assets/level/Fase_3/Flag_floor_red.png")
    }

    return (
        <View style={{paddingVertical:16,height: 350}}>
            <View style={{flexDirection: "row",height:350,}}>
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
                            Passos:
                        </Text>
                        <Text size="small">
                            {passos}
                        </Text>
                    </View>
                    <View style={{flexDirection:"column",paddingVertical: 16}}>
                        <Text size="small" variant='second'>
                            Cor da bota:
                        </Text>
                        <Image style={{width:50,height:50,alignSelf:'center',marginVertical:16}} 
                            source={colorsPath[colorChoosed]} />
                    </View>
                    
                </View>
                
                <View style={{flex:1,justifyContent: 'flex-start',height:325}}>
                    <View style={{alignItems: 'center'}}>
                        <IconButton
                            icon="arrow-up"
                            style={{backgroundColor: '#E36A00'}}
                            color="#FFF"
                            size={20}
                            onPress={()=>{
                                // addCommand("Para cima")
                                
                                engine.dispatch({type: 'move',command:'move-up',jump:1})}}
                        />
                        <View style={{flexDirection: "row",width: 150,justifyContent: "space-between"}}>
                            <IconButton
                                icon="arrow-left"
                                style={{backgroundColor: '#E36A00'}}
                                color="#FFF"
                                size={20}
                                onPress={()=>{
                                    // addCommand("Para Esquerda")
                                    engine.dispatch({type: 'move',command:'move-left',jump:1})}}
                            />
                            <IconButton
                                icon="arrow-right"
                                style={{backgroundColor: '#E36A00'}}
                                color="#FFF"
                                size={20}
                                onPress={()=>{
                                    // addCommand("Para Direita")
                                    engine.dispatch({type: 'move',command:'move-right',jump:1})}}
                            />
                        </View>
                        <IconButton
                            icon="arrow-down"
                            style={{backgroundColor: '#E36A00'}}
                            color="#FFF"
                            size={20}
                            onPress={()=>{
                                // addCommand("Para Baixo")
                                engine.dispatch({type: 'move',command:'move-down',jump:1})}}
                        />
                    </View>
                    <View style={{paddingVertical:16}}>
                        <Text variant='second' size="small">Escolha cor da bota</Text>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent:'space-between',}}>
                        
                        <TouchableOpacity onPress={() =>{
                            setColorChoosed(1)
                            engine.dispatch({type: 'changeColor',command:'blue'})
                        }}>
                                <Image style={{width:50,height:50}} source={colorsPath[1]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{
                            setColorChoosed(2)
                            engine.dispatch({type: 'changeColor',command:'green'})
                        }}>
                                <Image style={{width:50,height:50}} source={colorsPath[2]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{
                            setColorChoosed(3)
                            engine.dispatch({type: 'changeColor',command:'red'})
                        }}>
                                <Image style={{width:50,height:50}} source={colorsPath[3]} />
                        </TouchableOpacity>
                    </View>
                    
                </View>      
            </View>
        </View>
    )
};

export default CommandLevel3;