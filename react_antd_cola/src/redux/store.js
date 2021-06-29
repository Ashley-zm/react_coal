// 引入createStore，专门用于创建redux中最为核心的store
import { createStore } from 'react-redux'
// 引入为Count组件
import countReducers from './count_reducers'
// 暴露
export default createStore(countReducers)
