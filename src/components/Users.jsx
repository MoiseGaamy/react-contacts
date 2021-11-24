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
                        return <User userInfo={user} key={user.id} />
                    })
                }
                
            </Row>
        </Container>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        contactsData: state.contactState.contacts,
    };
};
export default connect(mapStateToProps)(Users);