import React, { Component } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import MaterialButtonPrimary from "../MaterialFiles/MaterialButtonPrimary";
import MaterialButtonPrimary1 from "../MaterialFiles/MaterialButtonPrimary1";
import MaterialUnderlineTextbox1 from "../MaterialFiles/MaterialUnderlineTextbox1";
function ReminderPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.switchRow}>
        <Switch value={true} style={styles.switch}></Switch>
        <Text style={styles.fluidOunces}>Fluid Ounces</Text>
      </View>
      <View style={styles.switch3Row}>
        <Switch value={false} style={styles.switch3}></Switch>
        <Text style={styles.mililiters}>Mililiters</Text>
      </View>
      <View style={styles.switch4Row}>
        <Switch value={false} style={styles.switch4}></Switch>
        <Text style={styles.cups}>Cups</Text>
      </View>
      <MaterialButtonPrimary
        style={styles.materialButtonPrimary}
      ></MaterialButtonPrimary>
      <MaterialButtonPrimary1
        style={styles.materialButtonPrimary1}
      ></MaterialButtonPrimary1>
      <Text style={styles.units}>Units</Text>
      <MaterialUnderlineTextbox1
        style={styles.materialUnderlineTextbox1}
      ></MaterialUnderlineTextbox1>
      <Text style={styles.reminderPage}>Reminder Page</Text>
      <Text style={styles.loremIpsum}>Time Input Method HERE</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switch: {},
  fluidOunces: {
    color: "#121212",
    fontSize: 20,
    marginLeft: 73,
  },
  switchRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 300,
    marginLeft: 65,
    marginRight: 48,
  },
  switch3: {},
  mililiters: {
    color: "#121212",
    fontSize: 20,
    marginLeft: 73,
  },
  switch3Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 65,
    marginRight: 72,
  },
  switch4: {},
  cups: {
    color: "#121212",
    fontSize: 20,
    marginLeft: 73,
  },
  switch4Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 65,
    marginRight: 144,
  },
  materialButtonPrimary: {
    height: 36,
    width: 100,
    borderRadius: 12,
    marginTop: -336,
    marginLeft: 15,
  },
  materialButtonPrimary1: {
    height: 62,
    width: 141,
    borderRadius: 20,
    marginTop: 579,
    marginLeft: 117,
  },
  units: {
    color: "#121212",
    height: 22,
    width: 74,
    fontSize: 24,
    textDecorationLine: "underline",
    marginTop: -485,
    marginLeft: 146,
  },
  materialUnderlineTextbox1: {
    height: 39,
    width: 175,
    marginTop: -88,
    marginLeft: 95,
  },
  reminderPage: {
    color: "#2197f3",
    height: 50,
    width: "100%",
    fontSize: 40,
    justifyContent: "flex-end",
    marginTop: -108,
    marginLeft: 31,
    alignItems: "center",
  },
  loremIpsum: {
    color: "#121212",
    height: 177,
    width: 272,
    fontSize: 45,
    textAlign: "center",
    marginTop: 294,
    marginLeft: 55,
  },
});
export default ReminderPage;
