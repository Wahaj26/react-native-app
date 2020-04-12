import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class myComponent extends Component {

    render() {

        return (

            <View>

                <Text>
                   {this.props.message}
                </Text>
            </View>


        );
    }


}