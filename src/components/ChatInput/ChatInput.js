import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Input, Icon } from "react-native-elements";

function ChatInput(props) {
  return (
    <View
      style={[
        styles.row,
        { justifyContent: "space-between", paddingHorizontal: 10 },
      ]}
    >
      <View style={styles.row}>
        <Image
          style={{ width: 22, height: 17 }}
          source={require("../../assets/Chat/cam.png")}
        />
        <Image
          style={{ width: 24, height: 17, marginLeft: 8 }}
          source={require("../../assets/Chat/store.png")}
        />
      </View>

      <View style={{ width: "73%" }}>
        <Input
          inputContainerStyle={{
            backgroundColor: "black",
            borderRadius: 20,
            paddingHorizontal: 4,
            height: 37,
            borderWidth: 1,
            borderColor: "grey",
            marginTop: 30,
          }}
          inputStyle={{
            fontSize: 15,
            color: "#6B6B6B",
            paddingHorizontal: 4,
          }}
          rightIcon={
            <Image
              style={{ width: 22, height: 22 }}
              source={require("../../assets/Chat/voice.png")}
            />
          }
          placeholder="Type Message"
        />
      </View>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={{
            width: 24,
            height: 24,
            marginRight: 10,
            resizeMode: "stretch",
          }}
          source={require("../../assets/Chat/send.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ChatInput;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
