import React, { Component, PropTypes } from 'react'
import {addSearched, getSRL, searchStream} from '../actions/actions.jsx'

export class Search extends Component {
    constructor(props) {
        super(props)
        this.searchStream = this.searchStream.bind(this);
        this.getSRL = this.getSRL.bind(this);
    }

    searchStream() {
        let query = this.refs.searchInput.value
        this.props.store.dispatch(searchStream(query))
    }
    
    getSRL() {
        this.props.store.dispatch(getSRL());
    }
   
    
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
            <button onClick={this.searchStream}>Search</button>
            <button onClick={this.getSRL}>getSRL</button>
            </div>
        )
    }
}

export default Search
