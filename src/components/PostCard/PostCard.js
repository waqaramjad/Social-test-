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

function PostCard(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [tipsModal, SetTipsModal] = React.useState(false);
  const [select, setSelect] = React.useState("20");
  const [message, setMessage] = React.useState(false);
  const _menu = React.useRef(null);
  const [showMessage, setShowMessage] = React.useState(false);
  const [dislike, setdisLike] = React.useState(false);

  function hideMenu(name) {
    setSelect(name);
    _menu.current.hide();
  }

  function showMenu() {
    _menu.current.show();
  }
  return (
    <>
      {props && props.title ? (
        <Text
          style={[
            styles.title,
            { textAlign: "left", marginVertical: 15, marginBottom: 15 },
          ]}
        >
          {props.title ? props.title : null}
        </Text>
      ) : null}
      <View style={styles.container}>
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <View style={styles.row}>
            <Image
              style={{ width: 40, height: 40 , borderRadius: 150 / 2,
                overflow: "hidden",}}
              source={props.profile}
            />
            <Text style={styles.name}>{props && props.name}</Text>
          </View>
          <View>
            <Text style={styles.date}>{props.date}</Text>
          </View>
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text style={{ color: "white" }}>{props && props.tags}</Text>
          <Text style={[styles.date, { fontSize: 13 }]}>
            {props && props.description}
          </Text>
        </View>
        <View style={{ marginVertical: 5 }}>
          <ImageBackground
            source={props && props.path}
            style={{ width: "100%", height: 200 , }}
          >
            {props.show ? (
              <>
                <View style={{ paddingVertical: 5, paddingHorizontal: 5 }}>
                  <Image
                    style={{
                      width: 20,
                      height: 15,
                      resizeMode: "stretch",
                      alignSelf: "flex-end",
                    }}
                    source={require("../../assets/Home/cast.png")}
                  />
                </View>
                {/* <View style={styles.iconContainer}>
                  <Icon
                    type="antdesign"
                    size={15}
                    color="red"
                    name="shoppingcart"
                  />
                </View> */}
              </>
            ) : null}
             <View style={{  flex:1 ,position:"absolute",bottom:5 , marginTop:10 , alignSelf:"flex-end"}}>
      <View style={{flexDirection:"row",}}>
                   
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
          style={{marginLeft:20 , marginRight:"2%"}}
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
          </ImageBackground>
         
        </View>

        <View
          style={[
            styles.row,
            {
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginTop: 10,
            },
          ]}
        >
           {/* <TouchableOpacity
          onPress={() => setdisLike(!dislike)}
          activeOpacity={0.7}
        >
          <Icon
            type="MaterialIcons"
            name="exposure-zero"
            size={22}
            color={dislike ? "red" : "white"}
          />
        </TouchableOpacity> */}
         <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setdisLike(!dislike)}
          >
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
            onPress={() => setShowMessage(!showMessage)}
          >
            {showMessage ? (
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
                  resizeMode: "contain",
                }}
                source={require("../../assets/hundredwhite.png")}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setMessage(!message)}
          >
            <Image
              style={{
                width: 24,
                height: 20,
                resizeMode: "stretch",
              }}
              source={require("../../assets/Home/comment.png")}
            />
          </TouchableOpacity>
{/* 
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
          </TouchableOpacity> */}
           <TouchableOpacity
          activeOpacity={0.7}
          // onPress={() => setModalVisible(!modalVisible)}
        >
          {/* <Text style={styles.number}></Text> */}

          <Text style={{fontSize:16 , color:"white"}}>1:1</Text>
        </TouchableOpacity>
          {/* <Image
            style={{
              width: 17,
              height: 19,
              resizeMode: "stretch",
            }}
            source={require("../../assets/Home/main.png")}
          /> */}

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => SetTipsModal(!tipsModal)}
          >
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

        {message && message ? (
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginTop: 15,
            }}
          >

            <View style={[styles.row, { alignItems: "flex-start" }]}>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require("../../assets/Home/noti2.png")}
              />
              <View style={{ width: "90%" }}>
                <View style={styles.messageCard}>
                  <Text style={{ fontWeight: "bold", marginBottom: 3 }}>
                    Isaiah Morghan
                  </Text>
                  <Text style={{ color: "white", opacity: 0.8, fontSize: 12 }}>
                     The "Heyyy" got me follow :)
                  </Text>
                </View>
                <View
                  style={[styles.row, { marginVertical: 4, marginLeft: 10 }]}
                >
                  <Image
                    style={{
                      width: 22,
                      height: 18,
                      resizeMode: "stretch",
                    }}
                    source={require("../../assets/Home/inActive100.png")}
                  />
                  <Text style={{ color: "white", marginLeft: 20 }}>Reply</Text>
                </View>
              </View>
            </View>

            <View style={{ width: "100%", marginTop: 14 }}>
              <Input
                inputContainerStyle={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  paddingLeft: 4,
                  height: 37,
                }}
                inputStyle={{
                  fontSize: 15,
                  color: "#6B6B6B",
                  paddingLeft: 4,
                }}
                rightIcon={
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 30,
                      marginRight: -10,
                      height: 38,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 8,
                    }}
                  >
                    <Image
                      style={{ width: 15, height: 15, resizeMode: "stretch" }}
                      source={require("../../assets/Home/send.png")}
                    />
                  </View>
                }
                leftIcon={
                  <Image
                    style={{ width: 14, height: 15, resizeMode: "stretch" }}
                    source={require("../../assets/Home/m.png")}
                  />
                }
                placeholderTextColor="#404040"
                placeholder="Say Something..."
              />
            </View>
          </View>
        ) : null}

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
            style={styles.modalContainer}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.payCard}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    paddingBottom: 10,
                  }}
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
                  <Text style={[styles.btnText, { color: "white" }]}>Send</Text>
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
            style={styles.modalContainer}
          >
            <View style={styles.modal}>
              <ShareModal onPress={() => setModalVisible(!modalVisible)} />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
  );
}

export default PostCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#F90202",
    fontSize: 16,
    marginLeft: 8,
  },
  date: {
    color: "white",
    opacity: 0.7,
    fontSize: 11,
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
    backgroundColor: "rgba(0,0,0,0.8)",
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

  title: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 4,
    textAlign: "center",
  },
});
