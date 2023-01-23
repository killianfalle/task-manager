import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Checkmark = ({size = 16, color = "#000"}) => (
  <Svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path fill={color} d="M5.434 13.731l-5.2 -5.2c-0.313 -0.313 -0.313 -0.819 0 -1.131l1.131 -1.131c0.313 -0.313 0.819 -0.313 1.131 0L6 9.771 13.503 2.269c0.313 -0.313 0.819 -0.313 1.131 0l1.131 1.131c0.313 0.313 0.313 0.819 0 1.131l-9.2 9.2c-0.313 0.313 -0.819 0.313 -1.131 0z" />
  </Svg>
);
export default Checkmark;