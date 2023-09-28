import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModal = () => {
    setModalIsVisible(true);
  };

  const addGoalHandler = (inp) => {
    setGoalList((prev) => [...prev, inp]);
  };

  const onDeleteHandler = (id) => {
    setGoalList((list) => {
      return list.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#675FFF" onPress={showModal} />

        <GoalInput
          addGoal={addGoalHandler}
          modalVisible={modalIsVisible}
          closeModal={() => setModalIsVisible(false)}
        />

        <View style={styles.listContainer}>
          <FlatList
            data={goalList}
            renderItem={(goalData) => (
              <GoalItem data={goalData} deleteItem={onDeleteHandler} />
            )}
            keyExtractor={(data, index) => {
              return data.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 16,
  },

  listContainer: {
    marginTop: 24,
  },
});
