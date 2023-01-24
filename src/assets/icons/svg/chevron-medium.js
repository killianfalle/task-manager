import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronMedium = ({size = 18, color = "#000"}) => (
  <Svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    className="bi bi-chevron-bar-up"
  >
    <Path
      fillRule="evenodd"
      d="M4.102 13.336a0.563 0.563 0 0 0 0.796 0L9 9.233l4.102 4.103a0.563 0.563 0 0 0 0.796 -0.796l-4.5 -4.5a0.563 0.563 0 0 0 -0.796 0l-4.5 4.5a0.563 0.563 0 0 0 0 0.796zM2.7 5.85c0 0.247 0.202 0.45 0.45 0.45h11.7a0.45 0.45 0 0 0 0 -0.9H3.15a0.45 0.45 0 0 0 -0.45 0.45z"
    />
  </Svg>
);
export default ChevronMedium;