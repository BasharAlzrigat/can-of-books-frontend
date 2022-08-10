import { Component } from "react";
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './theme/About.css';
const profilePicture = require('./theme/Profile-Picture.jpg');

class Profile extends Component {

  render() {
    return (
    
      <div className = "aboutBody">
      <img id="profile-pic" src={profilePicture} alt="profile pic"></img>
      <div>i'm a student learning to code in the LTUC coding bootcamp.</div>

      <Card>
      <ListGroup variant="flush">
        <ListGroup.Item id="list-group-item">My Name: Bashar Alzrigat</ListGroup.Item>
        <ListGroup.Item id="list-group-item">My Email: Bashar.Zureikat@Gmail.com</ListGroup.Item>
        <ListGroup.Item id="list-group-item">My GitHub <a className="small-git-hub-logo" href="https://github.com/BasharAlzrigat"> </a></ListGroup.Item>
      </ListGroup>
    </Card>
  
    </div>

      )
  }
};

export default Profile;
