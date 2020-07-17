import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { createAppContainer } from '@react-navigation/native'
import SignIn from '../screens/SignIn'
import ForgotPassword from '../screens/ForgotPassword'

const screens = {
    SignIn: {
        screen: SignIn
    },
    ForgotPassword: {
        screen: ForgotPassword
    }
}

const StartUpStack = createStackNavigator();

export default createAppContainer(StartUpStack);