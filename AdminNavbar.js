import react, { Component } from 'react'
import { Button, Container, Form, Row, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
export default class AdminNavbar extends Component {
  constructor(props) {
    super(props)

  }
  logOut = () => {
    sessionStorage.removeItem("adminLogged");
    window.alert("logged out successfully! ")
    window.location.href = ("/")
  }
  render() {

    return (
      
     <div className="row">
       <div className="col-sm-12">
       <ul className="navbar bg-dark " style={{"height":50}}>
         <li className="nav-item">
           <Link className="nav-link" to="/adminHome">Home</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/admin/addCategory">Add Category</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/admin/viewCategory">View Category</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/admin/viewHistory">View History</Link>
         </li>
         <li className="nav-item " >
           <Link className="nav-link"  onClick={this.logOut}>Log Out</Link>
         </li>
         </ul>
         </div>
     </div>
  
    )
  }
}