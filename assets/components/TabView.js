import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Globals from '../../util/Globals';
import colors from '../colors/colors';

const TabView = ({ id, title, onPress, isActive }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.item, isActive ? styles.activeView : null]}>
      <Text key={id} style={[styles.itemTitle, isActive ? styles.activeItem : null,]}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    height: 50,
    width: Globals.SCREEN_SIZE.width / 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.outline,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "600",
    color: colors.textGray,
  },
  activeItem: {
    color:colors.textBold,
  },
  activeView: {
      borderBottomWidth: 3,
      borderBottomColor: colors.primary
  }
});

export default TabView;
