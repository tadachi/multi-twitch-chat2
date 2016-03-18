import { ADD_SEARCHED } from '../actions/actions.jsx'

/*
 * reducers
 */
export function reducer(state = {SEARCHED: []}, action) {
    switch (action.type) {
        case ADD_SEARCHED:
            state['SEARCHED'].push(action.data);
            console.log(state);
            return state
        default:
            return state
    }
}
