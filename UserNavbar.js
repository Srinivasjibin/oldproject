import react, { Component } from 'react'
import { Button, Container, Form, Row, Nav } from 'react-bootstrap';
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
      <Nav className="mx-auto navbar bg-dark ">
        <Nav.Item >
          <Nav.Link href="/userHome">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/userHelp">Help</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/userIssue">Raise Issue</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Notifications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/userHistory">Issue History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={this.log_off}>Log Out</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }

}