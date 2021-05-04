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
import BackHeader from "../../components/BackHeader/BackHeader";
import { Icon } from "react-native-elements";

import Input from "../../components/Input/Input";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

const categories = ['Chit Chat','Podcast','Sport','Music','Gaming','Dance','Wellness','Fashion','Food','Beauty','Travel','TV & Movies'
,'Business & Finance','Technology','Home & Decor','Art','Architecture','Photography','Languages','Comedy']

function LaunchScreen({ navigation }) {
  const [select, setSelect] = React.useState("Select a category");
  const _menu = React.useRef(null);
  const [set, setImg] = React.useState(false);

  function hideMenu(name) {
    setImg(false);
    setSelect(name);
    _menu.current.hide();
  }

  function showMenu() {
    setImg(true);

    _menu.current.show();
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <BackHeader navigation={navigation} />

      <ScrollView>
        <View
          style={{
            marginHorizontal: "7%",
            marginVertical: 10,
            flex:1
          }}
        >

          <Menu
            onHidden={() => setImg(false)}
            ref={_menu}
            
            style={{ alignSelf: "center", marginTop: 70, width: "85%" ,  height : 400 }}
            button={
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => showMenu()}
                style={styles.menuContainer}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      width: 34,
                      height: 34,
                      resizeMode: "stretch",
                      marginRight: 20,
                    }}
                    source={require("../../assets/Home/rocket.png")}
                  />
                  <Text style={styles.pickerTitle}>{select}</Text>
                </View>
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
              style={{ paddingHorizontal: 30 }}
              onPress={() => hideMenu(val)} key={index}
            >
              {val}
            </MenuItem>)
            }
                         </ScrollView>

           
        
         
          </Menu>

        </View>

        {select === "Chit Chat" ? (
          <View style={styles.footer}>
            <View style={{ marginVertical: 10 }}>
              <Input placeholder="Add Title" />
              <Input placeholder="Add text or paste link here" />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text
                style={[styles.pickerTitle, { fontSize: 14, color: "white" }]}
              >
                Launch
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View>
              <Image
                style={{ width: "100%", height: 350, resizeMode: "stretch" }}
                source={require("../../assets/Home/launchUser.png")}
              />
            </View>
            <View style={styles.footer}>
              <View style={{ marginVertical: 10 }}>
                <Input placeholder="Description" />
              </View>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={[styles.pickerTitle, { fontSize: 14, color: "white" }]}
                >
                  Launch
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default LaunchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 10,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 4,
    width: "100%",
    borderRadius: 8,
    justifyContent: "space-between",
  },
  pickerTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  footer: {
    marginHorizontal: "6%",
  },
  button: {
    backgroundColor: "#f90202",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 8,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
