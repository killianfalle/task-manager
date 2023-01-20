import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CloseIcon = ({size = 16, color = "#000"}) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
     <Path
      d="M16 1.611L14.389 0L8 6.389L1.611 0L0 1.611L6.389 8L0 14.389L1.611 16L8 9.611L14.389 16L16 14.389L9.611 8L16 1.611Z"
      fill={color}
    />
  </Svg>
);
export default CloseIcon;
