import { StyleSheet, View, Text, Touchable, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#0b636a" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 6,
    backgroundColor: "#343541",
  },
  goalText: {
    padding: 16,
    color: "white",
  },
});
