import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import './App.css';
import AddUserForm from "./components/AddUserForm";
import { connect } from "react-redux";
import { getAllContacts } from "./actions/contactActions.js";

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
  
  componentDidMount() {
    this.props.getAllContacts();
}
  render() {
  return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
          <Col md="4"><AddUserForm /></Col>
            <Col>
              <Users usersData= {this.state.users}  />
            </Col>
          </Row>
        </Container>
      </>
  ); }
}
const mapDispatchToProps = {
  getAllContacts,
}

export default  connect(null,mapDispatchToProps)(App);
