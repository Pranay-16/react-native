import React, { Component } from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Userlist from "./components/Userlist";
import Userdetail from "./components/Userdetail";

export default class App extends Component {
  render() {
    const stack = createStackNavigator();
    return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="List" component={Userlist} />
          <stack.Screen name="Detail" component={Userdetail} />
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}
