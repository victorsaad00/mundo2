import {AppRegistry,StyleSheet,ImageBackground, Dimensions, ScrollView, FlatList  } from 'react-native';
import { IconButton, useTheme,Appbar } from 'react-native-paper'

import { GameEngine } from "react-native-game-engine";
import Button from '../../Themes/Components/Button/Button';
import Character from './Character';
import Item from './Item';
import ItemImage from './ItemImage';
import ColorsMatrix from './ColorsMatrix'
import { GameLoop1 } from './GameLoop';

import CommandsLevel1 from './CommandsLevel1';
import CommandsLevel2 from './CommandsLevel2';
import CommandsLevel3 from './CommandsLevel3';
import CommandsLevel4 from './CommandsLevel4';
import CommandsLevel5 from './CommandsLevel5';

import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../Themes/Components/Text/Text";

import { View } from "../../components/Themed";


import { useNavigation } from "@react-navigation/native";

const matrixLevel1 = () => {
    let matrixLevel = Array(10).fill().map(()=>Array(10).fill(0))
    matrixLevel[8][1] = 1
    matrixLevel[2][7] = 2
    matrixLevel[6][6] = 3

    return matrixLevel
}

const matrixLevel2 = () => {
    let matrixLevel = Array(10).fill().map(()=>Array(10).fill(0))
    matrixLevel[6][9] = {"prop": 1, "type":"door"} // Circle
    matrixLevel[4][5] = {"prop": 2, "type":"door"} // Square
    matrixLevel[1][3] = {"prop": 3, "type":"door"} // X
    matrixLevel[4][1] = {"prop": 1, "type":"hole"} // Circle
    matrixLevel[1][8] = {"prop": 2, "type":"hole"} // Square
    matrixLevel[9][5] = {"prop": 3, "type":"hole"} // X

    return matrixLevel
}

const matrixLevel3 = () => {
    let matrixLevel = []
    for (let i = 0; i < 10; i++){
        let subMatrixLevel = []
        for (let j = 0; j < 10; j++){
            subMatrixLevel.push(Math.floor(Math.random()*3 + 1))
        }
        matrixLevel.push(subMatrixLevel)
    }
    matrixLevel[0][0] = 0;
    return matrixLevel
}

const matrixLevel4 = () => {
    let matrixLevel = Array(10).fill().map(()=>Array(10).fill(0))
    matrixLevel[0][6] = 1
    matrixLevel[0][9] = 2
    matrixLevel[1][2] = 3
    matrixLevel[3][4] = 4
    matrixLevel[3][7] = 5
    matrixLevel[4][0] = 6
    matrixLevel[5][9] = 7
    matrixLevel[6][5] = 8
    matrixLevel[7][1] = 9
    matrixLevel[8][6] = 10
    return matrixLevel
}

const matrixLevel5 = () => {
    let matrixLevel = Array(20).fill().map(()=>Array(20).fill(0))
    const entries = [2,3,6,7,12,13,16,17]
    for(let i =0; i< entries.length;i++){
        matrixLevel[2][entries[i]] = 1
        matrixLevel[17][entries[i]] = 1
    }

    const walls = [2,3,4,5,6,7,12,13,14,15,16,17]
    for(let i =0; i< walls.length;i++){
        //Vertical 
        matrixLevel[walls[i]][2] = 1
        matrixLevel[walls[i]][7] = 1
        matrixLevel[walls[i]][12] = 1
        matrixLevel[walls[i]][17] = 1

        //Horizontal
        matrixLevel[7][walls[i]] = 1
        matrixLevel[12][walls[i]] = 1
    }

    const internal = [4,5,14,15]
    for(let i =0; i< internal.length;i++){
        matrixLevel[4][internal[i]] = 1
        matrixLevel[15][internal[i]] = 1
    }

    return matrixLevel
}
const selectMatrix = {
    1: matrixLevel1(),
    2: matrixLevel2(),
    3: matrixLevel3(),
    4: matrixLevel4(),
    5: matrixLevel5()
}

