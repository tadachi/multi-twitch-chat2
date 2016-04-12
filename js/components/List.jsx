import React, { Component, PropTypes } from 'react'

export class List extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const state = this.props.state
        let table_view
       
        console.log(state);
       
        if (state) {
            table_view = state.searched.map(function(item, i) {
                <tr key={i}>
                    <td>{item}</td>
                </tr>          
            })            
        }

        return (
            <table>                
                <tbody >
                    {table_view}
                </tbody>
            </table>
        );
    }
}

export default List