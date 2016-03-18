/*
 * action creators
 */
export const ADD_SEARCHED = 'ADD_SEARCHED'

export function addSearched(data) {
    return {
        type: ADD_SEARCHED,
        data, //es6 data: data
    }
}


