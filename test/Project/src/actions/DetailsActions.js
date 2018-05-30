import { CALL_API } from 'redux-api-middleware';

export const DETAILS_REQUEST = 'actions/browse/DETAILS_REQUEST';
export const DETAILS_SUCCESS = 'actions/browse/DETAILS_SUCCESS';
export const DETAILS_FAILURE = 'actions/browse/DETAILS_FAILURE';


export function loadDetailsData() {
    return (dispatch) => {
        dispatch({ type: DETAILS_REQUEST });
        setTimeout(()=>{
            var data = require('../assets/details_response.json');
            dispatch({ type: DETAILS_SUCCESS, payload: data.data });
        }, 2500);
           
    };
};