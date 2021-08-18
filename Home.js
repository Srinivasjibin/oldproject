import React, { Component } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Col, Container, ListGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import LoginForm from './LoginForm';

class Home extends Component {
  render() {
    return (
      <>
      <div style={{backgroundImage:'url("https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")'}}>
        <Navbar bg="dark" expand="md" variant="dark" >
          <Navbar.Brand ><h3>Issue Tracker</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Register as" id="basic-nav-dropdown">
                <NavDropdown.Item href="Userreg">User</NavDropdown.Item>
                <NavDropdown.Item href="/Register">Catagory rep</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Login as" id="basic-nav-dropdown">
                <NavDropdown.Item href="userLogin">User</NavDropdown.Item>
                <NavDropdown.Item href="catagoryLogin">Catagory rep</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/adminLogin">Admin login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="text-dark text-center mt-5" >
         <h2> Welcome to Issue tracker application</h2>
        </div>
        </div>
      </>
    );
  }
}

export default Home;