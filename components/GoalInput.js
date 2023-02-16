import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText === "") {
      return;
    }
    props.addInput(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          defaultValue={enteredGoalText}
        />
        <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={props.onCancel} />
        </View>
      </View>
      <Image
        source={require("../assets/images/goals.png")}
        style={styles.image}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 100,
    flex: 1,
    backgroundColor:'#131318'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "90%",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#ccc",
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  image: {
    width: 400,
    height: 400,
  },
});

export default GoalInput;
