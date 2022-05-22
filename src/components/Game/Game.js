import React,{Component} from 'react';
import {AppRegistry,View,StyleSheet,ImageBackground, Dimensions,  } from 'react-native';

import { GameEngine } from "react-native-game-engine";
import Button from '../../Themes/Components/Button/Button';
import Character from './Character';
import { GameLoop } from './GameLoop';



export default class Level extends Component {
    constructor(props){
        super(props);
        this.boardSize = 21*18;
        this.engine = null;
        this.state ={
            x_axis: 1,
            y_axis: 1
        };
    }

    render(){
        return (
            <View style={{height:500}}>
                <View style={styles.container}>
                    <ImageBackground source={require("../../assets/level/Fase_1.png")} resizeMode='stretch'
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 21*18,
                        width: 21*18,
                    }} />
                    <GameEngine
                        ref={(ref)=> {this.engine = ref}}
                        style={{width: this.boardSize,height: this.boardSize,flex: null,}}
                        systems={[GameLoop]}
                        entities={{
                            char: {position: [this.state.x_axis,this.state.y_axis],updateFrequency:32,nextMove:10,
                                size: 18, x_vel:0,y_vel:0,renderer: <Character />}
                        }}
                    >

                    </GameEngine>
                    
                </View>
                <Button onPress={()=>{this.engine.dispatch({type: 'move-left'})}}
                 size="flat">Esquerda</Button>
                <Button onPress={()=>{this.engine.dispatch({type: 'move-right'})}} 
                size="flat">Direita</Button>
                <Button onPress={()=>{this.engine.dispatch({type: 'move-up'})}}
                 size="flat">Cima</Button>
                <Button onPress={()=>{this.engine.dispatch({type: 'move-down'})}} 
                size="flat">Baixo</Button>
            </View>
        
        )
    }
}

const styles = StyleSheet.create({container: {
    height: 21*18,
    backgroundColor: "#000000",
    alignItems: 'center',
    justifyContent: 'center'

    
}})

