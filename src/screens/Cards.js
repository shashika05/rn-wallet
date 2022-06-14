import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tailwind from "tailwind-rn";

const Cards = () => {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <View style={tailwind("pt-12 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text
            style={
              (tailwind("text-blue-800 font-semibold"),
              { fontFamily: "Kanit-600" })
            }
          >
            Home Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cards;
