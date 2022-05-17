const GameLoop = (entities, {touches, dispatch, events}) => {
    let char = entities.char;
    if (events.length){
        for(let i=0; i< events.length; i++){
            if (events[i].type == "move-left" && char.position[0] > 1){
                char.x_vel = -2 
            } else if (events[i].type == "move-right" && char.position[0] < 19){
                char.x_vel = 2
            }
            if (events[i].type == "move-up" && char.position[1] > 1){
                char.y_vel = -2 
            } else if (events[i].type == "move-down" && char.position[1] < 19){
                char.y_vel = 2
            }
        }
    }

    char.nextMove -= 1

    if (char.nextMove === 0){
        char.nextMove = char.updateFrequency;
        if (char.x_vel !== 0 || char.y_vel !== 0){
            char.position[0] += char.x_vel;
            char.position[1] += char.y_vel;
            char.x_vel = 0;
            char.y_vel = 0;
        }
    }

    return entities;
}

export {GameLoop}