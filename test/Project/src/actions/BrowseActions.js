import { CALL_API } from 'redux-api-middleware';

export const BROWSE_LIST_REQUEST = 'actions/browse/BROWSE_LIST_REQUEST';
export const BROWSE_LIST_SUCCESS = 'actions/browse/BROWSE_LIST_SUCCESS';
export const BROWSE_LIST_FAILURE = 'actions/browse/BROWSE_LIST_FAILURE';

// export const loadBrowseList = () => ({
//     [CALL_API]: {
//         endpoint: 'http://0.0.0.0:3001/api/posts',
//         method: 'GET',
//         types: [
//             BROWSE_LIST_REQUEST,
//             {
//                 type: BROWSE_LIST_SUCCESS,
//                 payload: (action, state, res) => {
//                     return res.json();
//                 },
//             },
//             BROWSE_LIST_FAILURE
//         ],
//     }
// });


export function loadBrowseList() {
    return (dispatch) => {
        dispatch({ type: BROWSE_LIST_REQUEST });
        setTimeout(()=>{
            var data = require('../assets/list_response.json');
            dispatch({ type: BROWSE_LIST_SUCCESS, payload: data.data });
        }, 2000);
           
    };
};