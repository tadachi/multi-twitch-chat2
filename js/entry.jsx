import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux' // Allow async using middleware from thunk.
import { Provider } from 'react-redux'

import thunk from 'redux-thunk';
import App from './components/App.jsx'
import { reducer } from './reducers/reducers.jsx'

const rootElement = document.getElementById('root')

//let store = createStore(reducer); // Previously
let store = applyMiddleware(thunk)(createStore)(reducer) // Async thunk middle ware applied.

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        
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
