import * as types from './action-types';
import userApi from '../api/userApi';

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
  
  
const latestUser=()=>({
  type:types.MODIFIED_USERS,
  
})


export const listUsers=()=>{
    return async function(dispatch){
    await userApi.get("/details").then((res)=>{
    console.log("response",res);
    dispatch(getUsers(res.data))    
    }) 
    .catch((error)=> console.log(error))
    }
}


export const deleteUsers=(id)=>{
    return async function(dispatch){
    await userApi.delete(`/details/${id}`).then((res)=>{
    console.log("response",res);
    dispatch(deletedUsers(res.data))  
    dispatch(listUsers());
    }) 
    .catch((error)=> console.log(error))
    }
}

export const addUsers=(user)=>{
return async function(dispatch){  
await userApi.post("/details",user).then((res)=>{
console.log("response",res);
localStorage.setItem('user',res.data.id);
dispatch(addedUsers(res.data))  
  }) 
    .catch((error)=> console.log(error))
    }
}


export const modifiedUser=(user,id)=>{
  return async function(dispatch){
   await userApi.put(`http://localhost:8000/details/${id}`,user).then((res)=>{
  console.log("response",res);
  dispatch(latestUser())  
  // dispatch(listUsers());  
  }) 
  .catch((error)=> console.log(error))
  }
}