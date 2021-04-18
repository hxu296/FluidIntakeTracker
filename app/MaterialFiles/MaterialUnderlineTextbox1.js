import React, { Component, useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

function MaterialUnderlineTextbox1(props) {
  const [text, setText] = useState("");
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Input Amount"
        style={styles.inputStyle}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      ></TextInput>
      {/* <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 24,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
});

export default MaterialUnderlineTextbox1;
