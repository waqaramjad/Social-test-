// import * as React from "react";
// import {
//   SafeAreaView,
//   StatusBar,
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   Modal,
// } from "react-native";
// import { Icon } from "react-native-elements";
// import BackHeader from "../../components/BackHeader/BackHeader";
// import ChatInput from "../../components/ChatInput/ChatInput";
// import ChatMessages from "../../components/ChatMessages/ChatMessages";
// import ChatRoomHeader from "../../components/ChatRoomHeader/ChatRoomHeader";

// const messages = [
//   {
//     message: "Oh my God!!! James kills me :) :)",
//     type: "left",
//     deliverd: false,
//   },
//   {
//     message: "I can't wait for the next weeks episodes, I love their content",
//     type: "right",
//     deliverd: true,
//   },
// ];

// const Tabs = [
//   {
//     name: "Direct Messages",
//   },
//   {
//     name: "Special Request",
//   },
// ];
// function ChatRoomScreen({ navigation }) {
//   const [modalVisible, setModalVisible] = React.useState(false);
//   const [showMessage, setShowMessage] = React.useState(false);
//   const [activeTab, setTab] = React.useState("Direct Messages");
//   const [selectRight, setRight] = React.useState(false);
//   const [selectLeft, setLeft] = React.useState(false);

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="black" barStyle="dark-content" />
//       <ChatRoomHeader show={true} navigation={navigation} />
//       <ScrollView>
//         {showMessage ? (
//           <View
//             style={[styles.row, { alignSelf: "center", marginVertical: 15 }]}
//           >
//             {Tabs &&
//               Tabs.map((val, i) => {
//                 return (
//                   <TouchableOpacity
//                     key={i}
//                     onPress={() => setTab(val.name)}
//                     style={[
//                       activeTab === val.name
//                         ? styles.activeBtn
//                         : styles.inActiveBtn,
//                       { width: "40%" },
//                     ]}
//                     activeOpacity={0.6}
//                   >
//                     <Text
//                       style={{
//                         color: activeTab === val.name ? "white" : "black",
//                       }}
//                     >
//                       {val.name}
//                     </Text>
//                   </TouchableOpacity>
//                 );
//               })}
//           </View>
//         ) : (
//           <TouchableOpacity
//             onPress={() => {
//               setModalVisible(true);
//               setShowMessage(true);
//             }}
//             activeOpacity={0.7}
//             style={styles.specialMessage}
//           >
//             <Text style={[styles.message, { fontSize: 15 }]}>Click Here</Text>
//             <Text style={styles.message}>
//               To send Special Request to the Entertainer
//             </Text>
//           </TouchableOpacity>
//         )}

//         {activeTab === "Direct Messages" ? (
//           <View>
//             <TouchableOpacity
//               onPress={() => {
//                 setModalVisible(true);
//                 setShowMessage(true);
//               }}
//               activeOpacity={0.7}
//               style={[
//                 styles.specialMessage,
//                 { marginTop: 0, backgroundColor: "white" },
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.message,
//                   { fontSize: 15, color: "red", fontWeight: "bold" },
//                 ]}
//               >
//                 Send another request
//               </Text>
//             </TouchableOpacity>
//           </View>
//         ) : null}

//         <View style={styles.messagesContainer}>
//           {activeTab === "Direct Messages" ? (
//             <ChatMessages messages={messages && messages} />
//           ) : (
//             <View>
//               <View style={styles.right}>
//                 <View style={styles.rightMessage}>
//                   <Text style={styles.rightText}>
//                     Hey Ashley, Zachary has a request for you.
//                   </Text>
//                   <View
//                     style={[
//                       styles.row,
//                       { marginVertical: 7, flexWrap: "wrap" },
//                     ]}
//                   >
//                     <Text style={styles.rightText}>Who is it for? &nbsp;</Text>
//                     <Text>My friend Tom.</Text>
//                   </View>
//                   <View
//                     style={[
//                       styles.row,
//                       { marginVertical: 7, flexWrap: "wrap" },
//                     ]}
//                   >
//                     <Text style={styles.rightText}>
//                       Reason for request? &nbsp;
//                     </Text>
//                     <Text>A Birthday.</Text>
//                   </View>
//                   <View
//                     style={[
//                       styles.row,
//                       { marginVertical: 7, flexWrap: "wrap" },
//                     ]}
//                   >
//                     <Text style={styles.rightText}>
//                       He woudl the person your requesting this for like to be
//                       addressed &nbsp;
//                     </Text>
//                     <Text>He/Him.</Text>
//                   </View>
//                   <View
//                     style={[
//                       styles.row,
//                       { marginVertical: 7, flexWrap: "wrap" },
//                     ]}
//                   >
//                     <Text style={styles.rightText}>
//                       Type exactly what you would like the Entertainer to
//                       say.... &nbsp;
//                     </Text>
//                     <Text>
//                       Hey, Tom, Happy its Ashley!, Your freind Zachary asked me
//                       to give you a big birthday shout out. He is sorry he can
//                       not make it to your party but both of us hope you have a
//                       great day
//                     </Text>
//                   </View>
//                 </View>

