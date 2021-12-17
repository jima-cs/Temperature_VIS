import React from "react";

const Tooltip = ({position, label, visible}) => {
  const {x, y} = position
  const style = {
    left: x,
    top: y
}
  return (
    <g id="tooltip" className="Tooltip" transform={`translate(${x}, ${y})`} opacity={visible ? 100 : 0}>
      <text className="Tooltip__arrow"/>
      <text className="Tooltip__label">{label}</text>
    </g>
  )
}

export default Tooltip