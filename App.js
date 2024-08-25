import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

let number = Math.floor(Math.random() * 100) + 1;
// console.log({ number });

export default function App() {
  const [guess, setGuess] = useState("");
  const [counter, setCounter] = useState(1);
  const [msg, setMsg] = useState("Guess a number between 1-100");

  const makeGuess = () => {
    const guessMade = parseInt(guess);
    let message;
    if (guessMade === number) {
      Alert.alert(`You guessed the number in ${counter} guesses`);
      setCounter(1);
      setGuess("");
      message = "Guess a number between 1-100";
      number = Math.floor(Math.random() * 100) + 1;
      // console.log({ number });
    } else if (guessMade !== number) {
      if (guessMade > number) {
        message = `Your guess ${guessMade} is too high`;
      } else {
        message = `Your guess ${guessMade} is too low`;
      }
      setCounter(counter + 1);
      setGuess("");
    }
    setMsg(message);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{msg}</Text>
      <TextInput
        onChangeText={(guess) => setGuess(guess)}
        value={guess}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button onPress={makeGuess} title="Make guess" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
