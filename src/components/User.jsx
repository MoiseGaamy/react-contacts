import React,{useState} from 'react'
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm"
import { connect } from "react-redux";
import { deleteContact } from "../actions/contactActions.js";

function User(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     function handleDelete() {
         props.deleteContact(props.userInfo.id);
    }
    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm userInfo={props.userInfo} deleteModal={handleClose}/>
        </Modal.Body>
      </Modal>
        <Col md="4" style={{marginBottom: "1rem"}}>
           <Card >
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted"> Gaamy User</Card.Subtitle>
                    <Card.Title>{props.userInfo.name}</Card.Title>
                    <Card.Text>
                      <p>Email:{props.userInfo.email}</p>
                      <p>Gen:{props.userInfo.gen}</p>
                      <p>Date:{new Date(props.userInfo.timestamp.seconds * 1000).toLocaleDateString('us-en')}</p>
                      <p>Time:{new Date(props.userInfo.timestamp.seconds * 1000).toLocaleTimeString('us-en')}</p>
                    </Card.Text>
                    <Card.Link href="#" onClick={handleShow}>Edit</Card.Link>
                    <Card.Link href="#">
                        <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
            </Col>
        </>
    )
}

const mapDispatchToProps = {
  deleteContact,
}

export default connect(null,mapDispatchToProps)(User);
