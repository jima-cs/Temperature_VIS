// 本文件是界面UI的根目录

import React from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";
import AssistView from "./AssistView";
import ControlPanel from "./ControlPanel";
import Overview from "./Overview";
import DetailView from "./DetailView";
import LifeExpectancy from "./lifeExpectancy";
import RaceBar from "./RaceBar";
import EchartsTest from "./RaceBar/race";
// 这是JSS的写法，相当于声明了一些css的类
const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
    view: {
        border: '1px solid black',
        borderRadius: '5px',
    },
    controlPanel: {
        position: 'absolute',
        top: 70,
        height: 100,
        left: 50,
        width: 290,
    },
    assistView: {
        position: 'absolute',
        top: 180,
        bottom: 70,
        left: 70,
        width: 100,
    },
    overview: {
        position: 'absolute',
        height: 240,
        bottom: 70,
        width: 350,
        right: 70,
    },
    detailView: {
        position: 'absolute',
        // bottom: 370,
        height: 400,
        top: 160,
        left: 50,
        width: 400,
        // right: 570,
    },
    barView: {
        position: 'absolute',
        bottom: 370,
        height: 1020,
        width: 800,
        right: 270,
    },
    themeRiver: {
        position: 'absolute',
        // bottom: 370,
        height: 120,
        top:20,
        left: 380,
        width:250
        // right: 270,
    },
    lifeView: {
        position: 'absolute',
        // bottom: 370,
        height: 520,
        top:20,
        left: 380,
        width:550
        // right: 270,
    },
}))

// App组件
function App() {
    // 使用上述的css样式
    const classes = useStyles();


    // 使用classes.root使用样式中定义的root类
    // 可视化项目中，若干视图一般采用绝对布局，方便后续调整各个视图的位置与大小
    // 目前四个视图都是一样的，查看AssistView的注释
    return <div className={classes.root}>
        {/*<div className={clsx(classes.view, classes.title)}><h2> Temperature VIS </h2></div>*/}
        <div className={clsx(classes.controlPanel)}><ControlPanel/></div>
        {/*<div className={clsx(classes.view, classes.assistView)}><AssistView/></div>*/}
        {/*<div className={clsx(classes.view, classes.overview)}><Overview/></div>*/}
        <div className={clsx(classes.detailView)}><DetailView/></div>
        {/*<div className={clsx(classes.view, classes.barView)}><BarView/></div>*/}
        {/*<div className={clsx(classes.view,classes.lifeView)}> <EchartsTest/> </div>*/}
        {/*<div className={clsx(classes.view,classes.lifeView)}> <RaceBar/> </div>*/}
        {/*<div className={clsx(classes.themeRiver)}><ThemeRiver/></div>*/}
    </div>;
}

export default App;
