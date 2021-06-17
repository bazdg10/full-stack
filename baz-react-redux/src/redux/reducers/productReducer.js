import { ActionTypes } from "../constants/actiontypes";

const initialState = {
    products: [{
        id: 1,
        Title: "Baz",
        category: "coder"
    }],
};

export const productReducer = (state, action) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return state;
        default:
            break;
    }
}