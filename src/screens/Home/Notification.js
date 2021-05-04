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
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import { Icon } from "react-native-elements";

const data = [
  {
    name: "Jayden Hemandez",
    rightPath: require("../../assets/Home/noti8.jpg"),
    leftPath: require("../../assets/Home/adduser.png"),
    description: "mentioned you in a comment",
    type: "new",
  },
  {
    name: "Roman Krueger",
    leftPath: require("../../assets/Home/adduser.png"),
    description: "started following you",
    type: "new",
    btnName: "Follow",
  },
  {
    name: "Cassie Cooke",
    leftPath: require("../../assets/Home/photo.png"),
    description: "Sent you personal request",
    rightPath: require("../../assets/Home/noti9.jpg"),
    type: "new",
  },
  {
    name: "Cassie Cooke",
    leftPath: require("../../assets/Home/photo.png"),
    description: "Approved your post",
    type: "new",
    btnName: "View",
  },
];

const old = [
  {
    name: "Cameron King",
    leftPath: require("../../assets/Home/payment.png"),
    description: "tiped you $20",
    type: "old",
    btnName: "View",
  },
  {
    name: "Mike Farrell",
    leftPath: require("../../assets/Home/adduser.png"),
    description: "started following you",
    type: "old",
    btnName: "Follow",
  },
  {
    name: "Alex Dupont",
    leftPath: require("../../assets/Home/photo.png"),
    description: "Approved your post",
    rightPath: require("../../assets/Home/noti9.jpg"),
    type: "old",
  },
];

function NotificationScreen({ navigation }) {
  const [select, setSelect] = React.useState("Updates");
  const [set, setImg] = React.useState(false);
  const _menu = React.useRef(null);

  function hideMenu(name) {
    setImg(false);
    _menu.current.hide();
    if (name) {
      navigation.navigate("InboxOptions");
    }
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
        <View style={{ paddingHorizontal: "2%" }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Menu
              ref={_menu}
              style={{
                // marginTop: 60,
                // justifyContent: "center",
                // alignItems: "center",
                // alignSelf :"center"
                // flex:1
                
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
                  <Image
                    style={{
                      width: 12,
                      height: 16,
                      resizeMode: "stretch",
                      marginRight: 7,
                    }}
                    source={require("../../assets/Home/bell.png")}
                  />
                  <Text
                    style={[
                      styles.pickerTitle,
                      {
                        marginHorizontal: 10,
                      },
                    ]}
                  >
                    Updates
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
                All Updates
              </MenuItem>
              <MenuItem
                style={{ paddingHorizontal: 30 }}
                onPress={() => hideMenu()}
              >
                100 Approvals
              </MenuItem>
              <MenuItem
                style={{ paddingHorizontal: 30 }}
                onPress={() => hideMenu()}
              >
                Mentions
              </MenuItem>
              <MenuItem
                style={{ paddingHorizontal: 30 }}
                onPress={() => hideMenu()}
              >
                Followers
              </MenuItem>
              <MenuItem
                style={{ paddingHorizontal: 30 }}
                onPress={() => hideMenu()}
              >
                Supporters
              </MenuItem>
              <MenuItem
                style={{ paddingHorizontal: 30 }}
                onPress={() => hideMenu()}
              >
                Comments
              </MenuItem>
              <MenuItem
                style={{ paddingHorizontal: 30 }}
                onPress={() => hideMenu()}
              >
                Tips
              </MenuItem>
              <MenuItem
                style={{ paddingHorizontal: 30 }}
                onPress={() => hideMenu("Direct Messages")}
              >
                Direct Messages
              </MenuItem>
              <MenuItem
                style={{ paddingHorizontal: 30 }}
                onPress={() => hideMenu("Requests")}
              > 
                Special Requests 
              </MenuItem>
            </Menu>
          </View>
        </View>
        <View style={{ paddingHorizontal: "3%" }}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.pickerTitle, { fontSize: 14 }]}>New </Text>
              <Text style={styles.number}>(9)</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text
                style={[styles.pickerTitle, { fontSize: 14, opacity: 0.8 }]}
              >
                Mark all as read
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          {data &&
            data.map((val, i) => {
              return (
                <NotificationCard
                  bg={val.type === "new" ? "#640101" : null}
                  title={val.name}
                  description={val.description}
                  leftPath={val.leftPath}
                  rightPath={val.rightPath}
                  btnName={val.btnName}
                  key={i}
                />
              );
            })}
        </View>
        <View style={styles.notificationContainer}>
          <Text style={[styles.pickerTitle, { marginLeft: 10 }]}>Old</Text>
          {old &&
            old.map((val, i) => {
              return (
                <NotificationCard
                  bg={val.type === "new" ? "#640101" : null}
                  title={val.name}
                  description={val.description}
                  leftPath={val.leftPath}
                  rightPath={val.rightPath}
                  btnName={val.btnName}
                  key={i}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 10,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 15,
    marginLeft : '25%'
    // backgroundColor :"white" , 
    // alignSelf :"center"
  },
  pickerTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  list: {
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  number: {
    color: "#F90202",
    marginLeft: 4,
  },
  button: {
    backgroundColor: "#f90202",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },

  notificationContainer: {
    marginVertical: 10,
  },
});
