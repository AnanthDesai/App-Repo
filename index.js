/**
 * @format
 */
import React, { Component, useState } from 'react';
import {
  Text,
} from 'react-native';
import Navigator from './routes/StartUpStack'


import {AppRegistry} from 'react-native';
import SignIn from './App/screens/SignIn'
import {name as appName} from './app.json';
 
export default class Main extends Component{
    
        
    render(){ 
        return(  
            <SignIn />
        ); 
    }
}

AppRegistry.registerComponent(appName, () => Main);
