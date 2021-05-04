import * as React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";

function ChatRoomHeader(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props && props.navigation.goBack()}
        activeOpacity={0.5}
      >
        <Image
          style={{ width: 15, height: 17 }}
          source={require("../../assets/World/arrowBack.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        activeOpacity={0.5}
      >
        <Image
          style={{ width: 24, height: 24, marginLeft: 8 }}
          source={require("../../assets/Chat/ashChat.png")}
        />

        <Text style={{ marginLeft: 14, color: "white", opacity: 0.6 }}>
          Ashily Diaz
        </Text>
      </TouchableOpacity>
      {props && props.show ? (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => props && props.navigation.navigate("InboxOptions")}
        >
          <Image
            style={{ width: 24, height: 24, marginRight: 3 }}
            source={require("../../assets/Chat/dots.png")}
          />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
}

export default ChatRoomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    marginVertical: 5,
    paddingVertical: 15,
  },
});
