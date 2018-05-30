import {
    DETAILS_REQUEST,
    DETAILS_SUCCESS,
    DETAILS_FAILURE,
} from '../actions/DetailsActions';

const INITIAL_STATE = { data: null, error: null, loading: false };

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case DETAILS_REQUEST:
            return { ...state, data: null, error: null, loading: true };
        case DETAILS_SUCCESS:
        console.log("DETAILS_SUCCESS");
            return { ...state, data: action.payload, error: null, loading: false };
        case DETAILS_FAILURE:
            error = action.payload.data || { message: action.payload.message };
            return { ...state, data: null, error: error, loading: false };
        default:
            return state;
    }
}