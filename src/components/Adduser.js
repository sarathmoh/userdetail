import React from 'react';
import { useFormik } from 'formik';
import { Addusers } from '../schema/adduser';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import {Row,Col,Container,Button} from 'react-bootstrap';
import one from '../assets/undraw_connected_re_lmq2.svg';
import two from '../assets/undraw_design_tools_-42-tf.svg';

const initialValues = {

  name: "",
  email: "",

};
const Adduser = () => {
  const { users } = useSelector((state) => state.users)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Addusers,

      onSubmit: (values, action) => {



        const exist = users.find((item) => {
          return item.email === values.email;
        });


        if (!exist) {
          dispatch(addUsers(values));
          toast.success("Added a new user");
          navigate('/');
       
        } else {
          toast.error("Bad user credential user exists")
        }

        action.resetForm();
      },
    });



  return (

  <Container className='mt-3'>
  <Row>
  <Col className="text-left"  lg={6} md={8} sm={12}>
  <h3 className='font-weight-4 mt-4 mb-5 head '>Hey add your Details here!!!</h3>
  <img className='w-75 mt-5' src={one} alt="icon"/> 
  </Col>
    
  <Col className="mt-5"   lg={6} md={6} sm={12} >
   <img src={two} alt="addpic" className='addexpense w-75 mt-4 '/> 
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


