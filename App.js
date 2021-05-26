import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//importing screens
import { Home } from './component/screens/WelcomeScreen/Home'
import { Welcome} from './component/screens/WelcomeScreen/Welcome'
import { LoginScreen} from './component/screens/LoginScreen/LoginScreen'
import { ResetPassword } from './component/screens/LoginScreen/ResetPassword'
import { RegisterScreen} from './component/screens/RegisterScreen/RegisterScreen'
import { ConfirmRegistrationScreen } from './component/screens/RegisterScreen/ConfirmRegistrationScreen';
import { QRCode } from './component/screens/HomeScreen/QRCode';
import { BarCode } from './component/screens/HomeScreen/BarCode';
import MemberProfile from './component/screens/MemberScreen/MemberProfile';
import MyProfile from './component/screens/MemberScreen/MyProfile';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}  >
      <Stack.Navigator headerMode={false} >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='ConfirmRegistration' component={ConfirmRegistrationScreen} />
        <Stack.Screen name='ResetPassword' component={ResetPassword}/>
        <Stack.Screen name='BarCode' component={BarCode} />
        <Stack.Screen name='QRCode' component={QRCode} />
        <Stack.Screen name='Member' component={MemberProfile} />
        <Stack.Screen name='MyProfile' component={MyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

