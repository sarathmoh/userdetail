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
  

  const updatedUser=(user)=>({
    type:types.UPDATE_USERS,
    payload:user,
    
  })
  
  
const latestUser=()=>({
  type:types.MODIFIED_USERS,
  
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


export const updateUser=(id)=>{
    return function(dispatch){
    axios.get(`http://localhost:8000/details/${id}`).then((res)=>{
    console.log("response",res);
    dispatch(updatedUser(res.data))  
    }) 
    .catch((error)=> console.log(error))
    }
}


export const modifiedUser=(user,id)=>{
  return function(dispatch){
  axios.put(`http://localhost:8000/details/${id}`,user).then((res)=>{
  console.log("response",res);
  dispatch(latestUser())  
  // dispatch(listUsers());  
  }) 
  .catch((error)=> console.log(error))
  }
}