import React, {useEffect, useState} from 'react';
import * as d3 from 'd3'

import './barView.css';
import Histogram from "./Histogram";
import MetricSelect from "./MetricSelect";
// import {METRICS} from "./Constants";

const METRICS = ["Overall", "Potential", "Age"];

function BarView() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedMetric, setSelected] = useState("Overall")
    const metricAccessor = d => parseFloat(d[selectedMetric]) || 0;

    useEffect(() => {
        setIsLoading(true);
        d3.csv("./data/barData.csv").then(dataset => {
            setData(dataset);
            setIsLoading(false);
        })
    }, [])


    return (
        <div className="App">
            <h1>FIFA Ratings</h1>
            <div className="App__charts">
                <Histogram
                    data={data}
                    xAccessor={metricAccessor}
                    label={selectedMetric}
                    isLoading={isLoading}
                />
            </div>
            <MetricSelect metrics={METRICS} onSelect={setSelected} selectedMetric={selectedMetric}/>
        </div>
    );
}

export default BarView;
