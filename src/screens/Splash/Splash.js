import React from "react";
import { Image, Text, View, StatusBar, StyleSheet } from "react-native";

export default function SpalshScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("MainApp");
  }, 2000);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />

      <Image
        style={{
          width: 130,
          height: 100,
          alignSelf: "center",
          resizeMode: "stretch",
        }}
        source={require("../../assets/Home/100.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "2%",
    paddingVertical: 10,
  },
});