//                 <View
//                   style={[
//                     styles.row,
//                     {
//                       width: "95%",
//                       marginVertical: 2,
//                       justifyContent: "flex-end",
//                     },
//                   ]}
//                 >
//                   <Text
//                     style={{ color: "white", opacity: 0.5, marginRight: 20 }}
//                   >
//                     Do you accept?
//                   </Text>

//                   <TouchableOpacity
//                     onPress={() => setLeft(!selectLeft)}
//                     activeOpacity={0.7}
//                   >
//                     {selectLeft ? (
//                       <Image
//                         style={{
//                           width: 20,
//                           height: 14,
//                           resizeMode: "stretch",
//                           marginRight: 5,
//                           marginTop: 4,
//                         }}
//                         source={require("../../assets/Home/active100.png")}
//                       />
//                     ) : (
//                       <Image
//                         style={{
//                           width: 20,
//                           height: 14,
//                           resizeMode: "stretch",
//                           marginRight: 5,
//                           marginTop: 4,
//                         }}
//                         source={require("../../assets/Home/inActive100.png")}
//                       />
//                     )}
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           )}
//         </View>
//       </ScrollView>

//       <View style={styles.footer}>
//         <ChatInput />
//       </View>

//       {/* Personal Request code */}

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.modal}>
//           <BackHeader
//             show={true}
//             onPress={() => setModalVisible(!modalVisible)}
//             navigation={navigation}
//           />

//           <ScrollView>
//             <View style={{ marginVertical: 15, alignSelf: "center" }}>
//               <View style={[styles.row]}>
//                 <Text style={styles.modalTitle}>Special Request </Text>
//                 <Icon
//                   name="video-camera"
//                   color="white"
//                   size={16}
//                   type="font-awesome"
//                 />
//                 <Text style={styles.modalTitle}>($900)</Text>
//               </View>
//               <Text style={styles.modalValue}>
//                 Give the Entertainer some information
//               </Text>
//             </View>
//             <View style={{ marginVertical: 20, paddingHorizontal: 10 }}>
//               <Text style={[{ color: "white", opacity: 0.7, fontSize: 15 }]}>
//                 Who is it for?
//               </Text>
//               <TextInput
//                 style={[
//                   styles.input,
//                   {
//                     height: 60,
//                     marginVertical: 10,
//                     textAlignVertical: "top",
//                     paddingTop: 8,
//                     paddingLeft: 10,
//                   },
//                 ]}
//                 placeholder={"Me or someone else"}
//                 placeholderTextColor="white"
//                 multiline={true}
//               />
//               <Text style={[{ color: "white", opacity: 0.7, fontSize: 15 }]}>
//                 Reson for this request?
//               </Text>
//               <TextInput
//                 style={[
//                   styles.input,
//                   {
//                     height: 80,
//                     marginVertical: 10,
//                     paddingHorizontal: 13,
//                     textAlignVertical: "top",
//                     paddingTop: 8,
//                     paddingLeft: 10,
//                   },
//                 ]}
//                 placeholder={"birthday, A message, motivation, congratulation"}
//                 placeholderTextColor="white"
//                 multiline={true}
//               />

