import * as types from './action-types';
import axios from 'axios';
const getUsers=(users)=>({
    type:types.GET_USERS,
    payload:users,
})
export const listUsers=()=>{
    return function(dispatch){
    axios.get("http://localhost:8000/details").then((res)=>{
    console.log("response",res);
    dispatch(getUsers(res.data))    
    }) 
    .catch((error)=> console.log(error))
    }
}