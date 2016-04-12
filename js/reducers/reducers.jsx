import { ADD_SEARCHED, GET_SRL, SEARCH_STREAM} from '../actions/actions.jsx'

/*
 * reducers
 */
export function reducer(state = {searched: [], srl: '', results: ''}, action) {
    switch (action.type) {
        case ADD_SEARCHED:
            state['searched'].push(action.data)
            return state
        case GET_SRL:
            state['srl'] = action.data
            return state;
        case SEARCH_STREAM:
            state['searched'].push(action.query)
            state['results'] = action.data
            return state;
        default:
            return state
    }
}

