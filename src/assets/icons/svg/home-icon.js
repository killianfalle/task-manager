import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon = ({color = "#000", size = 21}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width={28}
    height={size}
    fill="none"
  >
    <Path
      d="m10 2.69 5 4.5V15h-2V9H7v6H5V7.19l5-4.5zM10 0 0 9h3v8h6v-6h2v6h6V9h3L10 0z"
      fill={color}
    />
  </Svg>
)

export default HomeIcon
