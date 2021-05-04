import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FollowHeader from "../../components/FollowHeader/FollowHeader";

const mainTabs = [{ name: "Follow" }, { name: "Subscribe" }];

const data = [
  {
    name: "Photos",
  },
  {
    name: "Clips",
  },
  {
    name: "Highlights",
  },

  {
    name: "Flashback",
  },
  {
    name: "Schedule",
  },
];

const images = [
  {
    source: require("../../assets/Profile/1.png"),
  },
  {
    source: require("../../assets/Profile/2.png"),
  },
  {
    source: require("../../assets/Profile/3.png"),
  },
  {
    source: require("../../assets/Profile/4.png"),
  },
  {
    source: require("../../assets/Profile/5.png"),
  },
  {
    source: require("../../assets/Profile/4.png"),
  },
];

const years = [
  {
    year: "2000",
  },
  {
    year: "2011",
  },
  {
    year: "2012",
  },
  {
    year: "2013",
  },
  {
    year: "2014",
  },
  {
    year: "2015",
  },
  {
    year: "2016",
  },
  {
    year: "2017",
  },
  {
    year: "2018",
  },
];

const dates = [
  {
    day: "Mon",
    date: "27",
    month: "Sep",
  },
  {
    day: "Tue",
    date: "28",
    month: "Sep",
    active: true,
  },
  {
    day: "Wed",
    date: "29",
    month: "Sep",
  },
  {
    day: "Thu",
    date: "30",
    month: "Sep",
  },
  {
    day: "Fri",
    date: "29",
    month: "Sep",
  },
  {
    day: "Sat",
    date: "30",
    month: "Sep",
  },
];

