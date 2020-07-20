/**
 * @format
 */
import React, { Component, useState } from 'react';
import {
  Text,
} from 'react-native';

import StartUpStack from './routes/StartUpStack'
import { NavigationContainer } from '@react-navigation/native'


import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import SignIn from './screens/SignIn';
import ForgotPassword from './screens/ForgotPassword'
 
export default class Main extends Component{
    
        
    render(){ 
        return(  
           <NavigationContainer>
                <StartUpStack.Navigator headerMode='none'>
                    <StartUpStack.Screen name="Sign In" component={SignIn} />
                    <StartUpStack.Screen name="Forgot Password" component={ForgotPassword}/>
                </StartUpStack.Navigator>
           </NavigationContainer>
          
        ); 
    }
}

AppRegistry.registerComponent(appName, () => Main);
