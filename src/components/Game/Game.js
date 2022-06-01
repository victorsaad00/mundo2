import {AppRegistry,StyleSheet,ImageBackground, Dimensions, ScrollView, FlatList, DeviceEventEmitter  } from 'react-native';
import { IconButton, useTheme,Appbar } from 'react-native-paper'

import { GameEngine } from "react-native-game-engine";
import Button from '../../Themes/Components/Button/Button';
import Character from './Character';
import Item from './Item';
import ItemImage from './ItemImage';
import ColorsMatrix from './ColorsMatrix'
import ActiveCrystal from './ActiveCrystal'
import { GameLoop1 } from './GameLoop';

import CommandsLevel1 from './CommandsLevel1';
import CommandsLevel2 from './CommandsLevel2';
import CommandsLevel3 from './CommandsLevel3';
import CommandsLevel4 from './CommandsLevel4';
import CommandsLevel5 from './CommandsLevel5';

import InfoFase from '@root/assets/level/info.json';

import AlertInfo from '../AlertInfo';
import AlertLevelComplete from '../AlertLevelComplete';

import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../Themes/Components/Text/Text";

import { View } from "../../components/Themed";

import AsyncStorage from '@react-native-async-storage/async-storage';


import { useNavigation, useRoute } from "@react-navigation/native";

const initialConfigLevels = {
    1: {
        "name": "Floresta inicial",
        "minutes": 1,
        "seconds": 30,
        "passos": 100,
        'numberToCapture': 3
    },
    2: {
        "name": "Lago Bin",
        "minutes": 2,   
        "seconds": 30,
        "passos": 100,
        'numberToCapture': 6
    },
    3: {
        "name": "As Montanhas Hilbert",
        "minutes": 1,
        "seconds": 0,
        "passos": 75,
        'numberToCapture': 1
    },
    4: {
        "name": "Rupturas rochosas",
        "minutes": 2,
        "seconds": 30,
        "passos": 50,
        'numberToCapture': 10
    },
    5: {
        "name": "Cidade Lovelace",
        "minutes": 3,
        "seconds": 0,
        "passos": 60,
        'numberToCapture': 1
    },
}



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

    matrixLevel[6][4] = 2
    matrixLevel[6][5] = 2

    matrixLevel[6][14] = 3
    matrixLevel[6][15] = 3

    matrixLevel[13][4] = 4
    matrixLevel[13][5] = 4

    matrixLevel[13][14] = 5
    matrixLevel[13][15] = 5

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
    1: (engine,passos,captured,itemPathTaked,minutes,seconds,number_movements,barconfig) => <CommandsLevel1 engine={engine} passos={passos} captured={captured} itemPathTaked={itemPathTaked} minutes={minutes} seconds={seconds} number_movements={number_movements}/>,
    2: (engine,passos,captured,itemPathTaked,minutes,seconds,number_movements,barconfig) => <CommandsLevel2 engine={engine} passos={passos} captured={captured} itemPathTaked={itemPathTaked} minutes={minutes} seconds={seconds} number_movements={number_movements}/>,
    3: (engine,passos,captured,itemPathTaked,minutes,seconds,number_movements,barconfig) => <CommandsLevel3 engine={engine} passos={passos} captured={captured} itemPathTaked={itemPathTaked} minutes={minutes} seconds={seconds} number_movements={number_movements}/>,
    4: (engine,passos,captured,itemPathTaked,minutes,seconds,number_movements,barconfig) => <CommandsLevel4 engine={engine} passos={passos} captured={captured} itemPathTaked={itemPathTaked} minutes={minutes} seconds={seconds} number_movements={number_movements}/>,
    5: (engine,passos,captured,itemPathTaked,minutes,seconds,number_movements,barconfig) => <CommandsLevel5 engine={engine} passos={passos} captured={captured} itemPathTaked={itemPathTaked} minutes={minutes} seconds={seconds} number_movements={number_movements} barconfig={barconfig}/>,
}

