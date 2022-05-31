import React, {Component} from "react";
import {View} from 'react-native';
import { array, object, string } from 'prop-types';

export default class Item extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const x = this.props.position[0];
        const y = this.props.position[1];

        const color = this.props.color

        return (
            color !== 'transparent' ?
            <View style={{width: this.props.size, height: this.props.size,backgroundColor: color,
                position: 'absolute',left: x* this.props.size,top: y*this.props.size}} /> :
            <View style={{width: this.props.size, height: this.props.size,backgroundColor: 'transparent',
                position: 'absolute',left: x* this.props.size,top: y*this.props.size}} />
        )
    }
}

Item.propTypes = {
    color: string
}