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
} from "react-native";

import * as firebase from 'firebase';
import MainHeader from "../../components/MainHeader/MainHeader";
import { Input, Icon } from "react-native-elements";
import HomeCard from "../../components/HomeCard/HomeCard";
import LoadingView from "../../components/Loading/LoadingView";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import SearchInput, { createFilter } from 'react-native-search-filter';
const categories = ['All','Podcasts','Sport','Music','Gaming','Dance','Wellness','Fashion','Food','Beauty','Travel','TV & Movies'
,'Business & Finance','Technology','Home & Decor','Art','Architecture','Photography','Languages','Comedy',]

const photos = [
  {
    path: require("../../assets/Home/1.png"),
    title: "James Bowers",
    sideIcon: require("../../assets/Home/heart.png"),
    description:
      "Join me as i speak about my new target range with special guest",
  },
  {
    path: require("../../assets/Home/2.png"),
    sideIcon: require("../../assets/Home/heart.png"),

    title: "Isabella NuneZ",
    description:
      "Join me as i speak about my new target range with special guest",
  },
  {
    path: require("../../assets/Home/1.png"),
    sideIcon: require("../../assets/Home/heart.png"),

    title: "James Bowers",
    description:
      "Join me as i speak about my new target range with special guest",
  },
];

const clips = [
  {
    path: require("../../assets/Home/3.png"),
    title: "Hugh Nunes & David Horne",
    description: "Today me and David will talk about our next exibition",
    sideIcon: require("../../assets/Home/dance.png"),
  },
  {
    path: require("../../assets/Home/5.png"),
    sideIcon: require("../../assets/Home/heart.png"),

    title: "Eli Jones",
    description:
      "Hey guys join me and follow the target range with special guest",
  },
];

const podcast = [
  {
    path: require("../../assets/Home/6.png"),
    title: "Trevor Neison",
    description:
      "I`ll giving you a sneak peek at my new shoe range with under armour",
  },
  {
    path: require("../../assets/Home/3.png"),
    title: "Hug Nuez & David",
    description: "Today me and David will talk about our next exibition",
  },
];

const liveShows = [
  {
    path: require("../../assets/Home/7.png"),
    title: "Colin Adams",
    description: "Join me for an inside look at my preseason",
    sideIcon: require("../../assets/Home/dance.png"),
  },
  {
    path: require("../../assets/Home/4.png"),
    title: "Joe Gill",
    description: "Today me and David will talk about our next exibition",
    sideIcon: require("../../assets/Home/heart.png"),
  },
];

const highlights = [
  {
    path: require("../../assets/Home/9.png"),
    title: "David Haye",
    description:
      "I am going to answering your questions about my upcoming fight vs Derek Chusora",
    sideIcon: require("../../assets/Home/sport.png"),
  },
  {
    path: require("../../assets/Home/10.png"),
    title: "The Rock",
    description:
      "I am going to answering your questions about my upcoming fight vs Derek Chusora",
    sideIcon: require("../../assets/Home/dumbell.png"),
  },
];




function HomeScreen({ navigation }) {
  const [set, setImg] = React.useState(false);
  const [Loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [MainData, setMainData] = React.useState([]);
  const [searchInput, setsearchInput] = React.useState('');
  const _menu = React.useRef(null);

  function hideMenu(val) {

    let Category = {
      [val] : MainData[val]
    }
    setImg(false);
    _menu.current.hide();
     setData(val=='All' || MainData[val] == undefined ? MainData :Category)
  }


  function showMenu() {
    setImg(true);
    _menu.current.show();
  }

function selectDropDown(){

}

  useEffect(() => {
    setLoading(true)
    firebase.database().ref('Sections/').once('value').then(snapshot => {
     const message = snapshot.val();
     console.log("data",message , snapshot )
     // message.key = snapshot.key;
     // setMessages is the state updater for messages
     // instead of an object with messages: messagesArray
     // just save it as an array the name is already messages
     setLoading(false)

     setData(message);
     setMainData(message);
   });
 // useEffect takes an array as second argument with the dependencies
 // of the effect, if one of the dependencies changes the effect will rerun
 // provide an empty array if you want to run this effect only on mount
 }, []);
let testObj = [
   {
    name :"das1" , 
    dis :"qqq" , 
    title : 'sdfff'
  } ,
  {
    name :"das2" , 
    dis :"qqq" , 
    title : 'sdfff'
  } ,
  {
    name :"das3" , 
    dis :"qqq" , 
    title : 'sdfff'
  } ,
]
const filteredData =testObj
      ?testObj?.filter(createFilter(searchInput, ['name','dis' , 'title']))
      : [];
      // console.log('render data', data)
      console.log('filteredData', filteredData)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <MainHeader navigation={navigation} />

      <View style={styles.searchContainer}>
        <View style={{ width: "70%", marginLeft: -5 }}>
          <Input
            onChangeText={text => {setsearchInput(text)}}
            value={searchInput}
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
            placeholderTextColor="#404040"
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
            placeholder="Search Entertainment"
          />
        </View>

        <View style={{ width: "100%" }}>
          <Menu
            ref={_menu}
            style={{
              marginTop: 60,
              justifyContent: "center",
              alignItems: "center",
              height:400
            }}
            onHidden={() => setImg(false)}
            button={
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => showMenu()}
                style={styles.row}
              >
                <Text style={styles.text}>Category</Text>
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
            {/* <MenuItem
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
            </MenuItem> */}
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
      </View>
      <ScrollView  showsVerticalScrollIndicator={false}>
      { Loading ? <LoadingView/> :    <View style={styles.body}>
        {
      
         Object.keys(data).map((key , index)=>{
           let value = data[key]
          return (
            <View style={styles.cardContainer}>
            <Text style={styles.title}>{value.title}</Text>
            <ScrollView horizontal>
              {
                value?.Posts?.map((val, i) => {
                  return (
                    <HomeCard
                      onPress={() => navigation.navigate("Post" ,{Posts:value})}
                      key={i}
                      path={{uri:val.url}}
                      title={val.name}
                      description={val.description}
                      profile_Url = {val.profile_Url}
                    />
                  );
                })}
        
            </ScrollView> 
          </View> 
          )
         })
        }
        </View> 
}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: "2%",
    paddingVertical: 10,
  },

  searchContainer: {
    marginTop: 20,
    flexDirection: "row",
    marginBottom: -15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    height: 37,
    borderRadius: 8,
    paddingHorizontal: 6,
    width: "28%",
  },
  text: {
    fontSize: 15,
    color: "#6B6B6B",
    marginRight: 3,
  },
  body: {
    paddingHorizontal: 6,
  },
  title: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardContainer: {
    marginVertical: 10,
  },
});
