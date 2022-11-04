import { type } from '@testing-library/user-event/dist/type';
import * as types from './action-types'
const initialState={

 users:[],
 user:{},
 loading:true

};

const userReducers=(state=initialState,action)=>{
    switch(action.type){
    case types.GET_USERS:     
    return{
        ...state,
        users:action.payload,
        loading:false,
        }

    case type.DELETE_USER:
    case type.ADD_USERS:  
    return {
      ...state,
      loading:false
    }
       
    
      default:
        return state;  

    }
}

export default userReducers;