//               <Text
//                 style={[
//                   {
//                     color: "white",
//                     opacity: 0.7,
//                     fontSize: 15,
//                     paddingRight: 10,
//                     textAlignVertical: "top",
//                     paddingTop: 8,
//                     paddingLeft: 10,
//                   },
//                 ]}
//               >
//                 How would the person your requesting this for like to be
//                 addressed? (Pronouns)
//               </Text>
//               <TextInput
//                 style={[
//                   styles.input,
//                   {
//                     height: 70,
//                     marginVertical: 10,
//                     textAlignVertical: "top",
//                     paddingTop: 8,
//                     paddingLeft: 10,
//                   },
//                 ]}
//                 placeholder={"they them she/her, He/His or customise"}
//                 placeholderTextColor="white"
//                 multiline={true}
//               />

//               <Text
//                 style={[
//                   {
//                     color: "white",
//                     opacity: 0.7,
//                     fontSize: 15,
//                     paddingRight: 10,
//                   },
//                 ]}
//               >
//                 Type exactly what you would like the Entertainer to say
//               </Text>
//               <TextInput
//                 style={[
//                   styles.input,
//                   {
//                     height: 60,
//                     marginVertical: 10,
//                     textAlignVertical: "top",
//                     paddingTop: 8,
//                     paddingLeft: 10,
//                   },
//                 ]}
//                 placeholder={"Type here"}
//                 placeholderTextColor="white"
//                 multiline={true}
//               />

//               <TouchableOpacity
//                 onPress={() => {
//                   setTab("Special Request");
//                   setModalVisible(!modalVisible);
//                 }}
//                 style={styles.button}
//               >
//                 <Text style={[{ fontSize: 14, color: "white" }]}>
//                   Send Request
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </ScrollView>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// export default ChatRoomScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   specialMessage: {
//     backgroundColor: "#F90202",
//     marginTop: 15,
//     paddingVertical: 10,
//   },

//   message: {
//     fontSize: 12,
//     color: "white",
//     fontWeight: "500",
//     opacity: 0.6,
//     textAlign: "center",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   activeBtn: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 7,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 5,
//     backgroundColor: "#F90202",
//   },
//   inActiveBtn: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 7,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 5,
//     backgroundColor: "white",
//   },
//   modal: {
//     flex: 1,
//     backgroundColor: "black",
//   },
//   modalTitle: {
//     fontSize: 17,
//     color: "#f90202",
//     marginHorizontal: 3,
//   },
//   modalValue: {
//     color: "white",
//     opacity: 0.6,
//     fontSize: 10,
//     textAlign: "center",
//     marginVertical: 2,
//   },
//   input: {
//     borderRadius: 15,
//     backgroundColor: "#595959",
//     color: "white",
//     fontSize: 14,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "#f90202",
//     paddingHorizontal: 12,
//     paddingVertical: 14,
//     borderRadius: 6,
//     width: 180,
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "center",
//   },

//   footer: {
//     position: "absolute",
//     width: "100%",
//     bottom: 0,
//     backgroundColor: "black",
//   },
//   messagesContainer: {
//     flex: 1,
//     marginVertical: 20,
//     paddingBottom: 90,
//   },

//   right: {
//     alignSelf: "flex-end",
//     width: "67%",
//     marginBottom: 15,
//   },
//   rightMessage: {
//     paddingVertical: 25,
//     paddingHorizontal: 15,
//     backgroundColor: "#F90202",
//     borderTopStartRadius: 15,
//     borderBottomStartRadius: 15,
//     borderTopEndRadius: 15,
//     marginRight: 10,
//   },
//   rightText: {
//     color: "white",
//     fontSize: 14,
//     opacity: 0.7,
//   },
//   rightContainer: {
//     width: 25,
//     height: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//     paddingHorizontal: 3,
//     marginVertical: 5,
//   },
// });

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
  TextInput,
  Modal,
} from "react-native";
import { Icon } from "react-native-elements";
import BackHeader from "../../components/BackHeader/BackHeader";
import ChatInput from "../../components/ChatInput/ChatInput";
import ChatMessages from "../../components/ChatMessages/ChatMessages";
import ChatRoomHeader from "../../components/ChatRoomHeader/ChatRoomHeader";

const messages = [
  {
    message: "Oh my God!!! James kills me :) :)",
    type: "left",
    deliverd: false,
  },
  {
    message: "I can't wait for the next weeks episodes, I love their content",
    type: "right",
    deliverd: true,
  },
];

