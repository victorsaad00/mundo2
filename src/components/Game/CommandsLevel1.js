
import { View } from "../../components/Themed";
import Text from "../../Themes/Components/Text/Text";
import Button from '../../Themes/Components/Button/Button';
import { IconButton} from 'react-native-paper'
import {ImageBackground} from 'react-native';
import { useEffect, useState } from "react";

const CommandLevel1 = ({engine,passos,captured,itemPathTaked,minutes,seconds,...props}) => {
    

    return (
        <View style={{paddingVertical:16,height: 350}}>
            <View style={{alignItems: 'center',flexDirection: "row",height:350,}}>
                <View style={{flex:1,
                    height:325,margin:16}}>
                    <View style={{flexDirection:"row",paddingVertical: 16}}>
                        <Text size="small">
                            Time:
                        </Text>
                        <Text size="small">
                            {`${minutes}:${seconds}`}
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
                        <Text size="small">
                            Ferramentas capturadas:
                        </Text>
                        <Text size="small">
                            {captured}/3
                        </Text>
                    </View>
                    
                </View>
                
                <View style={{flex:1}}>
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
                    <View style={{paddingVertical: 16}}>
                        <Button onPress={() =>{
                            
                            engine.dispatch({type: 'take'})}}>
                            Pegar
                        </Button>
                    </View>
                    
                </View>      
            </View>
        </View>
    )
};

export default CommandLevel1;