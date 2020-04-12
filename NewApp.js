import React, { Component } from 'react';
import { View } from 'react-native';
import myComponent from './myComponent';



export default class NewApp extends Component {


    render() {

        return (
            <View>
                <myComponent message="here message with props" />
            </View>
        );


    }

}