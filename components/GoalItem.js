import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ data, deleteItem }) => {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "rgba(255,255,255, 0.1)" }}
        onPress={() => deleteItem(data.item.id)}
      >
        <Text style={styles.listText}>{data.item.goal}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#675FFF",
    borderRadius: 6,
    marginBottom: 4,
  },
  listText: {
    color: "white",
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontWeight: 600,
    fontSize: 15,
  },
});

export default GoalItem;
