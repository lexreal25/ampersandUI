import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';



export function RegisterScreen() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                {/* TopNav */}
                <View style={{flex:0.10 ,backgroundColor:'red',justifyContent:'center'}}>
                    <View style={styles.topNave}>
                        <TouchableOpacity >
                            <AntDesign name="arrowleft" size={20} color="white" />
                        </TouchableOpacity>
                        <Text style={{color:'#fff', fontSize: 18}}>Sign In</Text>
                        <View></View>
                    </View>
                </View> 
                {/* ImagePicker */}
                <Image />
                {/* Input form */}
                <View></View>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    topNave: { 
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center',
        marginHorizontal:10
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor:'silver',
        marginVertical: 10,
    }
})
