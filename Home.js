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
      <><div className="row">
      <div className="col-sm-12">
      <div style={{backgroundImage:'url("https://wallpapercave.com/wp/wp2700080.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:570}}>
        <Navbar className="bg-dark" variant="dark">
          <Navbar.Brand ><h3><b>Issue Tracker</b></h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"><b>Home</b></Nav.Link>
              <NavDropdown title="Register as" id="basic-nav-dropdown">
                <NavDropdown.Item href="Userreg"><b>User</b></NavDropdown.Item>
                <NavDropdown.Item href="/Register"><b>Catagory rep</b></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Login as" id="basic-nav-dropdown">
                <NavDropdown.Item href="userLogin"><b>User</b></NavDropdown.Item>
                <NavDropdown.Item href="catagoryLogin"><b>Catagory rep</b></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/adminLogin">Admin login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="text-light text-center mt-5" >
         <h2> Welcome to Issue tracker application</h2>
        </div>
        
        </div>
        <div  >
          <footer  className="bg-dark text-light" style={{"height":50}}>
          <h6><i>Designed by</i></h6>
          <pre><i>Srinivas,  Srividya,  Mounika, Naveen, Lavanya.</i></pre>
          </footer>
        </div>
</div></div>
      </>
    );
  }
}

export default Home;