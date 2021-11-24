import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import ProtectedRoute from "./components/ProtectedRoute.js";


class App extends Component {
  
  render() {
  return (
      <BrowserRouter>
      <ProtectedRoute exact path="/" component={ Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      </BrowserRouter>
  ); }
}

export default  App;
