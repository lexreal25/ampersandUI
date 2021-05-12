import React from 'react'
import { Text, SafeAreaView, Image, StyleSheet, View, TouchableOpacity } from 'react-native'


export  function Home({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source= {require('../../assets/ampersand.png')} style={{
                    width: 200,
                    height: 50,
                    tintColor:'#0000',
                }} />
                <View>
                    <Text style={{fontSize: 18}}>AMPERSAND</Text>
                    <Text style={{fontSize: 18, marginTop: 5}}>CONTACT</Text>
                </View>
                <TouchableOpacity style={{borderBottomWidth: 2,borderBottomColor: '#CD001A'}}
                    onPress={() => navigation.navigate('Welcome')}
                >
                    <Text style={{fontSize: 17}}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-between',
        marginVertical: 80
    }
})