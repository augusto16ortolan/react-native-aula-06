import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { movies } from "./movies";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.containerMovie}>
              <Image source={{ uri: item.post }} />
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flexGrow: 1,
    width: "100%",
  },
  containerMovie: {
    width: 343,
    height: 180,
    borderWidth: 0.2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  button: {
    width: 100,
    height: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
});
