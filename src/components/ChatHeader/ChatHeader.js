import * as React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";

function ChatHeader(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props && props.navigation.navigate("Notifications")}
        activeOpacity={0.5}
      >
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../../assets/Home/bell.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={{ width: 40, height: 40, resizeMode: "contain" }}
          source={require("../../assets/hundredmain.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props && props.navigation.navigate("Launch")}
      >
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../../assets/Home/rocket.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "2%",
  },
});
