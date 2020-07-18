import 'react-native-gesture-handler'

import React, { Component, useState } from 'react';

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

export default function SignIn({ navigation }) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const pressHandler = () => {
        Alert.alert('Username '+ username);
        setUsername('');
    }

    const forgotPress = () => {
        navigation.navigate('Forgot Password', { username: username })
    }

    return(
        <View style={styles.container}>
          
          <Image style={styles.image} source={require('../img/photo.jpg')}  />
          
          <Text style={styles.login}>
            LOGIN
          </Text>
          
          <Text>Enter Username: </Text>
          <TextInput 
            style={styles.input} 
            placeholder='Username' 
            defaultValue='' 
            value={username}
            onChangeText={(username) => setUsername(username) } />
          
          <Text>Enter Password: </Text>
          <TextInput 
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
      alignSelf: 'stretch',
      marginLeft: 20,
      marginRight: 20,
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
    },

    test: {
        padding: 10,
        backgroundColor: '#fff',
        color: 'darkblue',
        alignItems: 'center'
    }
  });
  
  