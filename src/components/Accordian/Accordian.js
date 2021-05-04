import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: props.expanded ? props.expanded : false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.row}
          onPress={() => this.toggleExpand()}
        >
          <Text
            style={[
              styles.title,
              {
                color: "white",
                fontWeight: "500",
              },
            ]}
          >
            {this.props.title}
          </Text>

          <Icon
            name={
              this.state.expanded ? "chevron-thin-down" : "chevron-thin-down"
            }
            size={20}
            color={this.state.expanded ? "black" : "#F90202"}
            type="entypo"
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View
            style={{
              paddingVertical: 10,
            }}
          >
            <ScrollView scrollEnabled={true}>{this.props.children}</ScrollView>
          </View>
        )}
      </View>
    );
  }

  onClick = (index) => {
    const temp = this.state.data.slice();
    temp[index].value = !temp[index].value;
    this.setState({ data: temp });
  };

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 54,
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "500",
  },
  itemActive: {
    fontSize: 12,
    color: "grey",
  },
  itemInActive: {
    fontSize: 12,
    color: "grey",
  },
  btnActive: {
    borderColor: "green",
  },
  btnInActive: {
    borderColor: "grey",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
    borderBottomColor: "lightgrey",
  },
  childRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "grey",
  },
  parentHr: {
    height: 1,
    color: "white",
    width: "100%",
  },
});
