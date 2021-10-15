import React from 'react'
import {Container, Row} from "react-bootstrap"
import User from './User'
import { connect } from "react-redux";

 function Users(props) {
    return (
        <Container>
            <Row>

                {
                    props.contactsData.map((user) => {
                        return <User userInfo={user} key={user.id} deleteUser={props.onDelete} editUser={props.editUser}/>
                    })
                }
                
            </Row>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
        contactsData: state.contacts,
    };
};
export default connect(mapStateToProps)(Users);