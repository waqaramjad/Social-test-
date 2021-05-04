import * as React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";

function ProfileHeader(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props && props.navigation.navigate("Notifications")}
        activeOpacity={0.5}
      >
        <Image
          style={{ width: 18, height: 20 }}
          source={require("../../assets/Profile/bell.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={{ width: 90, height: 90, marginLeft: 8 }}
          source={require("../../assets/Profile/user.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props && props.navigation.navigate("Launch")}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../assets/Profile/cam.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    paddingTop: 4,
  },
});
