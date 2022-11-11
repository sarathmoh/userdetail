import * as types from './action-types';
const initialState = {

  users: [],
  user: {},
  loading: true

};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case types.DELETE_USERS:
    case types.ADD_USERS:
      return {
        ...state,
        loading: false
      }

  
    case types.MODIFIED_USERS:


    default:
      return state;

  }
}

export default userReducers;