const selectCommand = {
    1: (engine,passos,captured,itemPathTaked,minutes,seconds) => <CommandsLevel1 engine={engine} passos={passos} captured={captured} itemPathTaked={itemPathTaked} minutes={minutes} seconds={seconds}/>,
    2: (engine,passos,captured,itemPathTaked,minutes,seconds) => <CommandsLevel2 engine={engine} passos={passos} captured={captured} itemPathTaked={itemPathTaked} minutes={minutes} seconds={seconds}/>,
    3: (engine,passos,captured,itemPathTaked,minutes,seconds) => <CommandsLevel3 engine={engine} passos={passos} captured={captured} itemPathTaked={itemPathTaked} minutes={minutes} seconds={seconds}/>,
    4: (engine,passos,captured,itemPathTaked,minutes,seconds) => <CommandsLevel4 engine={engine} passos={passos} captured={captured} itemPathTaked={itemPathTaked} minutes={minutes} seconds={seconds}/>,
    5: (engine,passos,captured,itemPathTaked,minutes,seconds) => <CommandsLevel5 engine={engine} passos={passos} captured={captured} itemPathTaked={itemPathTaked} minutes={minutes} seconds={seconds}/>,
}

const Level = (props) => {
    const { colors } = useTheme();
    const [id,setId] = useState(1)

    const pathLevels = { 
        1: require("@root/assets/level/Fase_1/Fase_1.png"),
        2: require("@root/assets/level/Fase_2/Fase_2.png"),
        3: require("@root/assets/level/Fase_3/Fase_3.png"),
        4: require("@root/assets/level/Fase_4/Fase_4.png"),
        5: require("@root/assets/level/Fase_5/Fase_5.png")
    }

    const level = 5;

    const number_movements = 30;

    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(15);
    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                        fimDeJogo();
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
            };
    });

    const [matrixLevel,setMatrixLevel] = useState([])

    useEffect(() => {
        setMatrixLevel(selectMatrix[level]);

        
    },[])

    const [captured, setCaptured] = useState(0)

    const [passos,setPassos] = useState(0);

    const [xAxis,setXAxis] = useState(1) 
    const [yAxis,setYAxis] = useState(1) 

    const [pilhaCommands,setPilhaCommands] = useState([])

    

    const boardSize = 21*18;
    const [engine,setEngine] = useState(null);

    const  addCommand = (newCommand) => {
        setPassos(passos + 1)
        console.log(xAxis)
    }
  
    useEffect( () => {
        if (captured === 6){
            fimDeJogo()
        }
    }, [captured])

    useEffect(() => {

    })

    const fimDeJogo = () => {
        console.log('fim de jogo!')
    }

    
  

    // const navigation = useNavigation();

    const configLevel = {
        1: {
            config: {matrix: matrixLevel,collected:0,limitPassos:number_movements,level: 1},
            item1: {position: [17,3],color:"yellow",
                size: 18,renderer: Item},
            item2: {position: [5,15],color:"yellow",
                size: 18,renderer: Item},
            item3: {position: [13,13],color:"yellow",
                size: 18,renderer: Item},
            char: {position: [xAxis,yAxis],updateFrequency:32,nextMove:10,passos:0,
                size: 18, x_vel:0,y_vel:0,renderer: Character},
        },
        2: {
            config: {matrix: matrixLevel,collected:0,holding:undefined,limitPassos:number_movements,level: 2},
            hole1: {position: [9,3],path:require("@root/assets/level/Fase_2/Tabua_circle.png"),
                size: 18,renderer: ItemImage},
            hole2: {position: [3,17],path:require("@root/assets/level/Fase_2/Tabua_square.png"),
                size: 18,renderer: ItemImage},
            hole3: {position: [19,11],path:require("@root/assets/level/Fase_2/Tabua_X.png"),
                size: 18,renderer: ItemImage},
            door1: {position: [13,19],path:require("@root/assets/level/Fase_2/Tabua_circle_tampa.png"),
                size: 18,renderer: ItemImage},
            door2: {position: [9,11],path:require("@root/assets/level/Fase_2/Tabua_square_tampa.png"),
                size: 18,renderer: ItemImage},
            door3: {position: [3,7],path:require("@root/assets/level/Fase_2/Tabua_X_tampa.png"),
                size: 18,renderer: ItemImage},
            char: {position: [xAxis,yAxis],updateFrequency:32,nextMove:10,passos:0,
                size: 18, x_vel:0,y_vel:0,renderer: Character},
        },
        3: {
            config: {matrix: matrixLevel,colorChoosed:0,limitPassos:number_movements,level: 3},
            char: {position: [xAxis,yAxis],updateFrequency:32,nextMove:10,passos:0,
                size: 18, x_vel:0,y_vel:0,renderer: Character},
        },

        4: {
            config: {matrix: matrixLevel,collected:0,limitPassos:number_movements,level: 4},
            
            rock1: {position: [13,1],path:require("@root/assets/level/Fase_4/rock_collect.png"),
                size: 18,renderer: ItemImage},
            rock2: {position: [19,1],path:require("@root/assets/level/Fase_4/rock_collect.png"),
                size: 18,renderer: ItemImage},
            rock3: {position: [5,3],path:require("@root/assets/level/Fase_4/rock_collect.png"),
                size: 18,renderer: ItemImage},
            rock4: {position: [9,7],path:require("@root/assets/level/Fase_4/rock_collect.png"),
                size: 18,renderer: ItemImage},
            rock5: {position: [15,7],path:require("@root/assets/level/Fase_4/rock_collect.png"),
                size: 18,renderer: ItemImage},
            rock6: {position: [1,9],path:require("@root/assets/level/Fase_4/rock_collect.png"),
                size: 18,renderer: ItemImage},
            rock7: {position: [19,11],path:require("@root/assets/level/Fase_4/rock_collect.png"),
                size: 18,renderer: ItemImage},
            rock8: {position: [11,13],path:require("@root/assets/level/Fase_4/rock_collect.png"),
                size: 18,renderer: ItemImage},
            rock9: {position: [3,15],path:require("@root/assets/level/Fase_4/rock_collect.png"),
                size: 18,renderer: ItemImage},
            rock10: {position: [13,17],path:require("@root/assets/level/Fase_4/rock_collect.png"),
                size: 18,renderer: ItemImage},
            char: {position: [xAxis,yAxis],updateFrequency:16,nextMove:10, jump: 1,passos:0,
                size: 18, x_vel:0,y_vel:0,renderer: Character},
        },
        5: {
            config: {matrix: matrixLevel,collected:0,limitPassos:number_movements,level: 5},
            char: {position: [xAxis,yAxis],updateFrequency:16,nextMove:10, jump: 1,passos:0,
                size: 9.225, x_vel:0,y_vel:0,renderer: Character},

        }
    }

    const secondLevelProps = {
        1: {
            "path": require("@root/assets/level/Fase_2/Tabua_circle_tampa.png"),
            "name": "Entrada circular"
        },
        2: {
            "path": require("@root/assets/level/Fase_2/Tabua_square_tampa.png"),
            "name": "Entrada quadrada"
        },
        3: {
            "path": require("@root/assets/level/Fase_2/Tabua_X_tampa.png"),
            "name": "Entrada cruzada"
        },
    }

    const [itemPathTaked,setItemPathTaked] = useState(undefined)

    return (
        <SafeAreaView>
            <Appbar>
                <Appbar.Content color={colors.surface} title="Olá, Joe Doe" />
            </Appbar>
            <ScrollView>
                <View style={{height:800}}>
            
                    <View style={styles.container}>
                        <ImageBackground source={pathLevels[level]} resizeMode='stretch'
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: 21*18,
                            width: 21*18,
                            backgroundColor: "yellow"
                        }} />
                        {level == 3 ? <ColorsMatrix  matrix={matrixLevel} /> : <View />}
                        {matrixLevel.length === 0 ? <View /> : 
                        <GameEngine
                            ref={(ref)=> {setEngine(ref)}}
                            style={{width: boardSize,height: boardSize,flex: null,}}
                            systems={[GameLoop1]}
                            entities={configLevel[level]}
                            onEvent={(e)=>{
                                switch (e) {
                                    case "moved":
                                        setPassos(passos + 1)
                                        return;
                                    case "taked":
                                        setCaptured(captured + 1)
                                        return;
                                    case "taked2":
                                        setCaptured(captured + 1)
                                        const component2 = engine.state.entities.config.holding;
                                        if (component2 == 0) {
                                            setItemPathTaked(undefined)
                                        } else{
                                            setItemPathTaked(secondLevelProps[component2])
                                        }
                                        return;
                                    case 'game-over':
                                        fimDeJogo()
                                  }
                            }}
                        >

                        </GameEngine>}
                        
                    </View>
                    {selectCommand[level](engine,passos,captured,itemPathTaked,minutes,seconds)}
                </View>
            </ScrollView>
        

        </SafeAreaView>
  );
};

export default Level;

const styles = StyleSheet.create({container: {
    height: 21*18 +12,
    backgroundColor: "#000000",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth : 6,
    borderColor: "#9c7c66",
    margin: 10


    
}})

