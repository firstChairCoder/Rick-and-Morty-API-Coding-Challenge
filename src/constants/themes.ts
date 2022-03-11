import { DefaultTheme } from "react-native-paper";

export const episodesColor = "rgb(250, 0, 0)";
export const charactersColor = "rgb(0, 190, 0)";

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
