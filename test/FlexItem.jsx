import React, { Component, PropTypes } from 'react'

export class FlexItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var styles = {
            flex_container: {
                display: 'flex',
            },
            flex_item: {
                width: '200px',
                height: '200px',
                margin: '5px',
                backgroundColor: 'red',
            }
        }

        return (
            <div style={styles.flex_container}>
                <div style={styles.flex_item}></div>
                <div style={styles.flex_item}></div>
                <div style={styles.flex_item}></div>
                <div style={styles.flex_item}></div>
            </div>
        )
    }
}

export default FlexItem
