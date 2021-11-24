import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, auth , ...remainingProps }) => {
    if (!auth.isLoaded) return null
    if (!auth.isEmpty) {
        return (<Route {...remainingProps} render={(props) => {
            return <Component {...props}/>
        }} />)
    }
    
    return (<Route {...remainingProps} render={(props) => {
        return <Redirect to={{ pathname: "/login" }} />
    }}/>)
   
}
const mSTP = (state) => {
    return {
        auth:state.firebase.auth
    }
}

export default connect (mSTP)(ProtectedRoute)
