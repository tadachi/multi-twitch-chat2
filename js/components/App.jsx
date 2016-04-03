import React, { Component, PropTypes } from 'react'
import * as Actions from '../actions/actions.jsx'
import Search from './Search.jsx'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // <div> test</div>
            <div>
                <Search store={this.props.store} Actions={Actions} />
            </div>
        )
    }
}

export default App