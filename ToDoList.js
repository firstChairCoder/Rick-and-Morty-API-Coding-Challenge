import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>

      <View style={styles.circular} />
    </View>
  );
};

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [tasksItems, setTasksItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTasksItems([...tasksItems, task]);
    setTask(null);
  };

  const completeTask = () => {
    let itemsCopy = [...tasksItems];
    itemsCopy.splice(index, 1);
    setTasksItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {tasksItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => completeTask(index)}>
                <Task key={index} text={item} />;
              </TouchableOpacity>
            );
          })}
          <Task text="Task 1" />
          <Task text="Task 2" />
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a Task"
          onChangeText={(text) => setTask(text)}
          value={task}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    opacity: 0.4,
    backgroundColor: "#55bcf6",
    borderRadius: 5,
    marginRight: 15,
  },
  itemLeft: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: "#55bcf6",
    borderWidth: 2,
    borderRadius: 5,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText: {},
});
