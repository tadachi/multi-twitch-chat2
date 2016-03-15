import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.incrementAsync = this.incrementAsync.bind(this)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
    }
}

console.log('test');
