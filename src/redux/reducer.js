import { SET_QUOTE  } from "./action";

const initialState = {
    text: '',
    author: ''
};

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUOTE:
            return {
                ...state,
                text: action.payload.text,
                author: action.payload.author
            };
        default:
            return state;
    }
};