import React, { useContext } from 'react';
import { DateStore } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/china';
import * as echarts from 'echarts';
import graph from "./../pages/graph_force/les-miserables.json"

function Overview() {
    // const {state, dispatch} = useContext(DateStore);


        graph.nodes.forEach(function (node) {
            node.symbolSize = 5;
        });

    const getOption = () => {
        return {
            title: {
                text: 'Les Miserables',
                subtext: 'Default layout',
                top: 'bottom',
                left: 'right'
            },
            tooltip: {},
            legend: [
                {
                    // selectedMode: 'single',
                    data: graph.categories.map(function (a) {
                        return a.name;
                    })
                }
            ],
            series: [
                {
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'force',
                    data: graph.nodes,
                    links: graph.links,
                    categories: graph.categories,
                    roam: true,
                    label: {
                        position: 'right'
                    },
                    force: {
                        repulsion: 100
                    }
                }
            ]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
    </div>
}

export default Overview;
