import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { AntDesign } from "@expo/vector-icons";
// import  QRCodeScanner  from 'react-native-qrcode-scanner'
// import { RNCamera } from 'react-native-camera';



export  class BarCode extends Component {

    // onSuccess = e => {
    //     Linking.openURL(e.data).catch(err =>
    //       console.error('An error occured', err)
    //     );
    //   };

    render() {
        return (
          <SafeAreaView style={{flex:1}}>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                backgroundColor: "#fff",
              }}
            >
              {/* TopNav */}
              <View
                style={{
                  flex: 0.15,
                  backgroundColor: "red",
                  justifyContent: "center",
                }}
              >
                <View style={styles.topNave}>
                  <View></View>
                  <Image
                    source={require("../../../assets/logo.png")}
                    style={{ width: 150, height: 50, tintColor: "#f7f7f7" }}
                    resizeMode="contain"
                  />
                  <AntDesign
                    name="user"
                    size={30}
                    color="#f7f7f7"
                    style={{ alignSelf: "center" }}
                  />
                </View>
              </View>
              {/* Scanner container */}
              <View
                style={{
                  flex: 0.75,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginHorizontal: 30,
                  marginVertical: 30,
                }}
              >
                <View style={{ flex: 0.1 }}>
                  <Text style={{ fontSize: 17, marginVertical: 8 }}>
                    Exchange Contact Information
                  </Text>
                  <Text style={{ color: "#D9D9D6", fontSize: 18 }}>
                    Scan this QR below to share your contacts
                  </Text>
                </View>
                <TouchableOpacity style={{flex: 0.55,alignItems: "center",justifyContent: "center"}} onPress={() => this.props.navigation.navigate("QRCode")} >
                  <AntDesign name="qrcode" size={200} color="black" resizeMode='contain' />
                </TouchableOpacity>
                  {/* <QRCodeScanner
                    onRead={this.onSuccess}
                    flashMode={RNCamera.Constants.FlashMode.torch}
                    topContent={
                      <Text>
                        Go to{" "}
                        <Text >
                          wikipedia.org/wiki/QR_code
                        </Text>{" "}
                        on your computer and scan the QR code.
                      </Text>
                    }
                    bottomContent={
                      <TouchableOpacity>
                        <Text>OK. Got it!</Text>
                      </TouchableOpacity>
                    }
                  /> */}
                <View style={{ flex: 0.1, flexDirection: "row" }}>
                  <Image
                    source={require("../../../assets/profile.jpg")}
                    resizeMode="cover"
                    style={{ width: 40, height: 40, borderRadius: 100 }}
                  />
                  <View
                    style={{ flexDirection: "column", marginHorizontal: 8 }}
                  >
                    <Text style={{ fontSize: 17 }}>User Name</Text>
                    <Text style={{ color: "#7D7E8C", fontSize: 15 }}>
                      Chief Executive Officer
                    </Text>
                  </View>
                </View>
              </View>
              {/* Bottm text container */}
              <View
                style={{
                  flex: 0.1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTopWidth: 2,
                  borderTopColor: "silver",
                }}
              >
                <Text style={{ marginHorizontal: 10 }}>
                  Want to add a new connection?
                </Text>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 10,
                    borderWidth: 2,
                    borderColor: "red",
                    width: 75,
                    alignItems: "center",
                  }}
                  onPress={() => this.props.navigation.navigate("QRCode") }
                >
                  <Text style={{ color: "red" }}>Scan QR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    topNave: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 10,
    },
})