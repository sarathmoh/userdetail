import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { listUsers } from '../redux/actions';
import { useEffect } from 'react';
import Details from './Details'
import Button from '@mui/material/Button';
 
const Home = () => {
const {users}  =useSelector(state=>state.users) 
console.log("users",users);
const dispatch=useDispatch();    
useEffect(()=>{
dispatch(listUsers())    
},[]);

const list= users.map((item)=>{

  return <Details key={item.id} name={item.name} id={item.id} email={item.email}/>
  })
  return (
   
    <>
     <u><h1>CONTACT MANAGER</h1></u>

     <Button variant="contained" >ADD CONTACT</Button>
     {list} 
    </>
  )
}

export default Home