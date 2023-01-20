import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";

const ChevronDown = ({size = 30, color = "#000"}) => (
  <Svg
    width={size}
    height={size}
    id="magicoon-Filled"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Defs></Defs>
    <G id="chevron-circle-down-Filled">
      <Path
        id="chevron-circle-down-Filled-2"
        data-name="chevron-circle-down-Filled"
        className="cls-1"
        fill={color}
        d="M15 3.125A11.875 11.875 0 1 0 26.875 15 11.886 11.886 0 0 0 15 3.125Zm4.638 11.513 -3.75 3.75a1.268 1.268 0 0 1 -1.775 0l-3.75 -3.75a1.25 1.25 0 0 1 1.775 -1.775L15 15.738l2.862 -2.875a1.25 1.25 0 0 1 1.775 1.775Z"
      />
    </G>
  </Svg>
);
export default ChevronDown;