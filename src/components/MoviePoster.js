import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function MoviePoster({ filmeSelecionado }) {
  return (
    <Image
      source={{
        uri: filmeSelecionado.poster,
      }}
      style={{ width: 120, height: 160, resizeMode: "cover" }}
    />
  );
}
