import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Search from './Search.jsx'
import List from './List.jsx'
import * as Actions from '../actions/actions.jsx'

// const App = () => (
//     <div>
//         <Search />

//     </div>
// )
// <List />
// export default App

class App extends Component {
    render() {
        const { todos, actions } = this.props
        return (
            <div>
                <Search />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapDispatchToProps
)(App)