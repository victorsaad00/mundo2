import React, {Component,useState,useEffect} from "react";
import {View,ImageBackground} from 'react-native';
import { array, object, string,number } from 'prop-types';

// export default class ItemImage extends Component {
//     constructor(props) {
//         super(props);
//     }

 export default ColorsMatrix = (props) => {

        const matrix = props.matrix;

        const [propsMatrix,setPropsMatrix] = useState([])

        useEffect(() => {
            console.log(matrix);
            let props_matrix = []

            for (let i = 0; i < matrix.length; i++){
                for (let j = 0; j < matrix[i].length; j++){
                    props_matrix.push({
                        "code": i*10 + j,
                        "top": i*2 + 1,
                        "left": j*2 + 1,
                        "value": matrix[j][i]
                    })
                }
            }
            setPropsMatrix(props_matrix)
        },[matrix]);

        

        const pathValues = {
            1: require("@root/assets/level/Fase_3/Flag_floor_blue.png"),
            2: require("@root/assets/level/Fase_3/Flag_floor_green.png"),
            3: require("@root/assets/level/Fase_3/Flag_floor_red.png")
        }

        return (
            <View style={{position:'absolute',width:21*18,height:21*18}} >
                {propsMatrix.map(element => {
                    return <ImageBackground key={element.code} source={pathValues[element.value]} resizeMode='stretch' style={{width: 18, height: 18,
                        position: 'absolute',left: element.left* 18 - 1,top: element.top*18}} />
                })}
            </View>
        );
        
        // (
            
        // <View style={{width: this.props.size, height: this.props.size,backgroundColor: 'transparent',
        //     position: 'absolute',left: x* this.props.size,top: y*this.props.size}} />
        // )
    }


// ItemImage.propTypes = {
//     path: array
// }