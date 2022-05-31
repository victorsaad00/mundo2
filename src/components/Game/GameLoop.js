const GameLoop1 = (entities, {touches, dispatch, events}) => {
    let char = entities.char;
    let item1 = entities.item1;
    let item2 = entities.item2;
    let item3 = entities.item3;

    let hole1 = entities.hole1;
    let hole2 = entities.hole2;
    let hole3 = entities.hole3;
    let door1 = entities.door1;
    let door2 = entities.door2;
    let door3 = entities.door3

    let rock1 = entities.rock1;
    let rock2 = entities.rock2;
    let rock3 = entities.rock3;
    let rock4 = entities.rock4;
    let rock5 = entities.rock5;
    let rock6 = entities.rock6;
    let rock7 = entities.rock7;
    let rock8 = entities.rock8;
    let rock9 = entities.rock9;
    let rock10 = entities.rock10;

    let config = entities.config

    let max_matrix = 19;

    if (config.level === 5){
        max_matrix = 39
    }

    const movement_condition = (events,i) =>{
        
        if (config.colorChoosed != undefined){
            char.jump = events[i].jump;
            const eixoX = Math.floor(char.position[0]/2)
            const eixoY = Math.floor(char.position[1]/2)

            if (events[i].command == "move-right" && char.position[1] == max_matrix) {
                char.x_vel = 2
                dispatch("game-over")

            }else if (events[i].command == "move-left" && char.position[0] > 1 && config.colorChoosed == config.matrix[eixoX-1][eixoY]){
                char.x_vel = -2 
            } else if (events[i].command == "move-right" && char.position[0] < max_matrix && config.colorChoosed == config.matrix[eixoX+1][eixoY]){
                char.x_vel = 2
            }else if (events[i].command == "move-up" && char.position[1] > 1 && config.colorChoosed == config.matrix[eixoX][eixoY-1]){
                char.y_vel = -2 
            } else if (events[i].command == "move-down" && char.position[1] < max_matrix && config.colorChoosed == config.matrix[eixoX][eixoY+1]){
                char.y_vel = 2
            }
        } else if (config.level === 5) {
                char.jump = events[i].jump;
                const eixoX = Math.floor(char.position[0]/2)
                const eixoY = Math.floor(char.position[1]/2)
                
                if (events[i].command == "move-left" && char.position[0] > 1 && config.matrix[eixoY][eixoX-1] !== 1){
                    char.x_vel = -2 
                } else if (events[i].command == "move-right" && char.position[0] < max_matrix && config.matrix[eixoY][eixoX+1] !== 1){
                    char.x_vel = 2
                }else if (events[i].command == "move-up" && char.position[1] > 1 && config.matrix[eixoY-1][eixoX] !== 1){
                    char.y_vel = -2 
                } else if (events[i].command == "move-down" && char.position[1] < max_matrix && config.matrix[eixoY+1][eixoX] !== 1){
                    char.y_vel = 2
                }
            }else {

            if (events[i].jump !== undefined){
                char.jump = events[i].jump;
            }
            if (events[i].command == "move-left" && char.position[0] > 1){
                char.x_vel = -2 
            } else if (events[i].command == "move-right" && char.position[0] < max_matrix){
                char.x_vel = 2
            }else if (events[i].command == "move-up" && char.position[1] > 1){
                char.y_vel = -2 
            } else if (events[i].command == "move-down" && char.position[1] < max_matrix){
                char.y_vel = 2
            }
        }
    }

    const take_condition1 = (events,i) => {
        const eixoX = Math.floor(char.position[0]/2)
        const eixoY = Math.floor(char.position[1]/2)
        if (config.matrix[eixoX][eixoY] !== 0){
            entities.config.collected ++
            
            if (config.matrix[eixoX][eixoY] == 1){
                item1.color= "transparent"
            } else if (config.matrix[eixoX][eixoY] == 2) {
                item2.color= "transparent"
            } else if (config.matrix[eixoX][eixoY] == 3) {
                item3.color= "transparent"
            }

            config.matrix[eixoX][eixoY] = 0
            dispatch("taked")
        } 
    }

    const take_condition2 = (events,i) => {
        const eixoX = Math.floor(char.position[0]/2)
        const eixoY = Math.floor(char.position[1]/2)
        
        if (config.matrix[eixoX][eixoY] !== 0){
            
            const value = config.matrix[eixoX][eixoY]
            if (value.type === "door"){
                // Condição de pegar o objeto
                switch (value.prop){
                    case 1:
                        console.log("Objeto 1 pego")
                        config.holding = 1
                        door1.path = undefined
                        
                        break
                    case 2: 
                        console.log("Objeto 2 pego")
                        config.holding = 2
                        door2.path = undefined
                        break
                    case 3:
                        console.log("Objeto 3 pego")
                        config.holding = 3
                        door3.path = undefined
                        break
                }
                dispatch("taked2")
                config.matrix[eixoX][eixoY] = 0
            } else if (value.type === "hole") {
                // Condição para checar se existe algum item segurando
                if (config.holding !== undefined){
                    // Condição se o objeto se encaixa na saida correta
                    if (config.holding === value.prop){
                        // Condição de colocar o objeto
                        switch (value.prop){
                            case 1:
                                console.log("Objeto 1 colocado")
                                door1.position = hole1.position
                                door1.path = require("@root/assets/level/Fase_2/Tabua_circle_tampa.png")
                                break
                            case 2: 
                                console.log("Objeto 2 colocado")
                                door2.position = hole2.position
                                door2.path = require("@root/assets/level/Fase_2/Tabua_square_tampa.png")
                                break
                            case 3:
                                console.log("Objeto 3 colocado")
                                door3.position = hole3.position
                                door3.path = require("@root/assets/level/Fase_2/Tabua_X_tampa.png")
                                break
                        }
                        config.holding = 0
                        entities.config.collected ++
                        dispatch("taked2")
                    }
                }
            } 

            
            
        } 
    }

    const take_condition3 = (events,i) => {
        const eixoX = Math.floor(char.position[0]/2) 
        const eixoY = Math.floor(char.position[1]/2)
 
        if (config.matrix[eixoY][eixoX] !== 0){
            entities.config.collected ++

            switch (config.matrix[eixoY][eixoX]){
                case 1:
                    rock1.path=undefined
                    break
                case 2:
                    rock2.path=undefined
                    break
                case 3:
                    rock3.path=undefined
                    break
                case 4:
                    rock4.path=undefined
                    break
                case 5:
                    rock5.path=undefined
                    break
                case 6:
                    rock6.path=undefined
                    break
                case 7:
                    rock7.path=undefined
                    break
                case 8:
                    rock8.path=undefined
                    break
                case 9:
                    rock9.path=undefined
                    break
                case 10:
                    rock10.path=undefined
                    break
            }

            config.matrix[eixoY][eixoX] = 0
            dispatch("taked")
        } 
    }
    const colorChoose = (events,i) => {
        if (events[i].command == "blue" ){
            config.colorChoosed = 1
        } else if (events[i].command == "green" ){
            config.colorChoosed = 2
        }else if (events[i].command == "red"){
            config.colorChoosed = 3
        }
    }
    
    if (events.length){
        for(let i=0; i< events.length; i++){
            if (events[i].type === 'move'){
                if (char.x_vel === 0 && char.y_vel === 0){
                    movement_condition(events,i)
                }
                
                
            } else if (events[i].type === 'take'){
                take_condition3(events,i)
                if (config.collected === 10){
                    dispatch("game-over")
                }
            } else if (events[i].type === "changeColor"){
                colorChoose(events,i)
            }
            
        }
    }

    char.nextMove -= 1

    if (char.nextMove === 0){
        char.nextMove = char.updateFrequency;
        if (char.x_vel !== 0 || char.y_vel !== 0){
            
            if (char.jump === undefined || char.jump === 0){
                char.x_vel = 0;
                char.y_vel = 0;
                char.passos ++;
                if (char.passos > config.limitPassos){
                    dispatch("game-over")
                }else{
                    dispatch("moved")
                }
                
            } else {
                if (config.matrix[Math.floor((char.position[1] + char.y_vel)/2)][Math.floor((char.position[0] + char.x_vel)/2)] === 1 &&
                    config.level === 5 ){
                    char.jump = 0;
                } else{
                    char.position[0] += char.x_vel;
                    char.position[1] += char.y_vel;
                    char.jump --
                }
                
                if (char.jump !== 0 && (char.position[0] + char.x_vel > max_matrix | 
                                        char.position[0] + char.x_vel < 1   |
                                        char.position[1] + char.y_vel > max_matrix  | 
                                        char.position[1] + char.y_vel < 1)){
                                            
                                            char.jump = 0;
                                        }
                
            }
            
        }
    }

    return entities;
}

export {GameLoop1}