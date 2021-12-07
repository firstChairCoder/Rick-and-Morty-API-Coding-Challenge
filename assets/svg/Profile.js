//Profile
import * as React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

import colors from "../colors/colors";

function Profile(props) {
  return (
    <View style={{alignItems: 'center'}}>
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
          d="M17.294 7.291A5.274 5.274 0 0112 12.583a5.275 5.275 0 01-5.294-5.292A5.274 5.274 0 0112 2a5.273 5.273 0 015.294 5.291zM12 22c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425C20 21.32 16.315 22 12 22z"
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
        Profile
      </Text>
    </View>
  );
}

export default Profile;
