import React, { Component } from 'react';
import UserNavbar from './UserNavbar';
import { Button, Container, Form, Row, Nav,Accordion,Card } from 'react-bootstrap';

import axios from 'axios'

class UserHome extends Component {
    constructor(props) {
        super(props)
        if (!sessionStorage.getItem("userLogged"))
            props.history.push("/")
            this.state = {
                issues: [],

            };
    }
    componentWillMount(){
        axios.get('http://localhost:8080/api/admin/getIssueHistory')           
            .then(response => {
                this.setState({ issues : response.data })
                console.log("@log get req Success")
                console.log(response)
            }).catch(error=>console.log("history error"))
    }
    reopenIssue(id){
        this.props.history.push(`/reopenIssue/${id}`);
    }
    closeIssue(id){
        this.props.history.push(`/closeIssue/${id}`);
    }
    render() {
        return (
            <div className="row">
            <div className="col-sm-12">
                <UserNavbar />
                <marquee style={{color:'red'}}><h6>Please Contact us for any queries- +91 9515773146</h6></marquee>
                <Container>
               
                <div className="my-5 mx-auto">
                  
                <h5 className="text-warning">Active Issues</h5>
                <hr/>
                {this.state.issues.filter(data=>data.username==sessionStorage.userId&&data.issueStatus=="active").map((issue, idx) => {
                    return <div>
                    
                        <Accordion >
                        <div> 
                                      <tr>
                                      <td>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <p>Notification {idx + 1}</p>
                                    </Accordion.Toggle>
                                    </td></tr>
                                    </div>
                                <Accordion.Collapse eventKey="0">
                                <table className="table">
                                       
                                       <div>
                                          <tr><th>Issue name:</th>
                                          <th>Issue Description </th>
                                        
                                          <th>Issue Category</th>
                                          <th>Issue Status</th>
                                       
                                          <th>Issue Created On</th>
                                          </tr>
                                          <tr><td>{issue.issueName}</td>
                                         <td>{issue.issueDescription}</td>
                                          
                                           <td>{issue.issueCategory}</td>
                                          <td>{issue.issueStatus}</td>
                                           <td>{issue.issueDate}</td></tr>
                                       </div>
                                       </table>
                                </Accordion.Collapse>
                           
                        </Accordion>
                    </div>
                })}
                
           
               
                
                <h5  className="text-success my-2">Resolved Issues</h5>
                <hr/>
                 {this.state.issues.filter(data=>data.username==sessionStorage.userId&&data.issueStatus=="completed").map((issue, idx) => {
                    return <div>
                 
                        <Accordion >
                        <div> 
                                      <tr>
                                      <td>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <p >Notification {idx + 1}</p>
                                    </Accordion.Toggle>
                                    </td></tr>
                                    </div>
                                <Accordion.Collapse eventKey="0">
                                <table className="table">
                                       
                                       <div>
                                          <tr><th>Name:</th>
                                          
                                          <th>Description </th>
                                         
                                          <th>Resolution </th>
                                          
                                          <th>Category</th>
                                          
                                          <th>Status</th>
                                         
                                          <th>Date</th>
                                          
                                          <th></th>
                                          </tr>
                                          <tr><td>{issue.issueName}</td>
                                      <td>{issue.issueDescription}</td>
                                       <td>{issue.issueResolution}</td>
                                        <td>{issue.issueCategory}</td>
                                       <td>{issue.issueStatus}</td>
                                        <td>{issue.issueDate}</td>
                                        <td> <Button  style={{}} onClick={ () => this.reopenIssue(issue.id)}>Reopen</Button></td>
                                   
                                        <td> <Button  style={{}} onClick={ () => this.closeIssue(issue.id)}>close</Button></td></tr>
                                   </div>
                                    </table>
                                </Accordion.Collapse>
                           
                        </Accordion>
                    </div>
                })}
                
                
                </div>
            </Container>
            </ div></div>
        );
    }
}

export default UserHome;