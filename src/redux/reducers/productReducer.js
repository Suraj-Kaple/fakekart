// reducer takes initial state and action as parameters

import { actionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "Suraj",
            category: "Programmer",
        },
    ],
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
            break;
    }
}