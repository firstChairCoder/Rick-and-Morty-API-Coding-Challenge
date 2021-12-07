//Edit
import * as React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

import colors from "../colors/colors";

function Upload(props) {
  return (
    <View style={{ alignItems: "center" }}>
      <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.376 20.028l8.787-11.363c.477-.612.647-1.32.488-2.042-.138-.656-.541-1.28-1.146-1.752L16.03 3.699c-1.284-1.021-2.876-.914-3.789.258l-.986 1.28a.378.378 0 00.063.526l2.547 2.042c.17.162.297.377.33.635a.945.945 0 01-.818 1.042.846.846 0 01-.647-.182l-2.621-2.086a.313.313 0 00-.425.054L3.455 15.33c-.403.505-.541 1.161-.403 1.795l.796 3.451a.4.4 0 00.392.312l3.502-.043a2.104 2.104 0 001.634-.817zm4.904-1.075h5.71c.557 0 1.01.46 1.01 1.024 0 .565-.453 1.023-1.01 1.023h-5.71c-.557 0-1.01-.458-1.01-1.023s.453-1.024 1.01-1.024z"
          fill="#9FA5C0"
        />
      </Svg>
      <Text
        style={{
          fontSize: 12,
          lineHeight: 14.5,
          fontWeight: "500",
          marginTop: 8,
          color: colors.textGray,
        }}
      >
        Upload
      </Text>
    </View>
  );
}

export default Upload;
