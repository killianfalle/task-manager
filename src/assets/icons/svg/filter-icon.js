import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const FilterIcon = ({size = 28, color = "#000"}) => (
  <Svg
    width={size}
    height={size}
    enableBackground="new 0 0 32 32"
    id="Stock_cut"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <G>
      <Path
        cx={5}
        cy={8}
        fill="none"
        r={2}
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.75}
        d="M6.125 7A1.75 1.75 0 0 1 4.375 8.75A1.75 1.75 0 0 1 2.625 7A1.75 1.75 0 0 1 6.125 7z"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.75}
        x1={7}
        x2={32}
        y1={8}
        y2={8}
        d="M6.125 7L28 7"
      />
      <Path
        cx={5}
        cy={24}
        fill="none"
        r={2}
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.75}
        d="M6.125 21A1.75 1.75 0 0 1 4.375 22.75A1.75 1.75 0 0 1 2.625 21A1.75 1.75 0 0 1 6.125 21z"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.75}
        x1={7}
        x2={32}
        y1={24}
        y2={24}
        d="M6.125 21L28 21"
      />
      <Path
        cx={27}
        cy={16}
        fill="none"
        r={2}
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.75}
        d="M25.375 14A1.75 1.75 0 0 1 23.625 15.75A1.75 1.75 0 0 1 21.875 14A1.75 1.75 0 0 1 25.375 14z"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.75}
        x1={25}
        x2={0}
        y1={16}
        y2={16}
        d="M21.875 14L0 14"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.75}
        x1={3}
        x2={0}
        y1={8}
        y2={8}
        d="M2.625 7L0 7"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.75}
        x1={29}
        x2={32}
        y1={16}
        y2={16}
        d="M25.375 14L28 14"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.75}
        x1={3}
        x2={0}
        y1={24}
        y2={24}
        d="M2.625 21L0 21"
      />
    </G>
  </Svg>
);
export default FilterIcon;
