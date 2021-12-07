import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Splash({ navigation }) {
  useEffect(() => {
    createChannels();
    setTimeout(() => {
        navigation.replace("Home")
    }, 2000);
  }, []);

  const createChannels = () => {
      PushNotificiation.createChannel(
          {
              channelId: "task-channel",
              channelName: "Task Channel"
          }
      )
  }

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <Text style={styles.text}>Mash To-Do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "0080ff",
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: "#fff",
  },
});
