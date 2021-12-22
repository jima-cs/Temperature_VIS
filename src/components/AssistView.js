// 本文件是一个子视图

import React, {useRef} from 'react';
import {DateStore} from "../store";

class AssistView extends React.Component {

    static contextType = DateStore;

    render() {
        // 使用StateProvider提供的数据环境
        const { DateState, DateDispatch } = this.context;

        /* 返回一个数字和一个按钮
         * 按钮点击事件onClick中需要填写一个函数，将加一请求发送出去
         * 注意：千万不要写成这样！！！
         * const func = () => dispatch({type: 'increment'})
         * <button onClick={func()}></button>
         * 下面才是对的！！！
         * const func = () => dispatch({type: 'increment'})
         * <button onClick={func}></button>
         * 前者会在渲染时就调用函数，后者会在点击时调用，请仔细体会两者区别！！！
         */
        return <div>
            <p>count : {DateState.count}</p>


            <button onClick={() => DateDispatch({ type: 'increment' })}>add</button>


        </div>;
    }
}

export default AssistView;
