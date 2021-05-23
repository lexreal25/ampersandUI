import React from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image, Text, Button} from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useState, useEffect } from 'react';

export function QRCode({navigation}) {

    //BarCode Scanner
    const [ hasPermission, setHasPermission ] = useState(null)
    const [ scanned, setScanned ] = useState(false)

    useEffect(() => {
         (async () => {
             const { status } = await BarCodeScanner.requestPermissionsAsync();
             setHasPermission(status === 'granted')
         })();
    }, [])

    const handleBarCodeScanned = ({ type, data}) => {
        setScanned(true);
        navigation.navigate("MemberScreen")
    }

    if( hasPermission === null){
        return <Text>Requesting for camera permission</Text>
    }
    if( hasPermission === false){
        return <Text>No access to camera</Text>
    }


    return (
      <SafeAreaView style={{ flex: 1, justifyContent:'space-between',backgroundColor:"#fff" }}>
          {/* TopNav */}
          <View style={{flex: 0.15,backgroundColor: "red",justifyContent: "center",}}>
            <View style={styles.topNave}>
              <View></View>
              <Image source={require('../../../assets/logo.png')}  style={{width: 150, height: 50, tintColor:'#f7f7f7'}} resizeMode="contain" />
              <AntDesign name="user" size={30} color="#f7f7f7" style={{ alignSelf: "center" }} />
            </View>
          </View>
          {/* Scanner container */}
          <View style={{flex: 0.75,flexDirection:'column', justifyContent:'space-between',marginHorizontal: 30, marginVertical:30}}>
              <View style={{flex:0.10 }}>
                  <Text style={{fontSize:17, marginVertical: 8}}>Exchange Contact Information</Text>
                  <Text style={{color:'#D9D9D6', fontSize:18}}>Scan this QR below to share your contacts</Text>
              </View>
              <View style={{flex: 0.55, alignItems:'center',justifyContent:'center'}}>
                  <BarCodeScanner 
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned }
                    style={StyleSheet.absoluteFillObject}
                  />
                  {scanned && <Button title={'Tap to scan again'} onPress={() => setScanned(false)} />}
              </View>
              <View style={{flex:0.10, flexDirection:'row'}}>
                  <Image source={require('../../../assets/profile.jpg')} resizeMode='cover' style={{width:40, height:40, borderRadius: 100}} />
                  <View style={{flexDirection:'column', marginHorizontal: 8}}>
                      <Text style={{fontSize: 17}}>User Name</Text>
                      <Text style={{color:'#7D7E8C', fontSize: 15}}>Chief Executive Officer</Text>
                  </View>
              </View>
          </View>
          {/* Bottm text container */}
          <View style={{flex: 0.1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderTopWidth:2, borderTopColor: 'silver',}}>
              <Text style={{marginHorizontal: 10}}>Want to share your contact?</Text>
              <TouchableOpacity style={{marginHorizontal: 10, borderWidth: 2, borderColor:'red', width: 75, alignItems:'center'}}>
                  <Text style={{color:'red'}}>Scan QR</Text>
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
})

