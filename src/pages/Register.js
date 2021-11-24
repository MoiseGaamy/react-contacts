import React from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createEmailAndPassword, signInWithGoogle} from '../actions/authActions.js';

const Register = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        props.create(email,password)
  }
    return (
        <div className="mycontainer">
        <div className="forms-mycontainer">
            <div className="signin-signup">
                <form actions="#" className="sign-in-form" onSubmit={handleSubmit}>
                    <h2 className="title">Register</h2>
                    <div className="myinput-field">
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="myinput-field">
                        <input type="password" name="password" placeholder="password" />
                    </div>
                    <input type="submit" className="bbtn solid" value="Submit" />
                    <span>already have an account? click <Link to="/login">here</Link> to login</span>
                    <button onClick={props.google} className="btn btn-danger btn-social btn-google">Sign-In with Google</button>
                </form>
            </div>
        </div>
  </div>

    )
}
const mDTP = {
    create: createEmailAndPassword,
    google: signInWithGoogle
}

export default connect(null,mDTP)(Register)
