import { View, Text } from "react-native";
import React from "react";
import tailwind from "tailwind-rn";
import { LinearGradient } from "expo-linear-gradient";

const Note = () => {
  return (
    <View style={tailwind("px-3 py-1 rounded-full")}>
      <Text
        style={
          (tailwind("text-blue-800 font-semibold"), { fontFamily: "Kanit-600" })
        }
      >
        Title
      </Text>
    </View>
  );
};

export default Note;
