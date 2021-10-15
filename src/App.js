import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import './App.css';
import AddUserForm from "./components/AddUserForm";
import { connect } from "react-redux";
import { addContact } from './actions/contactActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "ismo",
          email: "ismo@email.com",
          gen: 14
       },
        {
          id: 2,
          name: "stefani",
          email: "stefani@email.com",
          gen: 16
       },
       {
          id: 3,
          name: "jean",
          email: "jean@email.com",
          gen: 15
       }
      ]
    }
  }
  
  addNewUser = (user) => {
    user.id = Math.floor(Math.random() * 1000) + 1;
    this.props.addNewContact(user);
  }
  deleteUser = (id) => {
    const userKept = this.state.users.filter((user) => {
      return user.id !== id
    })
    this.setState({
      users: userKept
    })
}
  editUser = (updated) => {
    this.setState({
    users:this.state.users.map(user => user.id === updated.id ? updated : user)
  })
}
  render() {
  return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
          <Col md="4"><AddUserForm addUser={this.addNewUser}/></Col>
            <Col>
              <Users usersData= {this.state.users} onDelete={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </>
  ); }
}

const mapDispatchToProps = {
  addNewContact: addContact,
};

export default connect(null,mapDispatchToProps)(App);
