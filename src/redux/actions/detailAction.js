import { ActionTypes } from "../constants/action-types";
export const addDetail=(details) => {
    return {
        type:ActionTypes.ADD_USER,
        payload:details,
    }
}