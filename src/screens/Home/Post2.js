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
} from "react-native";
import PostTwoHeader from "../../components/PostTwoHeader/PostTwoHeader";
import { Icon } from "react-native-elements";
import PostTwoCard from "../../components/PostTwoCard/PostTwoCard";
function PostTwoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <PostTwoHeader navigation={navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <Text style={[styles.title]}>Photos</Text>

          <PostTwoCard />
        </View>
      </ScrollView>
    </View>
  );
}

export default PostTwoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: "2%",
    paddingVertical: 10,
  },

  searchContainer: {
    marginTop: 20,
    flexDirection: "row",
    marginBottom: -20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    height: 37,
    borderRadius: 8,
    paddingHorizontal: 6,
    width: "28%",
  },
  text: {
    fontSize: 15,
    color: "#6B6B6B",
    marginRight: 3,
  },
  body: {
    paddingHorizontal: 6,
  },
  title: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 4,
    textAlign: "center",
  },
  cardContainer: {
    marginVertical: 10,
  },
});
