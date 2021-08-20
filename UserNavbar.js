import react, { Component } from 'react'
import { Button, Container, Form, Row, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
export default class UserNavbar extends Component {
  constructor(props) {
    super(props)
  }
  log_off = () => {
    sessionStorage.removeItem("userLogged");
    sessionStorage.removeItem("userId");
    window.alert("logged off")
    window.location.href = ("/")
  }
  render() {

    return (
<div className="row">
  <div className="col-sm-12">
    
      <ul className="navbar bg-dark" style={{"height":50}}>
      <li className="nav-item">
        <Link className="nav-link" to="/userHome">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/userHelp">Help</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/userIssue">Raise Issue</Link>
      </li>   
      <li className="nav-item">
        <Link className="nav-link" to="userHistory">Issue History</Link>
      </li>  
      <li className="nav-item " >
        <Link className="nav-link"  onClick={this.log_off}>Log Out</Link>
      </li>
      </ul>
      
      </div>
     
      </div>
      
      
    )
  }

}