import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function RequestCard(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
      activeOpacity={0.6}
    >
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <View style={styles.row}>
          <Image
            style={{ width: 30, height: 30 }}
            source={props && props.path}
          />
          <View style={{ marginLeft: 10 }}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.title,
                  { color: props.active ? "#F90202" : "white" },
                ]}
              >
                {props && props.name}
              </Text>
              {props.active ? (
                <View style={styles.new}>
                  <Text style={{ color: "black", fontSize: 10 }}>
                    {props && props.number}
                  </Text>
                </View>
              ) : null}
            </View>
            <Text style={styles.value}>{props && props.value}</Text>
          </View>
        </View>
        <Text style={styles.value}>{props && props.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default RequestCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  new: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 16,
    height: 16,
    borderRadius: 16,
  },
  title: {
    textAlign: "center",
    color: "#F90202",
    fontSize: 16,
    marginRight: 6,
  },
  value: {
    fontSize: 12,
    color: "white",
    opacity: 0.4,
  },
});
