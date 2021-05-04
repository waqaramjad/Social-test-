import React from "react";

import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

function NotificationCard(props) {
  return (
    <TouchableOpacity
      style={[
        styles.card,

        {
          backgroundColor: props && props.bg,
        },
      ]}
      activeOpacity={0.6}
    >
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <View>
          <View style={styles.row}>
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: "stretch",
                marginRight: 10,
              }}
              source={props && props.leftPath}
            />
            <View>
              <Text style={styles.cardTitle}>{props && props.title}</Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  opacity: 0.5,
                }}
              >
                20 min ago
              </Text>
            </View>
            <View>
              <Text style={styles.cardValue}>{props && props.description}</Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  opacity: 0.5,
                }}
              ></Text>
            </View>
          </View>
        </View>
        <View>
          {props && props.rightPath ? (
            <ImageBackground
              style={{
                width: 50,
                height: 50,
                resizeMode: "stretch",
                marginRight: 10,
              }}
              imageStyle={{ borderRadius: 4, resizeMode: "stretch" }}
              source={props && props.rightPath}
            />
          ) : (
            <TouchableOpacity style={styles.button}>
              <Text style={{ fontSize: 12, opacity: 0.8, color: "white" }}>
                {props.btnName}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default NotificationCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 10,
    color: "white",
    fontWeight: "500",
    marginBottom: 4,
  },
  cardValue: {
    color: "white",
    fontSize: 10,
    marginLeft: 6,
    opacity: 0.4,
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#f90202",
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
  },
});
