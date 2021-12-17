import React, {useState} from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

import Chart from "../Charts/Chart"
import Bars from "../Charts/Bars"
import Axis from "../Charts/Axis"
import Gradient from "../Charts/Gradient"
import {accessorPropsType, useChartDimensions, useUniqueId} from '../Charts/utils';
import Tooltip from "../Charts/Tooltip";

const gradientColors = ["#9980FA", "rgb(226, 222, 243)"]
const Histogram = ({data, xAccessor, label, isLoading}) => {
  const gradientId = useUniqueId("Histogram-gradient")
  const [hoverPosition, setHoverPosition] = useState({x:0, y:0})
  const [hoverValue, setHoverValue] = useState()
  const [tooltipActive, setTooltipActive] = useState(false)
  const [ref, dimensions] = useChartDimensions({marginTop: 15, marginLeft: 60, marginBottom: 100})

  const numberOfThresholds = 9

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.plotWidth])
    .nice(numberOfThresholds);

  const binsGenerator = d3.histogram()
    .domain(xScale.domain())
    .value(xAccessor)
    .thresholds(xScale.ticks(numberOfThresholds))

  const bins = binsGenerator(data)

  const yAccessor = d => d.length
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.plotHeight, 0])
    .nice()

  const barPadding = 2

  const xAccessorScaled = d => xScale(d.x0) + barPadding
  const yAccessorScaled = d => yScale(yAccessor(d))
  const widthAccessorScaled = d => xScale(d.x1) - xScale(d.x0) - barPadding
  const heightAccessorScaled = d => dimensions.plotHeight - yScale(yAccessor(d))
  const keyAccessor = (d, i) => i

  // Tooltip

  function onMouseOver(evt, data) {
    setTooltipActive(true)
    setHoverPosition({
      x: evt.target.x.baseVal.value + evt.target.width.baseVal.value / 2,
      y: evt.target.y.baseVal.value - 10
    });
    setHoverValue(data)
  }

  function onMouseOut(evt) {
    setTooltipActive(false)
  }

  return (
    <div className="Histogram" ref={ref}>
      <h3 className="ChartTitle">Players By {label}</h3>
      <Chart dimensions={dimensions}>
        <defs>
          <Gradient
            id={gradientId}
            colors={gradientColors}
            x2="0"
            y2="100%"/>
        </defs>
        <Axis
          dimensions={dimensions}
          dimension="x"
          scale={xScale}
          label={label}/>
        <Axis
          dimensions={dimensions}
          dimension="y"
          scale={yScale}
          label="Count"/>
        {!isLoading &&
        <Bars
          data={bins}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          widthAccessor={widthAccessorScaled}
          heightAccessor={heightAccessorScaled}
          style={{fill: `url(#${{gradientId}}`}}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
        />
        }
        <Tooltip position={hoverPosition} label={hoverValue} visible={tooltipActive} />
      </Chart>
    </div>
  )
}

Histogram.propTypes = {
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
}

Histogram.defaultProps = {
  xAccessor: d => d.x,
  yAccessor: d => d.y,
}
export default Histogram
