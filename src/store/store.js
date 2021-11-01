import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReducers from "../reducers/contactReducers";

import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import configObj from "../config.js";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(usersReducers, composeEnhancer(
    applyMiddleware(
        thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(configObj),
        reduxFirestore(configObj)
)
);

export default store;