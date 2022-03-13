import type { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
import type {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type episodesNativeStackNavigatorParams = {
  AllEpisodes: undefined;
  Episode: { id: string };
};
export type charactersNativeStackNavigatorParams = {
  AllCharacters: undefined;
  Character: { id: string; name: string; species: string };
};

export type bottomTabNavigatorParams = {
  Episodes:
    | NavigatorScreenParams<episodesNativeStackNavigatorParams>
    | undefined;
  Characters:
    | NavigatorScreenParams<charactersNativeStackNavigatorParams>
    | undefined;
};

export type bottomNavigationProp =
  MaterialBottomTabNavigationProp<bottomTabNavigatorParams>;

export type episodesNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<episodesNativeStackNavigatorParams>,
  MaterialBottomTabNavigationProp<bottomTabNavigatorParams>
>;

export type charactersNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<charactersNativeStackNavigatorParams>,
  MaterialBottomTabNavigationProp<bottomTabNavigatorParams>
>;

export type episodesRouteParams = NativeStackNavigationProp<
  episodesNativeStackNavigatorParams,
  "Episode"
>;
export type charactersRouteParams = NativeStackNavigationProp<
  charactersNativeStackNavigatorParams,
  "Character"
>;
