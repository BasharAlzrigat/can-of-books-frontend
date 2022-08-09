import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAuth0 } from '@auth0/auth0-react';
import './theme/User.css'

function Profile() {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div className = "user-dashboard">
      <img id="profile-pic" src={user.picture} alt="profile pic"></img>
      <div>Welcome Back {user.name}!</div>

      <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Email:{user.email}</ListGroup.Item>
        <ListGroup.Item>FAV language: {user.locale}</ListGroup.Item>
        <ListGroup.Item>Last Update: {user.updated_at}</ListGroup.Item>
      </ListGroup>
    </Card>
  
    </div>
  )
}

export default Profile;