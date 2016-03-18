import React, { Component, PropTypes } from 'react'
import {addSearched} from '../actions/actions.jsx'

export class Search extends Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this);
    }

    search() {
        this.props.store.dispatch(addSearched(this.refs.searchInput.value));
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
            <button onClick={this.search}>Search</button>
            </div>
        )
    }
}

export default Search
