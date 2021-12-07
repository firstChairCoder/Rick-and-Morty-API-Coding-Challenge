import { Dimensions } from "react-native";

let { width, height } = Dimensions.get("window");

module.exports = {
  SCREEN_SIZE: {
    width,
    height,
  },
};
