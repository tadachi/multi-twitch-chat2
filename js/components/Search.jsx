import React, { Component, PropTypes } from 'react'
import {addSearched, getSRL} from '../actions/actions.jsx'

export class Search extends Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this);
        this.getSRL = this.getSRL.bind(this);
    }

    search() {
        this.props.store.dispatch(addSearched(this.refs.searchInput.value));
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
            <button onClick={this.search}>Search</button>
            <button onClick={this.getSRL}>getSRL</button>
            </div>
        )
    }
}

export default Search
