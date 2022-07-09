import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import tailwind from "tailwind-rn";
import { Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const AddBtn = ({ setNotesCount, notesCount }) => {
  // const [btnTitle, setBtnTitle] = useState("Add Notes");
  const route = useRoute();
  const addBtn = () => {
    // setNotesCount(0);
    if (route.name == "Cards") {
      //
    }
    if (route.name == "Passwords") {
      //
    }
    if (route.name == "Notes") {
      // setNotesCount(0);
      // setNotesCount(notesCount++);
    }
  };
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
        onPress={() => addBtn()}
        style={tailwind(
          "w-16 h-16 bg-blue-500 rounded-full items-center justify-center"
        )}
      >
        <Entypo name="plus" size={44} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "Kanit-400" }}>{btnTitle()}</Text>
    </View>
  );
};

export default AddBtn;
