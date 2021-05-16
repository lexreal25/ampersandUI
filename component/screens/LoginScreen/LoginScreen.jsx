import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native'
import { TextInput } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';



const Loading = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          zIndex:1
        }}>
        <ActivityIndicator size='large' color='#3F800D' />
        <Text>LOGGING IN...</Text>
      </View>
    );
  };


export class LoginScreen extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email: '',
            password:'',
            showLoader: true
        }
    }


    //handling timeout for activityindicator

    componentDidMount(){
        setTimeout(() => {
            this.setState({showLoader: false})
        }, 3000)
    }

    //handling input changes
    handleInputChange = (name, value) =>{
        this.setState({[name]: value})
        console.log(value)
    }
  
    //form validation 

    validation = () => {
        const { email, password } = this.state
        const { navigation } = this.props
        if( email === 'max@mail.com' && password ==='12345'){
            //this.state.showLoader ? Loading() : navigation.navigate("ResetPassword")
            setTimeout(() => {}, 3000)
        }else{
            <View><Text>Email or Password is incorrecttry again!</Text></View>
        }
    }

    //Navigate to the previous page
   goBack = () => {
       const { navigation } = this.props;
       navigation.goBack()
   }

   //Navigate to the password reset screen
   goToPasswordResetScreen = () => {
       const { navigation, route } = this.props
       navigation.navigate("ResetPassword")
   }


    render(){
        const { email, password } = this.state
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, flexDirection:'column', justifyContent:'center'}}>
                {/* topNav */}
                <View style={{flex:0.10 ,backgroundColor:'red',justifyContent:'center'}}>
                    <View style={styles.topNave}>
                        <TouchableOpacity onPress={this.goBack}>
                            <AntDesign name="arrowleft" size={20} color="white" />
                        </TouchableOpacity>
                        <Text style={{color:'#fff', fontSize: 18}}>Sign In</Text>
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
                        textContentType='text'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(text) =>this.handleInputChange('email',text)}
                        editable
                        underlineColorAndroid="transparent"
                        style={styles.input}
                    />
                    <TextInput 
                        placeholder="Password"
                        textContentType='password'
                        secureTextEntry={true}                        
                        editable
                        value={password}
                        onChangeText={(text) =>this.handleInputChange('password',text)}
                        keyboardType='visible-password'
                        underlineColorAndroid="transparent"
                        style={styles.input}
                    /> 
                    {/* Submitting login details */}
                     <TouchableOpacity 
                    style={{
                        width:'100%', height:50 ,
                        borderRadius:5,
                        backgroundColor: 'red', 
                        alignItems:'center', 
                        justifyContent:"center",
                    }}
                        onPress={this.validation}
                    >
                        <Text style={{color:'#fff', fontSize:16, fontWeight:600}}>SIGN IN</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row', marginVertical: 20}}>
                        <Text>Forgot?</Text>
                        <TouchableOpacity style={{marginHorizontal:3}} onPress={this.goToPasswordResetScreen}>
                            <Text style={{borderBottomWidth: 2, borderBottomColor:'red'}}>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
    }
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

