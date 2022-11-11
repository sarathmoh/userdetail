import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Details = ({ id, name, email }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
  toast.warning(`Deleted user ${name}`)
      dispatch(deleteUsers(id));
    
  }

  const updatingUser = () => {
  navigate(`/updateuser/${id}`)
  }
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Details of {name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Nickname:{name}</Card.Subtitle>
        <Card.Text>
         Personal email:{email}
        </Card.Text>
        <Button className='mx-2' variant="outline-info " onClick={updatingUser} >Update</Button>
        <Button variant="outline-danger" onClick={() => deleteHandler(id)} >Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Details











      {/* <Card>
        <Card.Header as="h5">{id}</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {email}
          </Card.Text>
          <Button variant="outline-primary" onClick={updatingUser} >Update</Button>
          <Button variant="outline-primary" onClick={() => deleteHandler(id)} >Delete</Button>
        </Card.Body>
      </Card> */}

