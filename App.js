import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  function somar() {
    const novoValor = contador + 1;
    setContador(novoValor);
  }

  function subtrair() {
    const novoValor = contador - 1;
    setContador(novoValor);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => subtrair()}>
        <Text style={styles.buttonText}>Diminuir</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 50 }}>{contador}</Text>
      <TouchableOpacity style={styles.button} onPress={() => somar()}>
        <Text style={styles.buttonText}>Somar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
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
