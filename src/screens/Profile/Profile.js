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
import { Icon } from "react-native-elements";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

const mainTabs = [{ name: "Me" }, { name: "Saved" }];
// 1.ChitChat
// 2.Podcasts
// 3. Sport
// 4. Music
// 5. Gaming
// 6. Dance
// 7. Wellness
// 8. Fashion
// 9. Food
// 10. Beauty
// 11. Travel
// 12. TV & Movies
// 13. Business & Finance
// 14. Technology
// 15. Home & Decor
// 16. Art
// 17. Architecture
// 18. Photography
// 19. Languages
// 20. Comedy
// 21. Photography
// 22. Adult
const saved = [
  {
    name: "ChitChat",
  },
  {
    name: "Podcasts",
  },
  {
    name: "Sport",
  },
  {
    name: "Music",
  },
  {
    name: "Gaming",
  },
  {
    name: "Dance",
  },
  {
    name: "Wellness",
  },
  {
    name: "Fashion",
  },
  {
    name: "Food",
  },
  {
    name: "Beauty",
  },
  {
    name: "Travel",
  }, {
    name: "TV & Movies",
  },
  {
    name: "Business & Finance",
  },
  {
    name: "Technology",
  },
  {
    name: "Home & Decor",
  },
  {
    name: "Art",
  },
  {
    name: "Architecture",
  },
  {
    name: "Photography",
  },
  {
    name: "Languages",
  },
  {
    name: "Comedy",
  },

 
];

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
  {
    name: "ChitChat",
  },
  {
    name: "Podcasts",
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

function ProfileScreen({ navigation }) {
  const [activeTab, setTab] = React.useState("Me");
  const [activeData, setActiveData] = React.useState("Photos");
  const [savedActiveData, setSavedActiveData] = React.useState("Podcasts");
  const [activeYear, setActiveYear] = React.useState("2014");
  const [set, setImg] = React.useState(false);
  const _menu = React.useRef(null);

  function hideMenu() {
    setImg(false);

    _menu.current.hide();
  }

  function showMenu() {
    setImg(true);
    _menu.current.show();
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <ProfileHeader navigation={navigation} />
      <ScrollView>
        <View style={styles.introSection}>
          <Text style={[styles.name, { fontWeight: "bold" }]}>
            Zachary Witt
          </Text>

          <Text style={styles.bio}>
            Good ideas are always crazy until they are not
          </Text>
          <TouchableOpacity
            style={[styles.row, { alignSelf: "center", marginVertical: 5 }]}
          >
            <Image
              style={{ width: 15, height: 13, resizeMode: "stretch" }}
              source={require("../../assets/Profile/edit.png")}
            />
            <Text style={[styles.name, { fontSize: 14, marginLeft: 6 }]}>
              Edit Profile
            </Text>
          </TouchableOpacity>

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
                      }}
                    >
                      {val.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </View>

          {activeTab === "Saved" ? (
            <View>
              <View style={{ marginVertical: 10 }}>
                <ScrollView horizontal>
                  {saved &&
                    saved.map((val, i) => {
                      return (
                        <TouchableOpacity
                          key={i}
                          onPress={() => setSavedActiveData(val.name)}
                          style={
                            savedActiveData === val.name
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
                {savedActiveData === "Flashback" ? (
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
                                    style={[
                                      styles.title,
                                      { marginHorizontal: 10 },
                                    ]}
                                  >
                                    {val.year}
                                  </Text>
                                </View>
                              ) : (
                                <View>
                                  <Text
                                    style={{ height: 10, marginTop: 5 }}
                                  ></Text>
                                  <Text
                                    style={[
                                      styles.title,
                                      { marginHorizontal: 10 },
                                    ]}
                                  >
                                    {val.year}
                                  </Text>
                                </View>
                              )}
                            </TouchableOpacity>
                          );
                        })}
                    </ScrollView>

                    <View
                      style={[styles.row, { flexWrap: "wrap", marginTop: 5 }]}
                    >
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
                ) : savedActiveData === "Schedule" ? (
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
                                  // textTransform :"uppercase"
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
                                    textTransform :"capitalize"

                                  }}
                                >
                                  {val.date}
                                </Text>
                                <Text
                                  style={{
                                    color: "white",
                                    opacity: 0.6,
                                    fontSize: 13,
                                  }}
                                >
                                  {val.month}
                                </Text>
                              </View>
                            </View>
                          );
                        })}
                    </ScrollView>

                    <View
                      style={[styles.row, { flexWrap: "wrap", marginTop: 5 }]}
                    >
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
                ) :  (
                  <View
                    style={{
                      // marginVertical: 10,
                      width: "100%" 
                      // alignSelf: "center",
                    }}
                  >
                   {savedActiveData == "Podcasts" ? <Menu
                      ref={_menu}
                      style={{
                        marginTop: 40,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onHidden={() => setImg(false)}
                      button={
                        <TouchableOpacity
                          activeOpacity={0.7}
                          onPress={() => {
                            showMenu();
                          }}
                          style={styles.menuContainer}
                        >
                          <Text
                            style={[
                              styles.pickerTitle,
                              {
                                marginHorizontal: 10,
                              },
                            ]}
                          >
                            Shows
                          </Text>

                          {set && set ? (
                            <Icon
                              type="material"
                              name="keyboard-arrow-up"
                              color={"#F90202"}
                              size={35}
                            />
                          ) : (
                            <Icon
                              type="material"
                              name="keyboard-arrow-down"
                              color={"#F90202"}
                              size={35}
                            />
                          )}
                        </TouchableOpacity>
                      }
                    >
                      <MenuItem
                        style={{ paddingHorizontal: 30 }}
                        onPress={() => hideMenu()}
                      >
                        Shows
                      </MenuItem>
                      <MenuItem
                        style={{ paddingHorizontal: 30 }}
                        onPress={() => hideMenu()}
                      >
                        Episodes 
                      </MenuItem>
                    </Menu> : null}
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
          ) : (
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
                                  style={[
                                    styles.title,
                                    { marginHorizontal: 10 },
                                  ]}
                                >
                                  {val.year}
                                </Text>
                              </View>
                            ) : (
                              <View>
                                <Text
                                  style={{ height: 10, marginTop: 5 }}
                                ></Text>
                                <Text
                                  style={[
                                    styles.title,
                                    { marginHorizontal: 10 },
                                  ]}
                                >
                                  {val.year}
                                </Text>
                              </View>
                            )}
                          </TouchableOpacity>
                        );
                      })}
                  </ScrollView>

                  <View
                    style={[styles.row, { flexWrap: "wrap", marginTop: 5 }]}
                  >
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
                                }}
                              >
                                {val.month}
                              </Text>
                            </View>
                          </View>
                        );
                      })}
                  </ScrollView>

                  <View
                    style={[styles.row, { flexWrap: "wrap", marginTop: 5 }]}
                  >
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
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileScreen;

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
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  pickerTitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },
});
