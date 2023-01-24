import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronHigh = ({size = 18, color = "#000"}) => (
  <Svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-up"
  >
    <Path points="18 15 12 9 6 15" d="M13.5 11.25L9 6.75L4.5 11.25" />
  </Svg>
);
export default ChevronHigh;