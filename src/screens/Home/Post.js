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
import PostHeader from "../../components/PostHeader/PostHeader";
import PostCard from "../../components/PostCard/PostCard";
import { Icon } from "react-native-elements";

const data = [
  {
    name: "Joe Gill",
    tags: "#Esports #Fortnite",
    show: true,
    path: require("../../assets/Home/4.png"),
    description:
      "Hello guys today I`ll be showing you some tips and tricks i use when i play #Fortnite",
  },
  {
    title: "Recommended for you",
    name: "Hugh Nunez & David Home",
    tags: "#Sports #Tenis",
    show: false,
    path: require("../../assets/Home/3.png"),
    description: "Today me and David will talk about our next exibition",
  },
];

function PostScreen({ navigation , route  } ,) {

  // let Post = 
  console.log('props',route ,navigation  )

  let sectionData = route?.params?.Posts?.Posts
  let title = route?.params?.Posts?.title
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <PostHeader navigation={navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <Text style={[styles.title]}>{title}</Text>
          {route?.params?.Posts &&
            sectionData.map((val, i) => {
              return (
                <PostCard
                  title={val.type == 'main' ? data.title : 'Recommended for you'}
                  show={false}
                  path={{uri:val.url}}
                  description={val.description}
                  name={val.name}
                  date={val.date}
                  profile = {{uri:val.profile_Url}}
                  tags={val.hashtags}
                  upCounts={val.upCounts}
                  downCounts={val.downCounts}
                  key={i}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}

export default PostScreen;

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
