import React, {useEffect, useState} from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';


export function RegisterScreen() {

    const [image, setImage] = useState(null)

    //userEffect works like componentDidMount in "class component"
    useEffect(() => {
        (async () => {
            if(Platform.OS !== 'web'){
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if(status !=='granted') {
                    alert('sorry permission required')
                }
            }
        })()
    }, []);

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        console.log(result)

        if(!result.cancelled){
            setImage(result.uri)
        }
    }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* TopNav */}
        <View
          style={{
            flex: 0.2,
            backgroundColor: "red",
            justifyContent: "center",
          }}
        >
          <View style={styles.topNave}>
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={20} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 18,letterSpacing: 0.5 }}>Register</Text>
            <View></View>
          </View>
        </View>
            <TouchableOpacity onPress={pickImage} style={{flex: 0.4, justifyContent:'center', alignItems:'center'}}>
                <View style={{flexDirection:'column', justifyContent:'space-between',position:'absolute', zIndex: 1}}>
                    <AntDesign name="user" size={40} color="red" style={{alignSelf:'center'}} />
                    <Text style={{color:'red', width: 140, marginVertical: 5}}>ADD PROFILE PHOTO</Text>
                </View>
                <Image source={{uri: image}}  style={{width:'100%', height:"100%"}} resizeMode='cover' />
            </TouchableOpacity>
        <View style={{ flex: 0.3, marginVertical: 30, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 400, fontStyle: "normal" }}>
            KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND
          </Text>
          <Text
            style={{ marginVertical: 5, fontSize: 15, fontStyle: "italic" }}
          >
            Sign in or register with your Ampersand email
          </Text>
        </View>
        <TouchableOpacity style={styles.register}>
          <Text style={{fontSize: 18,color:'#f7f7f7', letterSpacing: 0.5}}>REGISTER</Text>
        </TouchableOpacity>
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
  register: {
    flex: 0.1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 5,
  },
});
