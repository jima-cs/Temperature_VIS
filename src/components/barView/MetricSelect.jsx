import React from 'react'
import classNames from 'classnames'

const MetricSelect = ({metrics, onSelect, selectedMetric}) => {
  return(
    <div className="MetricSelect">
      {metrics.map(metric => (
        <button className={classNames('Btn', {'Btn--active':metric === selectedMetric})} key={metric} value={metric} onClick={e => onSelect(e.target.value)}>{metric}</button>
      ))}
    </div>
  )
}

export default MetricSelect