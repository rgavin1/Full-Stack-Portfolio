import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../styles/ContactMe.css';
//import 'FireBaseConfig';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
//Get Envirnomental Variable
require('dotenv').config();

class ContactMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      display: 'none'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
  }

  componentDidMount(){
    if(!firebase.apps.length){
      firebase.initializeApp({
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DB_URL,
        projectId: "react-portfolio-b231e",
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID
      });
    }
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    firebase.firestore().collection("messages").add({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
    .then( () => {
      setTimeout( () => {
        this.setState({
          name: '',
          email: '',
          message: '',
          display: 'block'
        });
      }, 1000);
    })
    .catch( (error) => {
        console.error("Error", error);
    });
  
  }

  deleteForm(){
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render(){

    const style = {
      backgroundColor: 'green',
      textAlign: 'center',
      padding: '10px 0',
      fontWeight: 400,
      display: `${this.state.display}`,
    }

    return (
      <Container className="mobileForm d-flex py-4 justify-content-around" id="contact">
        <h2 className="px-5 text-center">Lets Connect!</h2>
        <div style={style}>Message Sent</div>
      <Form className="container border-right border-left px-3" onSubmit={this.handleSubmit} onReset={this.deleteForm} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Your Name" 
          name="name" 
          onChange={this.handleChange}
          value={this.state.name}
          required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="name@example.com" 
          name="email" 
          onChange={this.handleChange}
          value={this.state.email}
          required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message Me</Form.Label>
          <Form.Control 
          as="textarea" 
          rows="3" 
          name="message" 
          onChange={this.handleChange}
          value={this.state.message} 
          required 
          />
        </Form.Group>
        <Button type="submit" style={{
          width: '200px', 
          marginRight: '10px',
          backgroundColor: 'rgb(167, 40, 40)',
          borderColor: 'rgb(167, 40, 40)'
        }}>Send</Button>
        <Button variant="danger" type="reset">Clear</Button>
      </Form>
      </Container>
  )};
};

export default ContactMe;