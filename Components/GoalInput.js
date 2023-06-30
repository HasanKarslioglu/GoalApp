import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <>
        <StatusBar backgroundColor="#1f1f1fee" barStyle="light-content" />
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Your Course Goal!"
            onChangeText={goalInputHandler}
            placeholderTextColor="#b6b9d2ba"
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Add Goal"
                onPress={addGoalHandler}
                color={"#00f7009b"}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={props.onCancel}
                color={"#e5152abe"}
              />
            </View>
          </View>
        </View>
      </>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  TextInput: {
    color: "white",
    borderWidth: 1,
    borderColor: "#b6b9d2",
    width: "95%",
    borderRadius: 12,
    padding: 12,
    marginRight: 6,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    flex: 1,
    backgroundColor: "#1f1f1fee",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  button: {
    width: "25%",
    marginHorizontal: 16,
  },
});
