import React,{Component} from "react";
import {Button} from '@material-ui/core';
import {INCREMENT,DECREMENT} from '../redux/action-types'

export default class App extends Component {

    increment = () =>{
        //1.得到选择增加数量
        const number = this.select.value*1
        //2.调用store的方法更新状态
        this.props.store.dispatch({type:INCREMENT,data:number})
    }

    decrement = () =>{
        //1.得到选择增加数量
        const number = this.select.value*1
        //2.调用store的方法更新状态
        this.props.store.dispatch({type:DECREMENT,data:number})
    }

    incrementIfOdd = () =>{
        //1.得到选择增加数量
        const number = this.select.value*1
        //2.得到原本的count状态，并计算新的count
        const count = this.props.store.getState()
        if (count%2===1){
            //3.调用store的方法更新状态
            this.props.store.dispatch({type:INCREMENT,data:number})
        }
    }

    incrementAsync = () =>{
        //1.得到选择增加数量
        const number = this.select.value*1
        setTimeout(()=>{
            //2.调用store的方法更新状态
            this.props.store.dispatch({type:INCREMENT,data:number})
        },1000)
    }

    render() {
        const count = this.props.store.getState()
        return (
            <div>
                <Button variant="contained" color="primary">
                    click {count} times
                </Button><br/>
                <select ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <Button onClick={this.increment}>+</Button>
                <Button onClick={this.decrement}>-</Button>
                <Button onClick={this.incrementIfOdd}>increment if odd</Button>
                <Button onClick={this.incrementAsync}>increment async</Button>
            </div>
        )
    }
}
