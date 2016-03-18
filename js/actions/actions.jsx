import fetch from 'isomorphic-fetch'

/*
 * action creators
 */
export const ADD_SEARCHED = 'ADD_SEARCHED'

export function addSearched(data) {
    return {
        type: ADD_SEARCHED,
        data, //es6 equivalent to data: data
    }
}

export const GET_SRL = 'GET_SRL'

export function getSRL() {
    
    return function(dispatch) {
        
        fetch('http://api.speedrunslive.com/frontend/streams', {
            method: 'get',
            dataType: 'jsonp',
        }).then(response => {
            return response.json();
        }).then(json => {
            dispatch({ // Store it.
                type: GET_SRL,
                data: json,              
            })
        }).catch(err => {
            dispatch({ // Store it.
                type: GET_SRL,
                data: err,              
            })
        });

        return null; 
    }
}