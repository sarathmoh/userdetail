import * as types from './action-types';
import axios from 'axios';
const getUsers=(users)=>({
    type:types.GET_USERS,
    payload:users,
})


const deletedUsers=()=>({
  type:types.DELETE_USERS,
  
})


const addedUsers=()=>({
    type:types.ADD_USERS,
    
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


export const deleteUsers=(id)=>{
    return function(dispatch){
    axios.delete(`http://localhost:8000/details/${id}`).then((res)=>{
    console.log("response",res);
    dispatch(deletedUsers(res.data))  
    dispatch(listUsers());  
    }) 
    .catch((error)=> console.log(error))
    }
}

export const addUsers=(user)=>{
    return function(dispatch){
    axios.post("http://localhost:8000/details",user).then((res)=>{
    console.log("response",res);
    dispatch(addedUsers(res.data))  
    // dispatch(listUsers());  
    }) 
    .catch((error)=> console.log(error))
    }
}