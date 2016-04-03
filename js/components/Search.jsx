import React, { Component, PropTypes } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
        this.searchStream = this.searchStream.bind(this)
    }
    
    searchStream() {
        let query = this.refs.searchInput.value
        this.props.store.dispatch(this.props.Actions.searchStream(query)) // Passed from <{Provider store={store} />
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
            </div>
        )
    }
}

export default Search