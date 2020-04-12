import React, { Component } from 'react';
import { View, StyleSheet ,Button,Text} from 'react-native';
import App from '../../App';



//make component
const Header =(props) =>{
    const {mystyle} = styles;
return <View style={mystyle}><Text style={styles.container}>{props.headerText}</Text></View>

};


//to render

export default Header;


const styles = StyleSheet.create({
    mystyle:{ backgroundColor:'#F8F8F8',alignItems:'center',height:60,paddingTop:15,shadowColor:'#000',shadowOffset:{width:0,height:20},shadowOpacity:0.9,elevation:2,position:'relative'},
    container: {
        color: '#D89117',
        fontWeight: 'bold',
        fontSize: 30,
       
    },
  });