import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

function CustomInput(props) {
  return (
    <View style={{ marginTop: 15 }}>
      <TextInput
        style={{
          height: 120,
          borderRadius: 15,
          backgroundColor: "#595959",
          color: "white",
          fontSize: 15,
          paddingHorizontal: 10,
          paddingLeft: 10,
          paddingTop: 15,
          marginBottom: 20,
          textAlignVertical: "top",
        }}
        placeholder={props.placeholder}
        placeholderTextColor="lightgrey"
        multiline={true}
      />
    </View>
  );
}

export default CustomInput;
