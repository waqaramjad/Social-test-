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
  Modal,
} from "react-native";
import { Icon, Input } from "react-native-elements";
import ShareModal from "../Share/Share";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { BlurView } from "expo-blur";

function ChatCard(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [tipsModal, SetTipsModal] = React.useState(false);
  const [select, setSelect] = React.useState("20");
  const [dislike, setdisLike] = React.useState(false);

  const [show100, setShow100] = React.useState(false);
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
      <View style={styles.card}>
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <View style={[styles.row, { alignItems: "center" }]}>
            <Image
              style={{ width: 40, height: 40 , borderRadius: 150 / 2,
                overflow: "hidden", }}
              source={props && props.path}
            />
            <TouchableOpacity
              onPress={() =>
                props && props.navigation.navigate("FollowProfile")
              }
              style={{ marginLeft: 5 }}
            >
              <View style={styles.row}>
                <Text style={styles.name}>{props && props.name}</Text>
                {props && props.verify ? (
                  <Image
                    style={{ width: 15, height: 15, marginLeft: 5 }}
                    source={require("../../assets/Chat/verify.png")}
                  />
                ) : null}
              </View>

              <Text style={styles.date}>{props && props.date}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.name}>{props && props.type}</Text>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={[styles.name, { color: "white" }]}>
            {props && props.description}
          </Text>
        </View>
        <View style={{flex:1,flexDirection:"row-reverse"}}>
      <View style={{flexDirection:"row"}}>
                   
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setModalVisible(!modalVisible)}
        >
         

          <Image
            style={{
              width: 17,
              height: 17,
              resizeMode: "stretch",
            }}
            source={require("../../assets/Home/share.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => setdisLike(!dislike)}
          style={{marginLeft:20}}
          activeOpacity={0.7}
        >
          {/* <Text style={styles.number}>20</Text> */}
          <Icon
            type="Ionicons"
            name="bookmark-outline"
            size={20}
            color={ "white"}
          />
        </TouchableOpacity>
        </View> 
                  
        </View>
      </View>

      <View
        style={[
          styles.row,
          { justifyContent: "space-between", marginHorizontal: 14 },
        ]}
      >
       
        {/* <TouchableOpacity
          onPress={() => setdisLike(!dislike)}
          style={styles.cardDetails}
          activeOpacity={0.7}
        >
          <Text style={styles.number}>20</Text>
          <Icon
            type="MaterialIcons"
            name="exposure-zero"
            size={22}
            color={dislike ? "red" : "white"}
          />
        </TouchableOpacity> */}
         <TouchableOpacity
            activeOpacity={0.7}
            style={styles.cardDetails}
            onPress={() => setdisLike(!dislike)}
          >
             <Text style={styles.number}>{props.downCounts}</Text>
            {dislike ? (
              <Image
                style={{
                  width: 24,
                  height: 18,
                  resizeMode: "contain",
                }}
                source={require("../../assets/zerored.png")}
              />
            ) : (
              <Image
                style={{
                  width: 24,
                  height: 18,
                  resizeMode: "contain",
                }}
                source={require("../../assets/zerowhite.png")}
              />
            )}
          </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShow100(!show100)}
          style={styles.cardDetails}
        >
          <Text style={styles.number}>{props.upCounts}</Text>
          {show100 ? (
            <Image
              style={{
                width: 24,
                height: 20,
                resizeMode: "contain",
              }}
              source={require("../../assets/hundredred.png")}
              />
          ) : (
            <Image
              style={{
                width: 24,
                height: 20,
                resizeMode: "stretch",
              }}
              source={require("../../assets/hundredwhite.png")}
              />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardDetails}
          onPress={() => props && props.navigation.navigate("Post")}
          activeOpacity={0.7}
        >
          <Text style={styles.number}>{props.commentsCounts}</Text>

          <Image
            style={{
              width: 22,
              height: 20,
              resizeMode: "stretch",
            }}
            source={require("../../assets/Home/comment.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.number}></Text>

          <Text style={{fontSize:16 , color:"white"}}>1:1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => SetTipsModal(!tipsModal)}
        >
          <Text style={styles.number}></Text>

          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: "stretch",
            }}
            source={require("../../assets/Home/payment.png")}
          />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={tipsModal}
        onRequestClose={() => {
          SetTipsModal(!tipsModal);
        }}
      >
        <TouchableOpacity
          onPressOut={() => {
            SetTipsModal(!tipsModal);
          }}
          activeOpacity={0.7}
          style={styles.modalContainer}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={styles.payCard}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", paddingBottom: 10 }}
              >
                Tips Amount
              </Text>

              <View style={styles.tipCard}>
                <Menu
                  ref={_menu}
                  style={{ alignSelf: "center" }}
                  button={
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => showMenu()}
                      style={styles.menuContainer}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={{ fontWeight: "bold", color: "white" }}>
                          {select}
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            marginLeft: 10,
                          }}
                        >
                          USD
                        </Text>
                        <Icon
                          type="materialIcons"
                          name="keyboard-arrow-down"
                          color="white"
                        />
                      </View>
                    </TouchableOpacity>
                  }
                >
                  <MenuItem
                    style={{ paddingHorizontal: 30 }}
                    onPress={() => hideMenu("Esports")}
                  >
                    Esports
                  </MenuItem>
                  <MenuItem
                    style={{ paddingHorizontal: 30 }}
                    onPress={() => hideMenu("Dance")}
                  >
                    Dance
                  </MenuItem>
                  <MenuItem
                    style={{ paddingHorizontal: 30 }}
                    onPress={() => hideMenu("Wellness")}
                  >
                    Wellness
                  </MenuItem>
                </Menu>
              </View>
              <TouchableOpacity
                onPress={() => {
                  SetTipsModal(!tipsModal);
                }}
                style={styles.btn}
              >
                <Text style={[styles.btnText, { color: "white" }]}> Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          onPressOut={() => {
            setModalVisible(!modalVisible);
          }}
          activeOpacity={0.7}
          style={styles.modalContainer}
        >
          <View style={styles.modal}>
            <ShareModal onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#373737",
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#F90202",
    fontSize: 16,
    marginLeft: 6,
  },
  date: {
    color: "white",
    opacity: 0.7,
    fontSize: 11,
    marginLeft: 6,
  },
  iconContainer: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 27,
    position: "absolute",
    borderRadius: 6,
    bottom: 5,
    left: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  modal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "black",
    width: 100,
  },
  btnText: {
    color: "#F90202",
  },
  payCard: {
    backgroundColor: "white",
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  tipCard: {
    backgroundColor: "red",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 6,
    marginVertical: 8,
  },
  messageCard: {
    backgroundColor: "#AE0101",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopEndRadius: 14,
    borderBottomEndRadius: 14,
    borderBottomLeftRadius: 14,
  },
  number: {
    fontSize: 9,
    textAlign: "center",
    color: "red",
    marginBottom: 2,
  },
  cardDetails: {
    marginTop: 10,
  },
});
