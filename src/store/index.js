// 本文件处理数据逻辑

import React, {createContext, useReducer, useEffect} from 'react';
import {fetchCsvData} from "./api";
import initialState from './data';
import DateReducer from "./reducer";

// 创建数据中心的这样一个上下文，一般称为store
const DateStore = createContext();
function init(initialYear) {
    return {year: initialYear};
}
// 包装成数据组件
function DateStateProvider({children}) {
    // 绑定数据以及数据处理方法
    const [DateState, DateDispatch] = useReducer(DateReducer, initialState);

    // 初始化时，读取本地数据
    useEffect(() => {
        fetchCsvData('./data/forest_clean.csv')
          .then(res => {
              DateDispatch({
                  type: 'init',
                  payload: res
              })
          })
    }, [])

    // 为子元素包裹上数据的上下文环境，方便所有子元素读取
    return <DateStore.Provider value={{DateState, DateDispatch}}>
        {children}
    </DateStore.Provider>
}

export {DateStore, DateStateProvider}
