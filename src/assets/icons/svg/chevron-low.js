import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronLow = ({size = 18, color = "#000"}) => (
  <Svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-down"
  >
    <Path points="6 9 12 15 18 9" d="M4.5 6.75L9 11.25L13.5 6.75" />
  </Svg>
);
export default ChevronLow;