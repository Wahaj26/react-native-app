import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import t from 'tcomb-form-native'; 
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  password: t.String,
  age: t.Integer,
  terms: t.Boolean
});




export default class App extends Component {


  render() {

    return (

      <View style={styles.container}>
      <Header headerText={'Album App'}/>
      <AlbumList/>
      
      </View>
    );
  }
  handleSubmit = () =>{
    console.log('in form data response');
    var value = this.refs.form.getValue();
    console.log('value: ');
    console.log('value: ',value);
  }
}





const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
  },
});