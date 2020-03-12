import React from "react";
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/app'
import {counter} from './redux/reducers'

//生成一个store对象
const store = createStore(counter) //内部会第一次调用reducer函数得到初始state

function render(){
    ReactDOM.render(<App store={store}/>,document.getElementById('root'))
}

//初始化渲染
render()

//订阅监听store中的状态变化了，就会自动调用进行重绘
store.subscribe(render)