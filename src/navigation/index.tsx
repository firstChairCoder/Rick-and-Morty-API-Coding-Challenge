import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image } from "react-native";

import type { bottomTabNavigatorParams } from "../types/navigationTypes";
import { charactersColor, episodesColor } from "../constants/themes";
import EpisodesStack from "./EpisodesStack";
import CharactersStack from "./CharactersStack";

const Tab = createMaterialBottomTabNavigator<bottomTabNavigatorParams>();

const RootTab = () => {
  return (
    <Tab.Navigator shifting activeColor={"#FFF"}>
      <Tab.Screen
        name={"Episodes"}
        component={EpisodesStack}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/images/epiIcon.png")}
            />
          ),
          tabBarTestID: "EpisodesTab",
          tabBarColor: episodesColor,
        }}
      />
      <Tab.Screen
        name={"Characters"}
        component={CharactersStack}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/images/charIcon.png")}
            />
          ),
          tabBarTestID: "CharactersTab",
          tabBarColor: charactersColor,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTab;
