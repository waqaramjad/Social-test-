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
import RequestCard from "../../components/RequestCard/RequestCard";

const list = [
  {
    name: "Kirti Hernadez",
    value: "can you make a video for me?",
    num: "1",
    path: require("../../assets/Chat/noti1.png"),
    time: "9:40 AM",
    active: true,
  },
  {
    name: "Kirti Hernadez",
    value: "i want a 20 second video",
    num: "2",
    path: require("../../assets/Chat/noti2.png"),
    time: "9:40 AM",
    active: true,
  },
  {
    name: "Billie Baker",
    value: "Thanks for video",
    num: "2",
    path: require("../../assets/Chat/noti2.png"),
    time: "9:40 AM",
    active: true,
  },
  {
    name: "Kirti Hernadez",
    value: "can you make a video for me?",
    num: "1",
    path: require("../../assets/Chat/noti1.png"),
    time: "9:40 AM",
    active: false,
  },
  {
    name: "Kirti Hernadez",
    value: "i want a 20 second video",
    num: "2",
    path: require("../../assets/Chat/noti2.png"),
    time: "9:40 AM",
    active: false,
  },
  {
    name: "Billie Baker",
    value: "Thanks for video",
    num: "2",
    path: require("../../assets/Chat/noti2.png"),
    time: "9:40 AM",
    active: false,
  },
];

const direct = [
  {
    name: "Kirti Hernadez",
    value: "check this out",
    num: "1",
    path: require("../../assets/Chat/noti1.png"),
    time: "9:40 AM",
    active: true,
  },
  {
    name: "Kirti Hernadez",
    value: "check this out",
    num: "2",
    path: require("../../assets/Chat/noti2.png"),
    time: "9:40 AM",
    active: true,
  },
  {
    name: "Billie Baker",
    value: "check this out",
    num: "2",
    path: require("../../assets/Chat/noti2.png"),
    time: "9:40 AM",
    active: true,
  },
  {
    name: "Kirti Hernadez",
    value: "check this out",
    num: "1",
    path: require("../../assets/Chat/noti1.png"),
    time: "9:40 AM",
    active: false,
  },
  {
    name: "Kirti Hernadez",
    value: "check this out",
    num: "2",
    path: require("../../assets/Chat/noti2.png"),
    time: "9:40 AM",
    active: false,
  },
  {
    name: "Billie Baker",
    value: "check this out",
    num: "2",
    path: require("../../assets/Chat/noti2.png"),
    time: "9:40 AM",
    active: false,
  },
];

function RequestScreen({ navigation }) {
  const [select, setSelect] = React.useState("Direct messages");
  const _menu = React.useRef(null);

  function hideMenu(name) {
    setSelect(name);
    _menu.current.hide();
  }

  function showMenu() {
    _menu.current.show();
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 4,
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 13, height: 17 }}
            source={require("../../assets/Home/arrowBack.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "70%" }}>
            <Menu
              ref={_menu}
              button={
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => showMenu()}
                  style={styles.menuContainer}
                >
                  <Text style={styles.pickerTitle}>{select}</Text>
                  <Image
                    style={{
                      width: 15,
                      height: 10,
                      resizeMode: "stretch",
                      marginLeft: 7,
                    }}
                    source={require("../../assets/Home/bottomArrow.png")}
                  />
                </TouchableOpacity>
              }
            >
              <MenuItem
                style={{ paddingHorizontal: 10 }}
                onPress={() => hideMenu("Direct messages")}
              >
                Direct messages
              </MenuItem>

              <MenuItem
                style={{ paddingHorizontal: 10 }}
                onPress={() => hideMenu("Personal messages")}
              >
                Personal messages
              </MenuItem>
            </Menu>
          </View>
          <Text></Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <Input
            inputContainerStyle={{
              backgroundColor: "black",
              borderRadius: 20,
              paddingHorizontal: 4,
              height: 35,
              borderWidth: 1,
              borderColor: "red",
            }}
            inputStyle={{
              fontSize: 15,
              color: "#6B6B6B",
              paddingHorizontal: 4,
              paddingLeft: 20,
            }}
            rightIcon={<Icon name="search1" type="antdesign" color="red" />}
            placeholder="Search "
          />
        </View>
        <View>
          {select === "Direct messages" ? (
            <View>
              {list &&
                list.map((val, i) => {
                  return (
                    <RequestCard
                      key={i}
                      onPress={() => navigation.navigate("ChatRoom")}
                      number={val.num}
                      name={val.name}
                      path={val.path}
                      date={val.time}
                      value={val.value}
                      active={val.active}
                    />
                  );
                })}
            </View>
          ) : (
            <View>
              {direct &&
                direct.map((val, i) => {
                  return (
                    <RequestCard
                      key={i}
                      number={val.num}
                      name={val.name}
                      path={val.path}
                      date={val.time}
                      value={val.value}
                      active={val.active}
                    />
                  );
                })}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
