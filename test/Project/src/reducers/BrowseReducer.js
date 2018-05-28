import {
    BROWSE_LIST_REQUEST,
    BROWSE_LIST_SUCCESS,
    BROWSE_LIST_FAILURE,
} from '../actions/BrowseActions';

const INITIAL_STATE = { items: [], error: null, loading: false };

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case BROWSE_LIST_REQUEST:
            return { ...state, items: [], error: null, loading: true };
        case BROWSE_LIST_SUCCESS:
            return { ...state, items: action.payload, error: null, loading: false };
        case BROWSE_LIST_FAILURE:
            error = action.payload.data || { message: action.payload.message };
            return { ...state, items: [], error: error, loading: false };
        default:
            return state;
    }
}