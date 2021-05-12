import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//importing screens
import { Home } from './component/screens/Home'
import { Welcome} from './component/screens/Welcome'
import { LoginScreen} from './component/screens/LoginScreen'
import { RegisterScreen} from './component/screens/RegisterScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}  >
      <Stack.Navigator headerMode={false} >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
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

