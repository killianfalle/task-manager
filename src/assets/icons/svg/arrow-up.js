import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const ArrowUp = ({size = 25, color = "#000"}) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <G>
      <Path fill="none" d="M0 0h25v25H0z" />
      <Path d="M12.5 8.333l6.25 6.25H6.25z" />
    </G>
  </Svg>
);
export default ArrowUp;
