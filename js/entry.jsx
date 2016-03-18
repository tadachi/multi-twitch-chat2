import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import Search from './components/Search.jsx'
import { reducer } from './reducers/reducers.jsx'

const rootElement = document.getElementById('root')
let store = createStore(reducer)

function render() {
    ReactDOM.render(
        <Search 
            store={store}
        />,
        rootElement
    )
}


render()
store.subscribe(render)

// function counter(state = 0, action) {
//   switch (action.type) {
//   case 'INCREMENT':
//     return state + 1
//   case 'DECREMENT':
//     return state - 1
//   default:
//     return state
//   }
// }
// let store = createStore(counter)
// store.subscribe(() =>
//   console.log(store.getState())
// )
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// // 1
