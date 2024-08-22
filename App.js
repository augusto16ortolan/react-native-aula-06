import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MovieModal from "./src/components/MovieModal";
import MovieList from "./src/components/MovieList";

export default function App() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  const showModal = (movie) => {
    setFilmeSelecionado(movie);
    setMostrarModal(true);
  };

  const closeModal = () => {
    setFilmeSelecionado(null);
    setMostrarModal(false);
  };

  return (
    <View style={styles.container}>
      <MovieList showModal={showModal} />
      {mostrarModal && (
        <MovieModal
          closeModal={closeModal}
          filmeSelecionado={filmeSelecionado}
          mostrarModal={mostrarModal}
        />
      )}
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
});
