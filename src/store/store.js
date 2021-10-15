import { createStore } from "redux";
import usersReducers from "../reducers/contactReducers";


const store = createStore(usersReducers);

export default store;