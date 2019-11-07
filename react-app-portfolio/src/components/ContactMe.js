import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

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

  render(){
    return (
      <Form className="container" onSubmit={this.handleSubmit}>
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
        <Button type="submit" block>Send</Button>
      </Form>
  )};
};

export default ContactMe;