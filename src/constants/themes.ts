import { DefaultTheme } from "react-native-paper";

export const episodesColor = "rgb(8, 178, 201)";
export const charactersColor = "rgb(128, 255, 49)";

export const episodesTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: episodesColor,
  },
};

export const charactersTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: charactersColor,
  },
};
