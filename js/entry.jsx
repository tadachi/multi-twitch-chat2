// React
import React from 'react'
import { render } from 'react-dom'

// Redux
import { createStore, applyMiddleware } from 'redux' // Allow async using middleware from thunk.
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { reducer } from './reducers/reducers.jsx'

import App from './components/App.jsx'

//let store = createStore(reducer); // Previously
let store = createStore(reducer, applyMiddleware(thunkMiddleware)) // Async thunk middleware applied.
const rootElement = document.getElementById('root')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)