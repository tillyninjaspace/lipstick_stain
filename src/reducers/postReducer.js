import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
    items: [],
    item: {}
};

const postReducer = (state = initialState, action) => {
    console.log("postReducer.js is working under reducer folder")
    switch(action.type) {
        case FETCH_POSTS:
            return {
            ...state,
            items: action.payload
        };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default: 
            return state;
    }
}

export default postReducer