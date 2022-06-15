import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tailwind from "tailwind-rn";
import { useRoute } from "@react-navigation/native";

const AddBtn = () => {
  const route = useRoute();
  const addCard = () => {};
  const addPassword = () => {};
  const addNotes = () => {};
  const btnTitle = () => {
    if (route.name == "Cards") {
      return "Add Card";
    }
    if (route.name == "Passwords") {
      return "Add Password";
    }
    if (route.name == "Notes") {
      return "Add Notes";
    }
  };
  return (
    <View style={tailwind("absolute bottom-2 w-24 right-2 items-center")}>
      <TouchableOpacity
        onPress={() => console.log("pressed")}
        style={tailwind(
          "w-16 h-16 bg-blue-500 rounded-full items-center justify-center"
        )}
      >
        <Text style={{ fontSize: 40, fontFamily: "Kanit-800" }}>+</Text>
      </TouchableOpacity>
      <Text style={{ fontFamily: "Kanit-400" }}>{btnTitle()}</Text>
    </View>
  );
};

export default AddBtn;
