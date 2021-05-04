import * as React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

function FollowHeader(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props && props.navigation.goBack()}
        activeOpacity={0.5}
      >
        <Image
          style={{ width: 18, height: 20 }}
          source={require("../../assets/World/arrowBack.png")}
        />
      </TouchableOpacity>
      <ImageBackground
        style={{ width: 90, height: 90, marginLeft: 8 }}
        source={require("../../assets/World/user.png")}
      >
        {props && props.showIcon ? (
          <Image
            style={{
              width: 15,
              height: 15,
              alignSelf: "flex-end",
              position: "absolute",
              right: 3,
              top: 8,
            }}
            source={require("../../assets/Chat/verify.png")}
          />
        ) : null}
      </ImageBackground>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props && props.navigation.navigate("Notifications")}
      >
        <Image
          style={{ width: 18, height: 20 }}
          source={require("../../assets/Profile/bell.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default FollowHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingTop: 5,
  },
});