const Level = (props) => {
    const { colors } = useTheme();
    const [id,setId] = useState(1)
    const route = useRoute();

    const pathLevels = { 
        1: require("@root/assets/level/Fase_1/Fase_1.png"),
        2: require("@root/assets/level/Fase_2/Fase_2.png"),
        3: require("@root/assets/level/Fase_3/Fase_3.png"),
        4: require("@root/assets/level/Fase_4/Fase_4.png"),
        5: require("@root/assets/level/Fase_5/Fase_5.png")
    }

    const [showHistory,setShowHistory] = useState(true);
    const [showOrientation,setShowOrientation] = useState(false);
    const [showEnd,setShowEnd] = useState(false);
    const [showBadEnd, setShowBadEnd] = useState(false);

    const level = route.params.level;

    const number_movements = initialConfigLevels[level].passos;
    const limitcaptured = initialConfigLevels[level].numberToCapture;

    const [ minutes, setMinutes ] = useState(initialConfigLevels[level].minutes);
    const [seconds, setSeconds ] =  useState(initialConfigLevels[level].seconds);

    const [captured, setCaptured] = useState(0)


    const [passos,setPassos] = useState(0);

    const [startLevel,setStartLevel] = useState(false)

    const [fimFase,setFimfase] = useState(false);


    useEffect(()=>{
        if (startLevel){
            let myInterval = setInterval(() => {
    
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        
                        clearInterval(myInterval)
                        if (!fimFase){
                            fimDeJogo("RUIM");
                        }
                        
                    } else {
    
                        setMinutes(minutes - 1);
                        setSeconds(59);
                        
                    }
                } 
            }, 1000)
            return () => {clearInterval(myInterval)};
        }
    });

    const [matrixLevel,setMatrixLevel] = useState([])

    useEffect(() => {
        setMatrixLevel(selectMatrix[level]);

        
    },[])


    const [xAxis,setXAxis] = useState(1) 
    const [yAxis,setYAxis] = useState(1) 

    const boardSize = 21*18;
    const [engine,setEngine] = useState(null);

    const  addCommand = (newCommand) => {
        setPassos(passos + 1)

    }
  
    useEffect( () => {
        if (captured === limitcaptured){
            fimDeJogo('BOM')
        }
    }, [captured])

    const [crystal1,setCrystal1] = useState(false);
    const [crystal2,setCrystal2] = useState(false);
    const [crystal3,setCrystal3] = useState(false);
    const [crystal4,setCrystal4] = useState(false);
    const [countCrystal, setCountCrystal] = useState(0)

    useEffect( () => {
        if (countCrystal === 4){
            fimDeJogo('BOM')
        }
    }, [countCrystal])

    const fimDeJogo = async (tipo) => {
        engine.stop()
        switch(tipo){
            case "BOM":
                setShowEnd(true);
                setFimfase(true);
                let rawData = await AsyncStorage.getItem('@userInfo')
                let userInfo = JSON.parse(rawData)

                if (userInfo.fase < level){
                    userInfo.fase = level 
                }

                if (level === 1 && !(5 in userInfo.items.skins.armor)){
                    userInfo.items.skins.armor.push(5)
                }
                
                userInfo.experience += InfoFase[level.toString()].experience
                userInfo.items.cash += InfoFase[level.toString()].gold

                
                await AsyncStorage.setItem('@userInfo', JSON.stringify(userInfo))

                // Update here with is auth
                const auth = await AsyncStorage.getItem('@auth')
                if (auth === "Autenticado"){
                    // TO DO
                }
                break;
            case "RUIM":
                setShowBadEnd(true);
                break;
        }
    }

    
  

    const navigation = useNavigation();

    const configLevel = {
        1: {
            config: {matrix: matrixLevel,collected:0,limitPassos:number_movements,level: 1},
            item1: {position: [17,3],path:require("@root/assets/level/Fase_1/pa.png"),
                size: 18,renderer: ItemImage},
            item2: {position: [5,15],path:require("@root/assets/level/Fase_1/balde.png"),
                size: 18,renderer: ItemImage},
            item3: {position: [13,13],path:require("@root/assets/level/Fase_1/vara_pesca.png"),
                size: 18,renderer: ItemImage},
            char: {position: [xAxis,yAxis],updateFrequency:16,nextMove:10,passos:0,
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
            char: {position: [xAxis,yAxis],updateFrequency:16,nextMove:10,passos:0,
                size: 18, x_vel:0,y_vel:0,renderer: Character},
        },
        3: {
            config: {matrix: matrixLevel,colorChoosed:0,limitPassos:number_movements,level: 3},
            char: {position: [xAxis,yAxis],updateFrequency:16,nextMove:10,passos:0,
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
                <Appbar.BackAction color="white" onPress={()=> navigation.goBack()} />
                <Appbar.Content color={colors.surface} title={initialConfigLevels[level].name} />
            </Appbar>
            <AlertInfo visible={showHistory} hidedialog={()=>{
                setShowHistory(false)
                setShowOrientation(true)
            }} 
                infoCard={{
                    'mapName': initialConfigLevels[level].name,
                    'type': 'História',
                    'description': InfoFase[level.toString()].description_historia
                }} />
            <AlertInfo visible={showOrientation} hidedialog={()=>{
                setShowOrientation(false)
                setStartLevel(true)
            }} 
                infoCard={{
                    'mapName': initialConfigLevels[level].name,
                    'type': 'Orientação',
                    'description': InfoFase[level.toString()].description_fase
                }} />

            <AlertLevelComplete visible={showEnd} hidedialog={()=>{
                setShowEnd(false)
            }} 
                buttonOnClick={()=>{
                    setShowEnd(false)
                    DeviceEventEmitter.emit("updateData", {});
                    navigation.goBack()
                }}
                infoCard={{
                    'mapName': initialConfigLevels[level].name,
                    'description': InfoFase[level.toString()].ending_good,
                    'experience': InfoFase[level.toString()].experience,
                    'reward': `${InfoFase[level.toString()].gold} goldcoins`,
                    'lock': InfoFase[level.toString()].lock
                }} />
            <AlertLevelComplete visible={showBadEnd} hidedialog={()=>{
                setShowBadEnd(false)
            }} 
                title="Desafio incompleto"
                buttonOnClick={()=>{
                    setShowEnd(false)
                    navigation.goBack()
                }}
                infoCard={{
                    'mapName': initialConfigLevels[level].name,
                    'description': InfoFase[level.toString()].ending_bad,
                    'experience': 0,
                    'reward': "Sem recompensa",
                    'lock': []
                }} />
            
            <ScrollView>
                <View style={{height:900}}>
            
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
                        {level == 5 ? <ActiveCrystal x={9} y={8}  actived={crystal1} path={require("@root/assets/level/Fase_5/Crystal_actived.png")} /> : <View />}
                        {level == 5 ? <ActiveCrystal x={29} y={8}  actived={crystal2} path={require("@root/assets/level/Fase_5/Crystal_actived.png")} /> : <View />}
                        {level == 5 ? <ActiveCrystal x={9} y={30}  actived={crystal3} path={require("@root/assets/level/Fase_5/Crystal_actived.png")} /> : <View />}
                        {level == 5 ? <ActiveCrystal x={29} y={30}  actived={crystal4} path={require("@root/assets/level/Fase_5/Crystal_actived.png")} /> : <View />}
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
                                        fimDeJogo("BOM")
                                        return;
                                    case "bad-game-over":
                                        fimDeJogo("RUIM");
                                        return;
                                    case 'crystal1':
                                        setCrystal1(true)
                                        setCountCrystal(countCrystal +1)
                                        return;
                                    case 'crystal2':
                                        setCrystal2(true)
                                        setCountCrystal(countCrystal +1)
                                        return;
                                    case 'crystal3':
                                        setCrystal3(true)
                                        setCountCrystal(countCrystal +1)
                                        return;
                                    case 'crystal4':
                                        setCrystal4(true)
                                        setCountCrystal(countCrystal +1)
                                        return;
                                  }
                            }}
                        >

                        </GameEngine>}
                    </View>
                    {/* <Button onClick={()=>{fimDeJogo('BOM')}}>acaba</Button> */}
                    {/* <Button onClick={()=>{fimDeJogo('RUIM')}}>acaba ruim</Button> */}
                    {selectCommand[level](engine,passos,captured,itemPathTaked,minutes,seconds,number_movements,countCrystal)}
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

