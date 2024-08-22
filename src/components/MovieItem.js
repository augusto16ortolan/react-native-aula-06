import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import MoviePoster from "./MoviePoster";

export default function MovieItem({ item, showModal }) {
  return (
    <TouchableOpacity
      onPress={() => showModal(item)}
      style={styles.containerMovie}
    >
      <View style={styles.containerImage}>
        <MoviePoster filmeSelecionado={item} />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.year}>{item.year}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flexGrow: 1,
    width: "100%",
  },
  botaoFechar: {
    width: "90%",
    height: 50,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textoBotao: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerMovie: {
    flexDirection: "row",
    width: "100%",
    height: 180,
    borderWidth: 0.2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
    alignItems: "center",
    padding: 10,
  },
  containerInfo: {
    marginLeft: 15,
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    resizeMode: "stretch",
  },
  year: {
    fontSize: 14,
    fontWeight: "400",
    color: "#777",
  },
  containerModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  containerModalInfo: {
    width: "90%",
    height: "70%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    alignItems: "center",
  },
  containerModalImage: {
    alignItems: "center",
    marginBottom: 25,
  },
  scrollModal: {
    flexGrow: 1,
    width: "100%",
  },
});
