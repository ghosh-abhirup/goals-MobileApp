import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";

const GoalInput = ({ addGoal, modalVisible, closeModal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const textInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const onAddGoalHandler = () => {
    addGoal({ id: uuid.v4(), goal: enteredGoal });
    setEnteredGoal("");
    closeModal();
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputView}>
        <Image style={styles.imgStyle} source={require("../assets/goal.png")} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TextInput
            placeholder="Your goal"
            style={styles.inputFIeld}
            onChangeText={textInputHandler}
            value={enteredGoal}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Add goal"
            onPress={onAddGoalHandler}
            color={"#5e0acc"}
          />
          <Button title="Cancel" onPress={closeModal} color={"#f31282"} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },

  inputFIeld: {
    width: "80%",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 10,
    marginBottom: 8,
    color: "white",
  },

  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },

  imgStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
