import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';



export const ResetPassword = ({navigation}) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirm, setConfirm] = React.useState('')

        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, flexDirection:'column', justifyContent:'center'}}>
                    {/* topNav */}
                    <View style={{flex:0.10 ,backgroundColor:'red',justifyContent:'center'}}>
                        <View style={styles.topNave}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <AntDesign name="arrowleft" size={20} color="white" />
                            </TouchableOpacity>
                            <Text style={{color:'#fff', fontSize: 18}}>Reset Password</Text>
                            <View></View>
                        </View>
                    </View> 
    
                    {/* Image section */}
                    <Image source={require('../../../assets/signin.jpg')} 
                        style={{flex:0.20,width: '100%', justifyContent:'center'}} resizeMode='cover' />
    
                    {/* form section */}
                    <View style={{flex:0.70,flexDirection:'column',marginVertical:20,marginHorizontal: 10}}>
                        <TextInput 
                            placeholder="Email"
                            textContentType='email'
                            keyboardType='email-address'
                            editable
                            value={email}
                            onChangeText={email => setEmail(email)}
                            style={styles.input}
                        />
                        <TextInput 
                            placeholder="Password"
                            textContentType='password'
                            secureTextEntry={true}                        
                            editable
                            value={password}
                            onChangeText={password => setPassword(password)}
                            keyboardType='visible-password'
                            style={styles.input}
                        />
                        <TextInput 
                            placeholder="Confirm Password"
                            textContentType='password'
                            secureTextEntry={true}                        
                            editable
                            value={confirm}
                            onChangeText={confirm => setConfirm(confirm)}
                            keyboardType='visible-password'
                            style={styles.input}
                        />
                        <TouchableOpacity 
                        style={{
                            width:'100%', height:50 ,
                            borderRadius:5,
                            backgroundColor: 'red', 
                            alignItems:'center', 
                            justifyContent:"center",
                        }}>
                            <Text style={{color:'#fff', fontSize:16, fontWeight:600}}>Update Password</Text>
                        </TouchableOpacity>
    
                        <View style={{flexDirection:'row', marginVertical: 20}}>
                            <Text>Forgot?</Text>
                            <TouchableOpacity style={{marginHorizontal:3}}>
                                <Text style={{borderBottomWidth: 2, borderBottomColor:'red'}}>Reset Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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

