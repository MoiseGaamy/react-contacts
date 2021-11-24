import React, { Component } from 'react'
import {Form, Button} from "react-bootstrap"
import { connect } from "react-redux";
import { addContact } from '../actions/contactActions';
import { logOut } from "../actions/authActions.js";

class AddUserForm extends Component {
    constructor(props) {
      super(props);
        this.state = {
            name: "",
            email: "",
            gen: ""
        };
    }

    handleChange = (e) => {
        e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewContact(this.state);
        this.setState({
            name: "",
            email: "",
            gen: ""
        
        })
      console.log("form submited",this.state);
    }
    render() {
        return (
          <Form onSubmit={this.handleSubmit}>
            <Button onClick={this.props.out} className="btn btn-secondary">logOut</Button>
            <hr />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Gen</Form.Label>
              <Form.Control type="number" placeholder="gen" name="gen" value={this.state.gen} onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )
    }
}
const mapDispatchToProps = {
  addNewContact: addContact,
  out : logOut
};
export default connect(null,mapDispatchToProps)(AddUserForm);
