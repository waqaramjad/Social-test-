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
  Switch,
} from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { Input, Icon } from "react-native-elements";
import ChatRoomHeader from "../../components/ChatRoomHeader/ChatRoomHeader";

function InboxOptionsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <ChatRoomHeader show={false} navigation={navigation} />
      <ScrollView>
        <View style={{ marginVertical: 20 }}>
          <View style={styles.row}>
            <Text style={styles.title}>Mute Messages</Text>

            <Switch
              trackColor={{ false: "white", true: "white" }}
              thumbColor={isEnabled ? "red" : "grey"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.title}>Report</Text>
            <Icon
              type="materialIcons"
              color="red"
              size={30}
              name="keyboard-arrow-right"
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Block</Text>
            <Icon
              type="materialIcons"
              color="red"
              size={30}
              name="keyboard-arrow-right"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default InboxOptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },

  title: {
    color: "white",
    fontSize: 16,
    opacity: 0.9,
    marginVertical: 10,
  },
});
