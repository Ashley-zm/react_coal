import React, { Component } from 'react'
import { Select, Button } from 'antd'
import './node_modules/antd/dist/antd.css'
import './index.css'

export default class Count extends Component {
  state = {
    count: 0,
    curVal: 0,
  }
  handleChange = (val) => {
    console.log(val)
    this.setState({ curVal: val })
  }
  // 当前和运算
  increment = () => {
    console.log(this.state.curVal)
    this.setState((state, props) => {
      return {
        count: state.curVal * 1 + state.count,
      }
    })
    console.log(this.state.count)
  }
  // 当前差运算
  decrement = () => {}
  // 当前为奇数运算
  incrementIfOdd = () => {}
  // 当前异步运算
  incrementAsync = () => {}
  render() {
    const { count } = this.state
    return (
      <div className="box">
        <h1>当前求和：{count}</h1>
        <Select onChange={this.handleChange}>
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
        </Select>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementIfOdd}>当前求和为奇数再加</Button>
        <Button onClick={this.incrementAsync}>异步加</Button>
      </div>
    )
  }
}
