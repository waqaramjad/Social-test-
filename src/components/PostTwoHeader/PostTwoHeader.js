import * as React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";

function PostTwoHeader(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props && props.navigation.goBack()}
        activeOpacity={0.5}
      >
        <Image
          style={{ width: 18, height: 20 }}
          source={require("../../assets/Home/arrowBack.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../../assets/Home/100.png")}
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

export default PostTwoHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
