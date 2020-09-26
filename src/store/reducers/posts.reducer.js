import * as actionTypes from "../actions/actionTypes";

const initialState = {
    posts: [],
    isLoading: false,
    error: null
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_START:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
                isLoading: false
            };
        case actionTypes.FETCH_POSTS_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};

export default postsReducer;