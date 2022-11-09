import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { listUsers } from '../redux/actions';
import { useEffect } from 'react';
import Details from './Details';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

 
const Home = () => {
const navigate=useNavigate();  
const {users}  =useSelector(state=>state.users) 
const dispatch=useDispatch();    
useEffect(()=>{
dispatch(listUsers())    
},[]);

const list= users.map((item)=>{

  return <Details key={item.id} name={item.name} id={item.id} email={item.email}/>
  })
  const adduser=()=>{
    navigate('/adduser')
   }
  
  
  return (
   
    <>
     
     <u><h1>CONTACT MANAGER</h1></u>
     <div>
     <Button variant="contained" onClick={adduser}>ADD CONTACT</Button>
     </div>  
     {list} 
    </>
  )
}

export default Home