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
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { Input, Icon } from "react-native-elements";

const images = [
  {
    source: require("../../assets/World/1.png"),
  },
  {
    source: require("../../assets/World/2.png"),
    live: true,
  },
  {
    source: require("../../assets/World/3.png"),
  },
  {
    source: require("../../assets/World/4.png"),
  },
  {
    source: require("../../assets/World/5.png"),
  },
  {
    source: require("../../assets/World/4.png"),
    live: true,
  },
  {
    source: require("../../assets/World/1.png"),
  },
  {
    source: require("../../assets/World/2.png"),
  },
  {
    source: require("../../assets/World/3.png"),
  },
  {
    source: require("../../assets/World/4.png"),
  },
  {
    source: require("../../assets/World/5.png"),
  },
  {
    source: require("../../assets/World/4.png"),
  },
];

const categories = ['Podcast','Sport','Music','Gaming','Dance','Wellness','Fashion','Food','Beauty','Travel','TV & Movies'
,'Business & Finance','Technology','Home & Decor','Art','Architecture','Photography','Languages','Comedy',]

function WorldScreen({ navigation }) {
  const [select, setSelect] = React.useState(false);
  const _menu = React.useRef(null);
  const _menu1 = React.useRef(null);
  const [set, setImg] = React.useState(false);

  function hideMenu() {
    setImg(false);

    _menu.current.hide();
  }

  function showMenu() {
    setImg(true);
    _menu.current.show();
  }
  function hideMenu1() {
    setSelect(false);
    _menu1.current.hide();
  }

  function showMenu1() {
    setSelect(true);
    _menu1.current.show();
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
        <Image
          style={{ width: 40, height: 30, alignSelf: "center" , resizeMode:"contain" }}
          source={require("../../assets/Home/100.png")}
        />
      </View>

      <ScrollView>
        <View>
          <View
            style={{
              paddingHorizontal: "2%",
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "20%", marginTop: -5 }}>
              <Menu
                ref={_menu}
                onHidden={() => setImg(false)}
                style={{ marginTop: 50 , height:400 }}
                button={
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => showMenu()}
                    style={styles.menuContainer}
                  >
                    <Text style={styles.pickerTitle}>Sports</Text>
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
              <ScrollView>

{
  categories.map((val,index)=><MenuItem
  style={{ paddingHorizontal: 10 }}
  onPress={() => hideMenu(val)} key={index}
>
  {val}
</MenuItem>)
}
             </ScrollView>
              </Menu>
            </View>
            <View style={{ width: "65%" }}>
              <Input
                inputContainerStyle={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  paddingHorizontal: 4,
                  height: 37,
                }}
                inputStyle={{
                  fontSize: 15,
                  color: "#6B6B6B",
                  paddingHorizontal: 4,
                }}
                rightIcon={
                  <Image
                    style={{ width: 10, height: 17, resizeMode: "stretch" }}
                    source={require("../../assets/Home/mic.png")}
                  />
                }
                leftIcon={
                  <Image
                    style={{ width: 14, height: 15, resizeMode: "stretch" }}
                    source={require("../../assets/Home/search.png")}
                  />
                }
                placeholder="Search World"
                placeholderTextColor="#404040"
              />
            </View>
            <View style={{marginHorizontal:15}}>
              {/* <Menu
                ref={_menu1}
                style={{ marginTop: 50 }}
                onHidden={() => setSelect(false)}
                button={
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => showMenu1()}
                    style={styles.menuContainer}
                  >
                    {select && select ? (
                      <Icon
                        type="ionicons"
                        name="close"
                        color={"#F90202"}
                        size={30}
                        style={{ marginTop: -5 }}
                      />
                    ) : (
                      <Icon
                        type="ionicons"
                        name="menu"
                        color={"#F90202"}
                        size={30}
                        style={{ marginTop: -5 }}
                      />
                    )}
                  </TouchableOpacity>
                }
              >
               

                <ScrollView>

            {
              categories.map((val,index)=><MenuItem
              style={{ paddingHorizontal: 10 }}
              onPress={() => hideMenu(val)} key={index}
            >
              {val}
            </MenuItem>)
            }
                         </ScrollView>
              </Menu> */}
            </View>
          </View>
          <View>
            <View style={[styles.row, { flexWrap: "wrap", marginTop: 5 }]}>
              {images &&
                images.map((val, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      activeOpacity={0.5}
                      onPress={() => navigation.navigate("PodcastChannel")}
                      style={{ width: "27.5%", margin: 10 }}
                    >
                      <ImageBackground
                        source={val.source}
                        key={i}
                        imageStyle={{
                          resizeMode: "stretch",
                        }}
                        style={{
                          width: "100%",
                          height: 110,
                          resizeMode: "stretch",
                        }}
                      >
                        {val.live ? (
                          <View
                            style={[
                              styles.row,
                              {
                                backgroundColor: "red",
                                borderRadius: 2,
                                width: 35,
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                bottom: 0,
                                right: 2,
                              },
                            ]}
                          >
                            <View
                              style={{
                                width: 5,
                                height: 5,
                                borderRadius: 5,
                                backgroundColor: "white",
                                marginRight: 2,
                              }}
                            />
                            <Text
                              style={{
                                color: "white",
                                opacity: 0.7,
                                fontSize: 10,
                              }}
                            >
                              live
                            </Text>
                          </View>
                        ) : null}
                      </ImageBackground>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default WorldScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: "2%",
    paddingVertical: 10,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  pickerTitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
    opacity: 0.6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
