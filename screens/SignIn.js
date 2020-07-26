import 'react-native-gesture-handler'

import React, { Component, useState, useRef } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingViewComponent,
  Keyboard,
  TouchableOpacity
} from 'react-native';

import ForgotPassword from './ForgotPassword'
import { createStackNavigator } from '@react-navigation/stack';

export default function SignIn({ navigation }) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const credentials = {
      username: username,
      password: password
    }

    

    const pressHandler = () => {
      if(credentials.username === '' || credentials.password === ''){
        if(credentials.username === ''){
          usernameInput.current.focus();
          Alert.alert('Field cannot be empty!', 'Username cannot be empty!');
        }
        else{
          passwordInput.current.focus();
          Alert.alert('Field cannot be empty!', 'Password cannot be empty!');
        }
      }
      else{
        const options = {
        method: "post",
        headers: {
          "Accept": "application/json",
          'Content-Type': "application/json"
        },
        body: JSON.stringify(credentials),
        }
        fetch('http://192.168.1.12:3000/', options)
        .then((response) => response.json())
        .then((res) => console.log(res.status))
        .then(console.log('sent'))
        .catch((err) => console.log(err))
    }
  }

    const forgotPress = () => {
        navigation.navigate('Forgot Password', { username: username })
    }

    const passwordInput = useRef();
    const usernameInput = useRef();

    return(
        <View style={styles.container}>
          
          <Image style={styles.image} source={require('../img/photo.jpg')}  />
          
          <Text style={styles.login}>
            LOGIN
          </Text>
          
          <TextInput 
            style={styles.input} 
            placeholder='Username' 
            defaultValue='' 
            value={username}
            ref={usernameInput}
            maxLength={11}
            onSubmitEditing={() => passwordInput.current.focus()}
            onChangeText={(username) => setUsername(username) } 
            blurOnSubmit={false}/>
          
          <TextInput 
            ref={passwordInput}
            style={styles.input}
            secureTextEntry={true} 
            defaultValue=''
            value={password}
            onChangeText={(password) => setPassword(password)}  
            placeholder='Password'/>
        <View style={styles.footer}>
          <Button
            style={styles.signin}
            title='Sign In'
            onPress={pressHandler}
          />
        </View>

        <TouchableOpacity 
            onPress={forgotPress}
            style={styles.test}>
                <Text>Forgot Password</Text>
        </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 0.8,
      backgroundColor: '#fff',
      margin: 20,
      height: '100%',
      position: 'relative',
      justifyContent: 'center',
      alignContent:'center',
      justifyContent: 'space-between',
    },
    
    login: {
      color: '#000000',
      fontSize: 40,
      alignSelf: 'center'
    },
  
    image: {
      alignSelf: 'center'
    },

    input: {
      textAlign: 'center',
      borderColor: '#000000',
      borderWidth: 1,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 25
      
    },
    footer: {
      flexDirection: 'column',
      alignContent: 'flex-start',
    },
    forgot: {
            margin: 15,
            alignSelf: 'center',
            backgroundColor: 'lightblue',
            padding: 10,
            color: '#fff'
    },
    signin: {
        margin: 15, 
        borderRadius: 25,
        padding: 15
    },

    test: {
        padding: 10,
        backgroundColor: '#fff',
        color: 'darkblue',
        alignItems: 'center'
    }
  });
  
  