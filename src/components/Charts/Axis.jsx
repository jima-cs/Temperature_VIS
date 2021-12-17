import React from "react"
import PropTypes from "prop-types"
import * as d3 from 'd3'
import { dimensionsPropsType } from "./utils";
import { useChartDimensions } from "./Chart";

const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
}
const Axis = ({ dimension, ...props }) => {
  const dimensions = useChartDimensions()
  const Component = axisComponentsByDimension[dimension]
  if (!Component) return null

  return (
    <Component
      dimensions={dimensions}
      {...props}
    />
  )
}

Axis.propTypes = {
  dimension: PropTypes.oneOf(["x", "y"]),
  dimensions: dimensionsPropsType,
  scale: PropTypes.func,
  label: PropTypes.string,
  formatTick: PropTypes.func,
}

Axis.defaultProps = {
  dimension: "x",
  scale: null,
  formatTick: d3.format(","),
}

export default Axis


function AxisHorizontal ({ dimensions, label, formatTick, scale, ...props }) {
  const numberOfTicks = dimensions.plotWidth < 600
        ? dimensions.plotWidth / 100
        : dimensions.plotWidth / 250

  const ticks = scale.ticks(numberOfTicks)

  return (
    <g className="Axis AxisHorizontal" transform={`translate(0, ${dimensions.plotHeight})`} {...props}>
      <line
        className="Axis__line"
        x2={dimensions.plotWidth}
      />

      {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(${scale(tick)}, 25)`}
        >
          { formatTick(tick) }
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          transform={`translate(${dimensions.plotWidth / 2}, 60)`}
        >
          { label }
        </text>
      )}
    </g>
  )
}

function AxisVertical ({ dimensions, label, formatTick, scale, ...props }) {
  const numberOfTicks = dimensions.plotHeight / 70

  const ticks = scale.ticks(numberOfTicks)

  return (
    <g className="Axis AxisVertical" {...props}>
      <line
        className="Axis__line"
        y2={dimensions.plotHeight}
      />

      {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(-16, ${scale(tick)})`}
        >
          { formatTick(tick) }
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          style={{
            transform: `translate(-56px, ${dimensions.plotHeight / 2}px) rotate(-90deg)`
          }}
        >
          { label }
        </text>
      )}
    </g>
  )
}
