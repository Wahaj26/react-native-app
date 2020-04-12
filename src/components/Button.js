import React, { Component } from 'react';
import { View, StyleSheet,Linking, Text, Image, TouchableOpacity } from 'react-native';



const Button = ({onPress,children}) =>{

return (
<TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.buttonText}>
                       {children}
                      </Text>
                </TouchableOpacity>


);
};


const styles = {
    buttonText: {
        alignSelf:'center',
        color:'#89c2ff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    
    }
    
        ,
        button: {
            flex:1,
           alignSelf:'stretch',
            backgroundColor: '#fff',
            borderRadius:5,
            borderWidth:1,
            borderColor:'#89c2ff',
            marginLeft:5,
            marginRight:5,
          }
    


};

export default Button;