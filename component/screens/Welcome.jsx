import React from 'react'
import { SafeAreaView, View,Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function Welcome({navigation}) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Image source={require('../../assets/office.jpg')} resizeMode="cover" style={{
                    width: '100%',
                    flex: 0.8
                }} />
                <View style={{flex: 0.10, marginVertical:30, marginHorizontal:10}}>
                    <Text style={{fontSize: 18, fontWeight: 400,fontStyle:'normal'}}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                    <Text style={{marginVertical: 5, fontSize: 15, fontStyle:'italic'}}>Sign in or register with your Ampersand email</Text>
                </View>
                <View style={{flex: 0.10,flexDirection:'row', justifyContent:'space-between', marginVertical:30, marginHorizontal:30}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")} ><Text style={styles.textUnderline}>REGISTER</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={styles.textUnderline}>SIGN IN</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    textUnderline: {
        fontSize: 17,
        fontWeight:600,
        borderBottomWidth: 2,
        borderBottomColor: '#CD001A',
    }
})