function FollowProfileScreen({ navigation }) {
  const [activeTab, setTab] = React.useState("Follow");
  const [activeData, setActiveData] = React.useState("Photos");

  const [activeYear, setActiveYear] = React.useState("2014");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <FollowHeader showIcon={true} navigation={navigation} />
      <ScrollView>
        <View style={styles.introSection}>
          <Text style={[styles.name, { fontWeight: "bold" }]}>Ashley Diaz</Text>

          <Text style={styles.bio}>
            Dream so big you get uncomfortable telling small minded people
          </Text>

          <View
            style={[
              styles.row,
              {
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginVertical: 15,
              },
            ]}
          >
            <View>
              <Text style={styles.number}>250K</Text>
              <Text style={styles.title}>approvals</Text>
            </View>
            <View style={{ height: 15, width: 1, backgroundColor: "white" }} />
            <View>
              <Text style={styles.number}>250K</Text>
              <Text style={styles.title}>Followers</Text>
            </View>
            <View style={{ height: 15, width: 1, backgroundColor: "white" }} />

            <View>
              <Text style={styles.number}>500</Text>
              <Text style={styles.title}>Following</Text>
            </View>
          </View>

          <View
            style={[styles.row, { alignSelf: "center", marginVertical: 10 }]}
          >
            {mainTabs &&
              mainTabs.map((val, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => setTab(val.name)}
                    style={[
                      activeTab === val.name
                        ? styles.activeBtn
                        : styles.inActiveBtn,
                      { width: 80 },
                    ]}
                    activeOpacity={0.6}
                  >
                    <Text
                      style={{
                        color: activeTab === val.name ? "white" : "black",
                        fontSize: 12,
                      }}
                    >
                      {val.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}

            <TouchableOpacity activeOpacity={0.5}>
              <Image
                style={{ width: 18, height: 20, marginLeft: 15 }}
                source={require("../../assets/Profile/payment.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChatRoom")}
              activeOpacity={0.5}
            >
              <Image
                style={{ width: 24, height: 30, marginLeft: 15 }}
                source={require("../../assets/Profile/chat.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
          activeOpacity={0.7}
          // onPress={() => setModalVisible(!modalVisible)}
        >
          {/* <Text style={styles.number}></Text> */}

          <Text style={{fontSize:16 , color:"white" , marginLeft: 10 }}>1:1</Text>
        </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 10 }}>
            <ScrollView horizontal>
              {data &&
                data.map((val, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => setActiveData(val.name)}
                      style={
                        activeData === val.name
                          ? styles.activeBtn
                          : [
                              styles.inActiveBtn,
                              { backgroundColor: "transparent" },
                            ]
                      }
                      activeOpacity={0.6}
                    >
                      <Text
                        style={{
                          color: "white",
                          opacity: 0.8,
                        }}
                      >
                        {val.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>

            {activeData === "Flashback" ? (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <ScrollView horizontal>
                  {years &&
                    years.map((val, i) => {
                      return (
                        <TouchableOpacity
                          key={i}
                          onPress={() => setActiveYear(val.year)}
                        >
                          {activeYear === val.year ? (
                            <View>
                              <Image
                                style={{
                                  width: 14,
                                  height: 10,
                                  alignSelf: "center",
                                  marginTop: 5,
                                }}
                                source={require("../../assets/Home/dow.png")}
                              />
                              <Text
                                style={[styles.title, { marginHorizontal: 10 }]}
                              >
                                {val.year}
                              </Text>
                            </View>
                          ) : (
                            <View>
                              <Text style={{ height: 10, marginTop: 5 }}></Text>
                              <Text
                                style={[styles.title, { marginHorizontal: 10 }]}
                              >
                                {val.year}
                              </Text>
                            </View>
                          )}
                        </TouchableOpacity>
                      );
                    })}
                </ScrollView>

                <View style={[styles.row, { flexWrap: "wrap", marginTop: 5 }]}>
                  {images &&
                    images.map((val, i) => {
                      return (
                        <Image
                          source={val.source}
                          key={i}
                          style={{
                            width: "28%",
                            height: 115,
                            margin: "2%",
                            resizeMode: "stretch",
                          }}
                        />
                      );
                    })}
                </View>
              </View>
            ) : activeData === "Schedule" ? (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <ScrollView horizontal>
                  {dates &&
                    dates.map((val, i) => {
                      return (
                        <View key={i} style={{ marginHorizontal: 12 }}>
                          <Text
                            style={{
                              color: "white",
                              opacity: 0.6,
                              paddingHorizontal: 5,
                              fontSize: 13,
                              textTransform:"capitalize"
                            }}
                          >
                            {val.day}
                          </Text>
                          <View
                            style={{
                              marginVertical: 5,
                              backgroundColor: val.active
                                ? "red"
                                : "transparent",
                              paddingHorizontal: 7,
                              justifyContent: "center",
                              alignItems: "center",
                              paddingVertical: 3,
                              borderRadius: 6,
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                opacity: 0.6,
                                fontSize: 13,
                              }}
                            >
                              {val.date}
                            </Text>
                            <Text
                              style={{
                                color: "white",
                                opacity: 0.6,
                                fontSize: 13,
                                textTransform:"capitalize"
                              }}
                            >
                              {val.month}
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                </ScrollView>

                <View style={[styles.row, { flexWrap: "wrap", marginTop: 5 }]}>
                  {images &&
                    images.map((val, i) => {
                      return (
                        <Image
                          source={val.source}
                          key={i}
                          style={{
                            width: "28%",
                            height: 115,
                            margin: "2%",
                            resizeMode: "stretch",
                          }}
                        />
                      );
                    })}
                </View>
              </View>
            ) : (
              <View
                style={{
                  marginVertical: 10,
                  alignItems: "center",
                }}
              >
                <View style={[styles.row, { flexWrap: "wrap" }]}>
                  {images &&
                    images.map((val, i) => {
                      return (
                        <Image
                          source={val.source}
                          key={i}
                          style={{
                            width: "28%",
                            height: 115,
                            margin: "2%",
                            resizeMode: "stretch",
                          }}
                        />
                      );
                    })}
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default FollowProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: "2%",
    paddingVertical: 10,
  },

  introSection: {
    marginVertical: 10,
  },
  name: {
    textAlign: "center",
    color: "#F90202",
    fontSize: 16,
    marginRight: 6,
  },
  bio: {
    fontSize: 12,
    color: "white",
    opacity: 0.5,
    alignSelf: "center",
    marginVertical: 6,
    textAlign: "center",
    width: "90%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    color: "#F90202",
    fontSize: 15,
    marginTop: 2,
  },

  number: {
    color: "white",
    opacity: 0.7,
    textAlign: "center",
  },
  activeBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#F90202",
  },
  inActiveBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "white",
  },
});
