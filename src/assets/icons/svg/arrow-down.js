import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const ChevronDown = ({size = 25, color = "#000"}) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <G>
      <Path fill="none" d="M0 0h25v25H0z" />
      <Path d="M12.5 16.667l-6.25 -6.25h12.5z" />
    </G>
  </Svg>
);
export default ChevronDown;
