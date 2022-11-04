import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteUsers} from '../redux/actions';


const Details = ({ id, name, email }) => {
const dispatch=useDispatch();
const deleteHandler=(id)=>{
  if(window.confirm(`ARE YOU SURE WANT TO DELETE USER:${name}`)){
    dispatch(deleteUsers(id));
  }
}
    return (
        <div>

          <Card>
      <Card.Header as="h5">{id}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {email}
        </Card.Text>
        <Button variant="primary">Update</Button>
        <Button variant="primary" onClick={()=>deleteHandler(id)} >Delete</Button>
      </Card.Body>
    </Card>  
      
        </div>

    )
}

export default Details