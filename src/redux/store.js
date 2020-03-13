import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import {counter} from "./reducers";

//生成一个store对象
const store = createStore(counter,
    applyMiddleware(thunk)  //应用上异步的中间件
) //内部会第一次调用reducer函数得到初始state

export default store