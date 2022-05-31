import React, {Component,useState,useEffect} from "react";
import {View,ImageBackground} from 'react-native';
import { array, object, string,number } from 'prop-types';

// export default class ItemImage extends Component {
//     constructor(props) {
//         super(props);
//     }

 export default ActiveCrystal = (props) => {

        const actived = props.actived;
        const path = props.path

        return (
            actived ?
            <ImageBackground source={path} resizeMode='stretch' style={{width: 27, height: 18,
                position: 'absolute',left: props.x* 9.225,top: props.y*9.225 +1}} /> :
                <View />
        );
        
        // (
            
        // <View style={{width: this.props.size, height: this.props.size,backgroundColor: 'transparent',
        //     position: 'absolute',left: x* this.props.size,top: y*this.props.size}} />
        // )
    }


// ItemImage.propTypes = {
//     path: array
// }