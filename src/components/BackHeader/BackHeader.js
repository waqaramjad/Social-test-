import * as React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";

function BackHeader(props) {
  return (
    <View style={styles.container}>
      {props.show ? (
        <TouchableOpacity
          style={{ paddingHorizontal: 12 }}
          onPress={() => props.onPress()}
          activeOpacity={0.5}
        >
          <Image
            style={{ width: 13, height: 17 }}
            source={require("../../assets/Home/arrowBack.png")}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          activeOpacity={0.5}
          style={{ paddingHorizontal: 12 }}
        >
          <Image
            style={{ width: 13, height: 17 }}
            source={require("../../assets/Home/arrowBack.png")}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={{ width: 40, height: 30, resizeMode: "contain" , alignSelf:"center" }}
          source={require("../../assets/Home/100.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}></TouchableOpacity>
    </View>
  );
}

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
