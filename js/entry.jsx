import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux' // Allow async using middleware from thunk.
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'


import App from './components/App.jsx'
import { reducer } from './reducers/reducers.jsx'

//let store = createStore(reducer); // Previously
let store = createStore(reducer, applyMiddleware(thunkMiddleware)) // Async thunk middleware applied.
const rootElement = document.getElementById('root')

function render() {
    ReactDOM.render(
        <App store={store} />,
        rootElement
    )
}


render()