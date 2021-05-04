import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

function HomeCard(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onPress}
      style={styles.card}
    >
      <View>
        <ImageBackground
          imageStyle={{ borderRadius: 8, resizeMode: "stretch" }}
          style={{ width: "100%", height: 140 }}
          source={props && props.path}
        />
      </View>
      <View style={{ marginTop: 5, paddingLeft: 4 }}>
        <View style={styles.cardRow}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {props && props.title}
          </Text>
          {/* <Image
            style={{
              width: 20,
              height: 15,
              resizeMode: "stretch",
            }}
            source={props && props.sideIcon}
          /> */}
        </View>
        <Text style={styles.cardValue}>{props && props.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default HomeCard;

const styles = StyleSheet.create({
  card: {
    width: 210,
    marginRight: 15,
    marginTop: 4,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  cardTitle: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
    width: "60%",
  },
  cardValue: {
    color: "white",
    opacity: 0.5,
    fontSize: 14,
    marginTop: 2,
  },
});
