import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ToDo from "./ToDo";
import Done from "./Done";
import Splash from "./Splash";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "ToDo") {
            iconName = clipboard - list;
            size = focused ? 25 : 20;
          } else if (route.name === "Done") {
            iconName = clipboard - check;
            size = focused ? 25 : 20;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
          activeTintColor: '#0080ff',
          inactiveTintColor: '#777',
          labelStyle:{fontSize: 15, fontWeight: 'bold' }
      }}
    >
      <Tab.Screen name="ToDo" component={ToDo} />
      <Tab.Screen name="Done" component={Done} />
    </Tab.Navigator>
  );
}
