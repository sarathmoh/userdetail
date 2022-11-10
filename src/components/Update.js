import React from 'react';
import { Col,Row,Container,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useFormik} from 'formik';
import { userValidation } from '../schema/update';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { modifiedUser} from '../redux/actions';
// import { useEffect } from 'react';


const Update = () => {

const dispatch=useDispatch(); 
const {id}=useParams();
const navigate=useNavigate();
// useEffect(()=>{
//   dispatch(updateUser(id))
//   },[]) 

// const expenses=useSelector(allExpenses)
//   const firstArray=expenses.find(item=>{
//    return item.expenseid===expenseid;
//   })



const count=useSelector((state)=>state.users)
const {users}=count;  
console.log("users",users);
const getItem=users.find(item=>{
return item.id===id;
})
// console.log("id",id);
// console.log("count",count);
// console.log("getitem",getItem);
const { values, errors, touched, handleBlur, handleChange, handleSubmit } =    
useFormik({
       
       initialValues:{
       name:getItem.name,
       email:getItem.email,
    },
    validationSchema: userValidation,
  
   onSubmit:(values,action) => {
   
    // console.log(values);
    dispatch(modifiedUser(values,id));
    navigate('/');
      
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
 value={values.name|| ""}
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
 value={values.email || ""}
 onChange={handleChange}
 onBlur={handleBlur}/>
 {errors.email && touched.email ? (
 <p className="form-error">{errors.email}</p>
) : null}
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