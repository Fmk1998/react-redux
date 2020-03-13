import {INCREMENT,DECREMENT} from "./action-types";

/*
包含所有的action creater
同步的action都返回一个对象
一部的action返回一个函数
*/

//增加
export const increment = (number) => ({type: INCREMENT,data:number})

//减少
export const decrement = (number) => ({type: DECREMENT,data:number})

//异步action
export const incrementAsync = (number) => {
    return dispatch => {
        //异步的代码
        setTimeout(()=>{
            dispatch(increment(number))
        },1000)
    }
}