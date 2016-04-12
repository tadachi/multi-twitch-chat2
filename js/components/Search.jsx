import React, { Component, PropTypes }  from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/actions.jsx'

class Search extends Component {
    constructor(props) {
        super(props)
    }
    
    // searchStream() {
    //     let query = this.refs.searchInput.value
    //     this.props.store.dispatch(this.props.Actions.searchStream(query)) // Passed from <{Provider store={store} />
    // }
  
    render() {
        var styles = {
            input: {
                width: '200px',
            },
        }

        return (
            <div>
                <input
                    style={styles.input}
                    type="text"
                    ref='searchInput'
                    placeholder='Search..'
                />
                <button>Search</button>
            </div>
        )
    }
}
// <button onClick={this.searchStream}>Search</button>
export default Search