const Tabs = [
  {
    name: "Direct Messages",
  },
  {
    name: "Special Request",
  },
];
function ChatRoomScreen({ navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);
  const [activeTab, setTab] = React.useState("Direct Messages");
  const [sendOther, setSendOther] = React.useState(false);
  const [selectLeft, setLeft] = React.useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <ChatRoomHeader show={true} navigation={navigation} />
      <ScrollView>
        {showMessage ? (
          <View
            style={[styles.row, { alignSelf: "center", marginVertical: 15 }]}
          >
            {Tabs &&
              Tabs.map((val, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => setTab(val.name)}
                    style={[
                      activeTab === val.name
                        ? styles.activeBtn
                        : styles.inActiveBtn,
                      { width: "40%" },
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
        ) : (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              setShowMessage(true);
            }}
            activeOpacity={0.7}
            style={styles.specialMessage}
          >
            <Text style={[styles.message, { fontSize: 15 }]}>Click Here</Text>
            <Text style={styles.message}>
              To send Special Request to the Entertainer
            </Text>
          </TouchableOpacity>
        )}

        {activeTab === "Direct Messages" ? (
          <View>
            {sendOther ? (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setShowMessage(true);
                }}
                activeOpacity={0.7}
                style={[
                  styles.specialMessage,
                  { marginTop: 0, backgroundColor: "white" },
                ]}
              >
                <Text
                  style={[
                    styles.message,
                    { fontSize: 15, color: "red", fontWeight: "bold" },
                  ]}
                >
                  Send another request
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}

        <View style={styles.messagesContainer}>
          {activeTab === "Direct Messages" ? (
            <ChatMessages messages={messages && messages} />
          ) : (
            <View>
              <View style={styles.right}>
                <View style={styles.rightMessage}>
                  <Text style={styles.rightText}>
                    Hey Ashley, Zachary has a request for you.
                  </Text>
                  <View
                    style={[
                      styles.row,
                      { marginVertical: 7, flexWrap: "wrap" },
                    ]}
                  >
                    <Text style={styles.rightText}>Who is it for? &nbsp;</Text>
                    <Text>My friend Tom.</Text>
                  </View>
                  <View
                    style={[
                      styles.row,
                      { marginVertical: 7, flexWrap: "wrap" },
                    ]}
                  >
                    <Text style={styles.rightText}>
                      Reason for request? &nbsp;
                    </Text>
                    <Text>A Birthday.</Text>
                  </View>
                  <View
                    style={[
                      styles.row,
                      { marginVertical: 7, flexWrap: "wrap" },
                    ]}
                  >
                    <Text style={styles.rightText}>
                      He woudl the person your requesting this for like to be
                      addressed &nbsp;
                    </Text>
                    <Text>He/Him.</Text>
                  </View>
                  <View
                    style={[
                      styles.row,
                      { marginVertical: 7, flexWrap: "wrap" },
                    ]}
                  >
                    <Text style={styles.rightText}>
                      Type exactly what you would like the Entertainer to
                      say.... &nbsp;
                    </Text>
                    <Text style={{color:"black",fontWeight:"500"}}>
                      Hey, Tom, Happy its Ashley!, Your freind Zachary asked me
                      to give you a big birthday shout out. He is sorry he can
                      not make it to your party but both of us hope you have a
                      great day
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.row,
                    {
                      width: "95%",
                      marginVertical: 2,
                      justifyContent: "flex-end",
                    },
                  ]}
                >
                  <Text
                    style={{ color: "white",  marginRight: 20 }}
                  >
                    Do you accept?
                  </Text>

                  <TouchableOpacity
                    onPress={() => setLeft(!selectLeft)}
                    activeOpacity={0.7}
                  >
                    <View
                      style={{
                        backgroundColor: selectLeft ? "red" : "white",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 7,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        marginRight: 6,
                      }}
                    >
                      {selectLeft ? (
                        <Image
                          style={{
                            width: 14,
                            height: 10,
                            resizeMode: "stretch",
                            alignSelf: "center",
                            marginTop: 1,
                          }}
                          source={require("../../assets/Home/inActive100.png")}
                        />
                      ) : (
                        <Image
                          style={{
                            width: 14,
                            height: 10,
                            resizeMode: "stretch",
                            alignSelf: "center",
                            marginTop: 1,
                          }}
                          source={require("../../assets/Home/active100.png")}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <ChatInput />
      </View>

      {/* Personal Request code */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <BackHeader
            show={true}
            onPress={() => setModalVisible(!modalVisible)}
            navigation={navigation}
          />

          <ScrollView>
            <View style={{ marginVertical: 15, alignSelf: "center" }}>
              <View style={[styles.row]}>
                <Text style={styles.modalTitle}>Special Request </Text>
                <Icon
                  name="video-camera"
                  color="white"
                  size={16}
                  type="font-awesome"
                />
                <Text style={styles.modalTitle}>($900)</Text>
              </View>
              <Text style={styles.modalValue}>
                Give the Entertainer some information
              </Text>
            </View>
            <View style={{ marginVertical: 20, paddingHorizontal: 10 }}>
              <Text style={[{ color: "white", opacity: 0.7, fontSize: 15 }]}>
                Who is it for?
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    height: 60,
                    marginVertical: 10,
                    textAlignVertical: "top",
                    paddingTop: 8,
                    paddingLeft: 10,
                  },
                ]}
                placeholder={"Me or someone else"}
                placeholderTextColor="white"
                multiline={true}
              />
              <Text style={[{ color: "white", opacity: 0.7, fontSize: 15 }]}>
                Reson for this request?
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    height: 80,
                    marginVertical: 10,
                    paddingHorizontal: 13,
                    textAlignVertical: "top",
                    paddingTop: 8,
                    paddingLeft: 10,
                  },
                ]}
                placeholder={"A Birthday, A motivational message, Congratulations, Thank you message, Anniversary, Advice etc"}
                placeholderTextColor="white"
                multiline={true}
              />

              <Text
                style={[
                  {
                    color: "white",
                    opacity: 0.7,
                    fontSize: 15,
                    paddingRight: 10,
                    textAlignVertical: "top",
                    paddingTop: 8,
                    paddingLeft: 10,
                  },
                ]}
              >
                How would the person your requesting this for like to be
                addressed? (Pronouns)
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    height: 70,
                    marginVertical: 10,
                    textAlignVertical: "top",
                    paddingTop: 8,
                    paddingLeft: 10,
                  },
                ]}
                placeholder={"They/Them, She/Her, He/Him or customise"}
                placeholderTextColor="white"
                multiline={true}
              />

              <Text
                style={[
                  {
                    color: "white",
                    opacity: 0.7,
                    fontSize: 15,
                    paddingRight: 10,
                  },
                ]}
              >
                Type exactly what you would like the Entertainer to say
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    height: 60,
                    marginVertical: 10,
                    textAlignVertical: "top",
                    paddingTop: 8,
                    paddingLeft: 10,
                  },
                ]}
                placeholder={"Type here"}
                placeholderTextColor="white"
                multiline={true}
              />

              <TouchableOpacity
                onPress={() => {
                  setTab("Special Request");
                  setSendOther(true);
                  setModalVisible(!modalVisible);
                }}
                style={styles.button}
              >
                <Text style={[{ fontSize: 14, color: "white" }]}>
                  Send Request
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  specialMessage: {
    backgroundColor: "#F90202",
    marginTop: 15,
    paddingVertical: 10,
  },

  message: {
    fontSize: 12,
    color: "white",
    fontWeight: "500",
    opacity: 0.6,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
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
  modal: {
    flex: 1,
    backgroundColor: "black",
  },
  modalTitle: {
    fontSize: 17,
    color: "#f90202",
    marginHorizontal: 3,
  },
  modalValue: {
    color: "white",
    opacity: 0.6,
    fontSize: 10,
    textAlign: "center",
    marginVertical: 2,
  },
  input: {
    borderRadius: 15,
    backgroundColor: "#595959",
    color: "white",
    fontSize: 14,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f90202",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 6,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "black",
  },
  messagesContainer: {
    flex: 1,
    marginVertical: 20,
    paddingBottom: 90,
  },

  right: {
    alignSelf: "flex-end",
    width: "67%",
    marginBottom: 15,
  },
  rightMessage: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: "#F90202",
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
    borderTopEndRadius: 15,
    marginRight: 10,
  },
  rightText: {
    color: "white",
    fontSize: 14,
    opacity: 0.7,
  },
  rightContainer: {
    width: 25,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 3,
    marginVertical: 5,
  },
});
