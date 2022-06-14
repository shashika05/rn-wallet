import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Home from "./src/screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: () => {
              return <AntDesign name="home" size={24} color="black" />;
            },
            tabBarBadge: 3,
          }}
          component={Home}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
