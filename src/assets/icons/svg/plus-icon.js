import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlusIcon = ({color = "#000", size = 35}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 35 35"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill={color}
      d="M28 17.5c0 0.968 -0.083 1.75 -1.051 1.75H19.25v7.699c0 0.967 -0.782 1.051 -1.75 1.051 -0.968 0 -1.75 -0.085 -1.75 -1.051V19.25H8.051C7.085 19.25 7 18.468 7 17.5c0 -0.968 0.085 -1.75 1.051 -1.75H15.75V8.051C15.75 7.083 16.532 7 17.5 7c0.968 0 1.75 0.083 1.75 1.051V15.75h7.699c0.968 0 1.051 0.782 1.051 1.75z"
    />
  </Svg>
);
export default PlusIcon;
