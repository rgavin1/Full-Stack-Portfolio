import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../styles/ContactMe.css';

class ContactMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  deleteForm(){
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render(){
    return (
      <Container className="mobileForm d-flex py-4 justify-content-around" id="contact">
        <h2 className="px-5 text-center">Lets Connect!</h2>
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