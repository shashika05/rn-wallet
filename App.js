import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Octicons, FontAwesome5 } from "@expo/vector-icons";

import { useFonts } from "expo-font";
// import tailwind from "tailwind-rn";

// Screens
import Cards from "./src/screens/Cards";
import Password from "./src/screens/Password";
import Notes from "./src/screens/Notes";

const Tab = createBottomTabNavigator();

export default function App() {
  const [notesCount, setNotesCount] = useState(0);
  const [passCount, setPassCount] = useState(0);
  const [cardsCount, setCardsCount] = useState(0);

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
          name="Notes"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="sticky-note"
                  size={30}
                  color={!focused ? "black" : "#3b82f6"}
                />
              );
            },
            tabBarBadge: notesCount,
            tabBarInactiveTintColor: "red",
            tabBarShowLabel: false,

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
          children={() => (
            <Notes setNotesCount={setNotesCount} notesCount={notesCount} />
          )}
        />
        <Tab.Screen
          name="Passwords"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Octicons
                  name="key-asterisk"
                  size={28}
                  color={!focused ? "black" : "#3b82f6"}
                />
              );
            },
            tabBarBadge: 3,
            tabBarShowLabel: false,
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
          children={() => (
            <Password setPassCount={setPassCount} passCount={passCount} />
          )}
        />

        <Tab.Screen
          name="Cards"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <AntDesign
                  name="creditcard"
                  size={34}
                  color={!focused ? "black" : "#3b82f6"}
                />
              );
            },
            tabBarBadge: 3,
            tabBarShowLabel: false,
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
          children={() => (
            <Cards setCardsCount={setCardsCount} cardsCount={cardsCount} />
          )}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
