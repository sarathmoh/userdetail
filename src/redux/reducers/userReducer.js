import { ActionTypes } from "../constants/action-types";

const initialState = {
    details: [
    {name:"sarath",last:"mohan",job:"engineer"}
    ]
}

export const userReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_USER:
            return state;
        default:
            return state
    }

}