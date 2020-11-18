import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login/Login";
import Home from "../Screens/Home/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Room from "../Screens/Room/Room";
import Menu from "./Menu";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

let Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerStack = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
  </Drawer.Navigator>
);

let AppStack = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContent={Menu}
      style={{ flex: 1 }}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Room" component={Room} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppStack;
