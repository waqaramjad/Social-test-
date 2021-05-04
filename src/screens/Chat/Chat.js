import React , { useState, useEffect } from "react";
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
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatCard from "../../components/ChatCard/ChatCard";
import * as firebase from 'firebase';
import LoadingView from "../../components/Loading/LoadingView";

const categories = ['Podcast','Sport','Music','Gaming','Dance','Wellness','Fashion','Food','Beauty','Travel','TV & Movies'
,'Business & Finance','Technology','Home & Decor','Art','Architecture','Photography','Languages','Comedy',]

const data1 = [
  {
    name: "Ashley Diaz",
    date: "10 june 13.00",
    type: "Following",
    verify: true,
    path: require("../../assets/Chat/ash.png"),
    description:
      "Warrior`s Klay Thompson has surgery on achillies injury; full recovery expected",
  },
  {
    name: "Roger Thomas",
    date: "10 june 13.00",
    type: "Recommended",
    verify: false,
    description: "Review Nikes NFL range",
    path: require("../../assets/Chat/2.png"),
  },
  {
    name: "Jaye Powers",
    date: "10 june 13.00",
    type: "Promoted",
    verify: false,
    description: "Cardi B makes American Music Awards history",
    path: require("../../assets/Chat/noti1.png"),
  },
];

function ChatScreen({ navigation }) {
  const [select, setSelect] = React.useState(false);
  const [Loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [MainData, setMainData] = React.useState([]);
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
  function hideMenu1(value) {

    let newArr =   MainData?.Posts?.filter(function(val){return val.type==value ;})
   let obj = {
     Posts : newArr
   }
    console.log("hideMenu1",newArr)
    setSelect(false);
    setData(value=='All' ? MainData : obj);
    _menu1.current.hide();
  }

  function showMenu1() {
    setSelect(true);
    _menu1.current.show();
  }

  useEffect(() => {
    setLoading(true)
    firebase.database().ref('ChitChat/').once('value').then(snapshot => {
     const message = snapshot.val();
     console.log("data",message , snapshot )
   
     setLoading(false)

     setData(message);
     setMainData(message);
   });
 // useEffect takes an array as second argument with the dependencies
 // of the effect, if one of the dependencies changes the effect will rerun
 // provide an empty array if you want to run this effect only on mount
 }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />

      <ChatHeader navigation={navigation} />

      <ScrollView >
        <View >
          <View
            style={{
              paddingHorizontal: "2%",
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View style={{ width: "20%" }}>
              <Menu
                ref={_menu}
                style={{ marginTop: 50 , height:400 }}
                onHidden={() => setImg(false)}
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
                        size={30}
                      />
                    ) : (
                      <Icon
                        type="material"
                        name="keyboard-arrow-down"
                        color={"#F90202"}
                        size={30}
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
                placeholderTextColor="#404040"
                placeholder="Search Chit Chat"
              />
            </View>
            <View>
              <Menu
                ref={_menu1}
                style={{ marginVertical: 5 }}
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
                <MenuItem
                  style={{ paddingHorizontal: 10 }}
                  onPress={() => hideMenu1('All')}
                >
                  All
                </MenuItem>
                <MenuItem
                  style={{ paddingHorizontal: 10 }}
                  onPress={() => hideMenu1('Following')}
                >
                  Following
                </MenuItem>
                <MenuItem
                  style={{ paddingHorizontal: 10 }}
                  onPress={() => hideMenu1('Recommeded')}
                >
                  Recommended
                </MenuItem>
                <MenuItem
                  style={{ paddingHorizontal: 10 }}
                  onPress={() => hideMenu1('Promoted')}
                >
                  Promoted
                </MenuItem>
              </Menu>
            </View>
          </View>
          <View >
          { Loading ? <LoadingView/> :
          <View >
          {data &&
              data?.Posts?.map((val, i) => {
                return (
                  <ChatCard
                    name={val.name}
                    date={val.date}
                    description={val.description}
                    verify={val.verified}
                    path  ={{uri : val.profile_Url}}
                    navigation={navigation}
                    upCounts={val.upCounts}
                    downCounts={val.downCounts}
                    commentsCounts = {val.commentsCounts}
                    key={i}
                    type={val.type}
                  />
                );
              })}
              </View>
}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ChatScreen;

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
