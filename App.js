import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Octicons, FontAwesome5 } from "@expo/vector-icons";

import { useFonts } from "expo-font";

import Cards from "./src/screens/Cards";
import tailwind from "tailwind-rn";

const Tab = createBottomTabNavigator();

export default function App() {
  let [loaded] = useFonts({
    "Kanit-300": require("./src/fonts/Kanit-300.ttf"),
    "Kanit-300i": require("./src/fonts/Kanit-300i.ttf"),
    "Kanit-400": require("./src/fonts/Kanit-400.ttf"),
    "Kanit-400i": require("./src/fonts/Kanit-400i.ttf"),
    "Kanit-500": require("./src/fonts/Kanit-500.ttf"),
    "Kanit-500i": require("./src/fonts/Kanit-500i.ttf"),
    "Kanit-600": require("./src/fonts/Kanit-600.ttf"),
    "Kanit-600i": require("./src/fonts/Kanit-600i.ttf"),
    "Kanit-700": require("./src/fonts/Kanit-700.ttf"),
    "Kanit-700i": require("./src/fonts/Kanit-700i.ttf"),
    "Kanit-800": require("./src/fonts/Kanit-800.ttf"),
    "Kanit-800i": require("./src/fonts/Kanit-800i.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Cards"
          options={{
            tabBarIcon: () => {
              return <AntDesign name="creditcard" size={28} color="black" />;
            },
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              fontFamily: "Kanit-400",
              fontSize: 12,
            },
            tabBarLabelStyle: {
              fontFamily: "Kanit-400",
              fontSize: 12,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 30,
              fontFamily: "Kanit-500",
            },
          }}
          component={Cards}
        />
        <Tab.Screen
          name="Passwords"
          options={{
            tabBarIcon: () => {
              return <Octicons name="key-asterisk" size={24} color="black" />;
            },
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              fontFamily: "Kanit-400",
              fontSize: 12,
            },
            tabBarLabelStyle: {
              fontFamily: "Kanit-400",
              fontSize: 12,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 30,
              fontFamily: "Kanit-500",
            },
          }}
          component={Cards}
        />
        <Tab.Screen
          name="Notes"
          options={{
            tabBarIcon: () => {
              return (
                <FontAwesome5 name="sticky-note" size={24} color="black" />
              );
            },
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              fontFamily: "Kanit-400",
              fontSize: 12,
            },
            tabBarLabelStyle: {
              fontFamily: "Kanit-400",
              fontSize: 12,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 30,
              fontFamily: "Kanit-500",
            },
          }}
          component={Cards}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
