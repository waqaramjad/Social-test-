import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyACq8f9ZGnxNpky5i5Nrw84ruNMYF2mzYw",
    authDomain: "hundred-app-9f21d.firebaseapp.com",
    databaseURL: "https://hundred-app-9f21d-default-rtdb.firebaseio.com",
    projectId: "hundred-app-9f21d",
    storageBucket: "hundred-app-9f21d.appspot.com",
    messagingSenderId: "1045922962061",
    appId: "1:1045922962061:web:9d00741ca5bc7224c760c4",
    measurementId: "G-VQBM9BQM7D"
};

firebase.initializeApp(firebaseConfig);
import {
  HomeScreen,
  ChatScreen,
  WorldScreen,
  ProfileScreen,
  NotificationScreen,
  LaunchScreen,
  PodcastChannel,
  FollowProfileScreen,
  PostScreen,
  RequestScreen,
  ChatRoomScreen,
  InboxOptionsScreen,
  PostTwoScreen,
  SpalshScreen,
} from "./src/screens";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PostTwo"
        component={PostTwoScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Requests"
        component={RequestScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Launch"
        component={LaunchScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const WorldStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="World"
        component={WorldScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PodcastChannel"
        component={PodcastChannel}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FollowProfile"
        component={FollowProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Requests"
        component={RequestScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="FollowProfile"
        component={FollowProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

function MainAppTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "black",
          borderTopWidth: 2,
          borderTopColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                source={require("./src/assets/TabIcons/homeActive.png")}
                style={{ height: 24, width: 24, marginTop: 10 }}
              />
            ) : (
              <Image
                source={require("./src/assets/TabIcons/homeInActive.png")}
                style={{ height: 24, width: 24, marginTop: 10 }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                source={require("./src/assets/TabIcons/chatActive.png")}
                style={{
                  height: 24,
                  width: 24,
                  marginTop: 10,
                  resizeMode: "stretch",
                }}
              />
            ) : (
              <Image
                source={require("./src/assets/TabIcons/chatInActive.png")}
                style={{
                  height: 24,
                  width: 24,
                  marginTop: 10,
                  resizeMode: "stretch",
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="World"
        component={WorldStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                source={require("./src/assets/TabIcons/worldActive.png")}
                style={{
                  height: 24,
                  width: 24,
                  marginTop: 10,
                  resizeMode: "stretch",
                }}
              />
            ) : (
              <Image
                source={require("./src/assets/TabIcons/worldInActive.png")}
                style={{
                  height: 24,
                  width: 24,
                  marginTop: 10,
                  resizeMode: "stretch",
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                source={require("./src/assets/TabIcons/userActive.png")}
                style={{
                  height: 24,
                  width: 24,
                  marginTop: 10,
                  resizeMode: "stretch",
                }}
              />
            ) : (
              <Image
                source={require("./src/assets/TabIcons/userInActive.png")}
                style={{
                  height: 24,
                  width: 24,
                  marginTop: 10,
                  resizeMode: "stretch",
                }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={SpalshScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="MainApp"
          options={{ headerShown: false }}
          component={MainAppTabs}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="InboxOptions"
          component={InboxOptionsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
