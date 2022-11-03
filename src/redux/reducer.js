import * as types from './action-types'
const initialState={

 users:[],
 user:{},
 loading:false  

};

const userReducers=(state=initialState,action)=>{
    switch(action.type){
    case types.GET_USERS:     
    return{
        ...state,
        users:action.payload,
        loading:true,
        }
      default:
        return state;  

    }
}

export default userReducers;