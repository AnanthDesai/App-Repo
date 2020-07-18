import React from 'react'
import { Text, View } from 'react-native'

export default function ForgotPassword({ route, navigation }) {

    const { username } = route.params;

    return(
        <View>
            <Text>Forgot Password</Text>
            <Text>{ username }</Text>
        </View>
    );
}