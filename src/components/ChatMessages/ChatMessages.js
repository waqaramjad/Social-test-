import React from "react";
import {
  StyleSheet,
  Image,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

export default function ChatMessages(props) {
  const [selectRight, setRight] = React.useState(false);
  const [selectLeft, setLeft] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      {props &&
        props.messages.map((val, i) => {
          return (
            <>
              {val.type === "right" ? (
                <View style={styles.right}>
                  <View style={styles.rightMessage}>
                    <Text style={styles.rightText}>{val.message}</Text>
                  </View>
                  <View
                    style={[
                      styles.row,
                      {
                        justifyContent: "space-between",
                        width: "95%",
                        marginVertical: 4,
                      },
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => setRight(!selectRight)}
                      activeOpacity={0.7}
                    >
                      <View
                        style={{
                          backgroundColor: selectRight ? "red" : "white",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 7,
                          paddingHorizontal: 7,
                          paddingVertical: 2,
                          marginRight: 6,
                        }}
                      >
                        {selectRight ? (
                          <Image
                            style={{
                              width: 14,
                              height: 10,
                              resizeMode: "stretch",
                              alignSelf: "center",
                              marginTop: 1,
                            }}
                            source={require("../../assets/Home/inActive100.png")}
                          />
                        ) : (
                          <Image
                            style={{
                              width: 14,
                              height: 10,
                              resizeMode: "stretch",
                              alignSelf: "center",
                              marginTop: 1,
                            }}
                            source={require("../../assets/Home/active100.png")}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    {val.deliverd ? (
                      <Text style={{ color: "white", opacity: 0.5 }}>
                        Deliverd
                      </Text>
                    ) : null}
                  </View>
                </View>
              ) : (
                <View style={styles.left}>
                  <View style={styles.leftMessage}>
                    <Text style={styles.leftText}>{val.message}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setLeft(!selectLeft)}
                    activeOpacity={0.7}
                  >
                    <View
                      style={{
                        backgroundColor: selectLeft ? "red" : "white",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 7,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        marginRight: 6,
                        width: 24,
                        marginTop: 6,
                        marginLeft: 20,
                      }}
                    >
                      {selectLeft ? (
                        <Image
                          style={{
                            width: 14,
                            height: 10,
                            resizeMode: "stretch",
                            alignSelf: "center",
                            marginTop: 1,
                          }}
                          source={require("../../assets/Home/inActive100.png")}
                        />
                      ) : (
                        <Image
                          style={{
                            width: 14,
                            height: 10,
                            resizeMode: "stretch",
                            alignSelf: "center",
                            marginTop: 1,
                          }}
                          source={require("../../assets/Home/active100.png")}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    alignSelf: "flex-start",
    width: "67%",
    marginBottom: 15,
  },
  leftMessage: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: "#1C1C1F",
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
    borderTopEndRadius: 15,
    marginLeft: 10,
  },
  leftText: {
    color: "white",
    fontSize: 14,
    opacity: 0.9,
  },

  leftContainer: {
    width: 25,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 3,
    marginVertical: 5,
    marginLeft: 5,
    alignSelf: "flex-end",
  },
  right: {
    alignSelf: "flex-end",
    width: "67%",
    marginBottom: 15,
  },
  rightMessage: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: "#F90202",
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
    borderTopEndRadius: 15,
    marginRight: 10,
  },
  rightText: {
    color: "white",
    fontSize: 14,
    opacity: 0.7,
  },
  rightContainer: {
    width: 25,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 3,
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
