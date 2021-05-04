import * as React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Input , Icon} from "react-native-elements";

const images = [
  {
    source: require("../../assets/Share/1.png"),
  },
  {
    source: require("../../assets/Share/2.png"),
  },
  {
    source: require("../../assets/Share/3.png"),
  },
  {
    source: require("../../assets/Share/4.png"),
  },
  {
    source: require("../../assets/Share/5.png"),
  },
];

function ShareModal(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.row, { alignItems: "flex-start" ,}]}>
        <View style={[styles.row, { alignItems: "center" }]}>
          <Image
            style={{
              width: 16,
              height: 14,
              resizeMode: "stretch",
              marginRight: 10,
              marginLeft:2
            }}
            source={require("../../assets/World/share.png")}
          />
          <Text style={styles.title}>Share </Text>
        </View>

        <View style={{ width: "50%" }}>
          <Input
            inputContainerStyle={{
              backgroundColor: "white",
              borderRadius: 20,
              paddingHorizontal: 4,
              height: 30,
            }}
            inputStyle={{
              fontSize: 15,
              color: "#6B6B6B",
              paddingHorizontal: 4,
            }}
            leftIcon={
              <Image
                style={{
                  width: 14,
                  height: 15,
                  resizeMode: "stretch",
                  marginLeft: 4,
                }}
                source={require("../../assets/Home/search.png")}
              />
            }
            placeholder="Search Contact"
          />
        </View>
       
      </View>
      <View style={{flexDirection:"row" ,marginTop:-10 , marginBottom: 20 }}>
        <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                    marginRight: 7,
                  }}
                  // key={i}
                  source={ require("../../assets/multiview.png")}

                />

<Text style={styles.title}>Invite to Multiview </Text>
        </View>
      <View style={styles.images}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {images &&
            images.map((val, i) => {
              return (
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "stretch",
                    marginRight: 7,
                  }}
                  key={i}
                  source={val.source}
                />
              );
            })}

          <TouchableOpacity onPress={props && props.onPress} style={styles.btn}>
            <Text style={styles.btnText}> Send</Text>
          </TouchableOpacity>
         
        </ScrollView>
        <View style={{flexDirection:"row", justifyContent:"space-between" , marginTop: 15}}>
            <TouchableOpacity
            disabled={true}
            >
            <Image
                  style={styles.shareImage}
                  // key={i}
                  source={ require("../../assets/clipboard.png")}

                />
               <Text style={styles.shareText}>Copy Profile URL</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={true}
            >
            <Image
                  style={styles.shareImage}
                  // key={i}
                  source={ require("../../assets/messages.png")}

                />
               <Text style={styles.shareText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={true}
            >
            <Image
                  style={styles.shareImage}
                  // key={i}
                  source={ require("../../assets/whatapp.png")}

                />
               <Text style={styles.shareText}>Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={true}
            >
            <Image
                  style={styles.shareImage}
                  // key={i}
                  source={ require("../../assets/mail.png")}

                />
               <Text style={styles.shareText}>Mail</Text>
            </TouchableOpacity>

          </View>
      </View>
    </View>
  );
}

export default ShareModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AE0101",
    height: 250,
    width: "100%",
    paddingHorizontal: 13,
    paddingVertical: 14,
  },
  shareImage :{
    width: 48,
    height: 48,
    resizeMode: "stretch",
    marginRight: 7,
    alignSelf:"center"
  } , 
  shareText :{
    fontSize: 14 , 
    color:"white" , 
    textAlign :"center" , 
    marginTop: 2
  } ,
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 15,
    color: "white",
  },

  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "white",
    width: 80,
  },
  btnText: {
    color: "#F90202",
  },
});
