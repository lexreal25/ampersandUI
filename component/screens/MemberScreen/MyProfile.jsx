import React from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';



export default function MyProfile({navigation}) {
    return (
      <SafeAreaView style={{flex:1, backgroundColor:'#ffff'}}>
        <View style={{flex:1}}>
        {/* TopNav */}
        <View style={{flex: 0.15,backgroundColor: "red",justifyContent: "center"}}>
          <View style={styles.topNave}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={20} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 18, letterSpacing: 0.5 }}>
              My Profile
            </Text>
            <View></View>
          </View>
        </View>
        {/* End of topNav */}

        {/* MainPage begins */}
        <View style={{flex:0.85, flexDirection:'column'}}>
            <View style={{flex:0.2, flexDirection:'column', marginHorizontal: 20, marginVertical: 40}}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../../../assets/profile.jpg')} resizeMode='cover' style={{ width: 50, height: 50, borderRadius: 100 }} />
                    <View style={{marginHorizontal: 15}}>
                        <Text style={{fontSize: 17}}>Dontey Shark Main</Text>
                        <Text style={{fontSize: 16, color:"#7D7E8C"}}>Procurement Director</Text>
                    </View>
                </View>
                 {/* Social media */}
                <View style={{flexDirection: 'row',marginHorizontal: 5, marginVertical: 15}}>
                    <Entypo name="twitter-with-circle" size={26} color="black" />
                    <Entypo name="linkedin-with-circle" size={26} color="black" style={styles.userText} />
                </View>
            </View>
            <View style={{flex: 0.6,flexDirection:'column',marginHorizontal: 20}}>
                <View style={styles.userDetails}>
                    <Foundation name="telephone" size={24} color="ash" /> 
                    <Text style={styles.userText}>+233 0254 2045 02</Text>
                </View>
                <View style={styles.userDetails}>
                    <FontAwesome name="envelope-o" size={24} color="ash" />
                    <Text style={styles.userText}>Sonnymail@hoodinMails.com</Text>
                </View>
                <View style={styles.userDetails}>
                    <EvilIcons name="location" size={24} color="ash" />
                    <Text style={styles.userText}>10 Avenue, Old Lady Lane</Text>
                </View>
            </View>
         </View>
        {/* End of mainPage */}
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topNave: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 10,
    },
    userDetails:{
        flexDirection:'row',
        marginVertical: 10
    },
    userText: {
        marginLeft: 8
    }
})