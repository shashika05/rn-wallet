import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import tailwind from "tailwind-rn";

import AddBtn from "../components/AddBtn";
import Note from "../components/Note";

const Notes = ({ setNotesCount, notesCount }) => {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <ScrollView>
        <View style={tailwind("pt-12 items-center")}>
          <Note />
        </View>
      </ScrollView>
      <AddBtn setNotesCount={setNotesCount} notesCount={notesCount} />
    </SafeAreaView>
  );
};

export default Notes;
