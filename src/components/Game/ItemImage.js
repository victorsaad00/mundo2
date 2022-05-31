import React, {Component} from "react";
import {View,ImageBackground} from 'react-native';
import { array, object, string,number } from 'prop-types';

export default class ItemImage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const x = this.props.position[0];
        const y = this.props.position[1];

        const path = this.props.path

        return (
            path !== undefined ?
            <ImageBackground source={path} resizeMode='stretch' style={{width: this.props.size, height: this.props.size,
        position: 'absolute',left: x* this.props.size,top: y*this.props.size}} /> :
        <View style={{width: this.props.size, height: this.props.size,backgroundColor: 'transparent',
            position: 'absolute',left: x* this.props.size,top: y*this.props.size}} />
        )
    }
}

ItemImage.propTypes = {
    path: number
}