import React from 'react';
import { useFormik} from 'formik';
import {Addusers}from '../schema/adduser';
import { Col,Row,Container,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUsers } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const initialValues = {
   
    name: "",
    email: "",
  
  };
const Adduser = () => {   
const navigate=useNavigate();  
const dispatch=useDispatch();  
const { values, errors, touched, handleBlur, handleChange, handleSubmit } =    
useFormik({
    initialValues,
    validationSchema: Addusers,
  
   onSubmit:(values,action) => {
   
    
      dispatch(addUsers(values));
      navigate('/');



  //     try{
  //       const response= await axios.post("https://protected-shore-01446.herokuapp.com/auth/login",values);

       
       
  //      if(response.status===200){

  //         localStorage.setItem('token',response.data);

  //         alert("Login successful");
  //         navigate('/');

  //       }
      

  //  }
  
  // catch(error){
  //   if(!error.response){

  //     alert("network error");

  //   }
  //  else if(error.response.status===401){
  //     alert(error.response.data);

  //   }
  //   else if(error.response.status===404){
  //     alert(error.response.data);

  //   }
  //   else{
  //     alert("error");
  //   }
  // }


     action.resetForm();
     },
  });



  return (
  <Container className="contain">
  <Row>
  <Col lg={4} md={6} sm={12} className="text-left  mt-2" >
  


<form onSubmit={handleSubmit}>

<div>
<input
 type="text"
 autoComplete="off"
 name="name"
 id="name" className='form-control mb-4'
 placeholder="Enter your name"
 value={values.name}
 onChange={handleChange}
 onBlur={handleBlur}/>
 {errors.name && touched.name ? (
 <p className="form-error">{errors.name}</p>
) : null}
</div>



<div>  
<input
 type="email"
 autoComplete="off"
 name="email"
 id="email"
 placeholder="Enter Your Email"
 className='form-control mb-4'
 value={values.email}
 onChange={handleChange}
 onBlur={handleBlur}/>
 {errors.email && touched.email ? (
 <p className="form-error">{errors.email}</p>
) : null}
</div>  


<div className="d-grid gap-2 mb-4">
<Button variant="primary" size="md" type='submit' >
Add user
</Button> 
</div>
</form>
     

   









  </Col>

  </Row>
  </Container>
  )
}

export default Adduser