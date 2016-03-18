import { ADD_SEARCHED, GET_SRL} from '../actions/actions.jsx'

/*
 * reducers
 */
export function reducer(state = {SEARCHED: [], SRL: ''}, action) {
    switch (action.type) {
        case ADD_SEARCHED:
            state['SEARCHED'].push(action.data)
            console.log(state)
            return state
        case GET_SRL:
            state['SRL'] = action.data
            console.log(state)
            return state;
        default:
            return state
    }
}
