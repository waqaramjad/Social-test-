import * as React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

function PodcastCard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={[styles.row, { width: "60%" }]}>
        <ImageBackground
          style={{ width: 85, height: 60 }}
          source={require("../../assets/World/series.png")}
        >
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <Text style={{ fontSize: 10, color: "white", opacity: 0.7 }}>
              1:42:43
            </Text>
          </View>
        </ImageBackground>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.title}>
            S10 E1 | Random Podcast Title | Sony ESPN
          </Text>
          <View style={styles.row}>
            <Text style={styles.views}>12.5k views</Text>
            <Text style={styles.date}>7 june 15:00</Text>
          </View>
        </View>
      </View>
      <View>
        <Image
          style={{ width: 24, height: 24, resizeMode: "stretch" }}
          source={require("../../assets/World/down.png")}
        />
      </View>
    </View>
  );
}

export default PodcastCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  views: {
    color: "white",
    fontSize: 10,
    opacity: 0.6,
  },
  date: {
    color: "white",
    fontSize: 10,
    opacity: 0.6,
  },
  title: {
    color: "white",
    fontSize: 14,
  },
});
