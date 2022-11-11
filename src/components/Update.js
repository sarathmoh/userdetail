import React from 'react';
import { Col,Row,Container,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useFormik} from 'formik';
import { userValidation } from '../schema/update';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { modifiedUser} from '../redux/actions';
import {toast} from 'react-toastify';
import three from '../assets/undraw_interaction_design_odgc.svg';
import four from '../assets/undraw_swipe_re_vhc5.svg';

const Update = () => {
const dispatch=useDispatch(); 
const {id}=useParams();
const navigate=useNavigate();
const count=useSelector((state)=>state.users)
const {users}=count;  
console.log("users",users);
const getItem=users.find(item=>{
return item.id===JSON.parse(id);
})
const { values, errors, touched, handleBlur, handleChange, handleSubmit } =    
useFormik({
       
    initialValues:{
    name:getItem.name,
    email:getItem.email,
    },
  validationSchema: userValidation,
  onSubmit:(values,action) => {
  dispatch(modifiedUser(values,id));
  navigate('/');
  toast.success("Updated the user successfully");
  action.resetForm();
    },
 });
     
  return (
<Container className='mt-3'>
  <Row>
  <Col className="text-left"  lg={6} md={8} sm={12}>
  <h3 className='font-weight-4 mt-4 mb-5 head '>Hey update your Details here!!!</h3>
  <img className='w-75 mt-5' src={three} alt="icon"/> 
  </Col>
    
  <Col className="mt-5"   lg={6} md={6} sm={12} >
   <img src={four} alt="addpic" className='addexpense w-75 mt-1 '/> 
  <form onSubmit={handleSubmit}>
  <div>
  <input
  type="text"
  autoComplete="off"
  name="name"
  id="name"
  className='form-control mb-3'
  placeholder="Enter your name"
  value={values.name}
  onChange={handleChange}
  onBlur={handleBlur}
  // className={errors.name && touched.name ? "input-error" : ""}              
  />
  {errors.name && touched.name && <p className='error'>{errors.name}</p>}
  </div>

<div>
<input
type="email"
autoComplete="off"
name="email"
id="email"
className='form-control mb-3'
placeholder="Enter Your Email"
value={values.email}
onChange={handleChange}
onBlur={handleBlur}
// className={errors.email && touched.email ? "input-error" : ""}
/>
{errors.email && touched.email && <p className='error'>{errors.email}</p>}
</div>
<div className="d-grid gap-2 mb-4">
<Button variant="primary" size="md" type='submit' >
Update 
</Button>
</div>
</form>
</Col>
</Row>
</Container>
  )
  
}

export default Update