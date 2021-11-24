import { createStore, applyMiddleware, compose , combineReducers} from "redux";
import thunk from "redux-thunk";
import usersReducers from "../reducers/contactReducers";

import { getFirebase, reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import configObj from "../config.js";

const reducer = combineReducers({
    contactState: usersReducers,
    firebase : firebaseReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(
    applyMiddleware(
        thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(configObj),
        reduxFirestore(configObj)
)
);

export default store;