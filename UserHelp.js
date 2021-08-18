import react, { Component } from 'react'
import { Button, Container, Form, Row, Nav, Col } from 'react-bootstrap';

import UserNavbar from './UserNavbar';
import axios from 'axios'
export default class UserHelp extends Component {
    constructor(props) {
        super(props);
        if (!sessionStorage.getItem("userLogged"))
            this.props.history.push("/")
        this.state = {
            issueDate: new Date().toLocaleString(),
            issueName: '',
            issueDescription: '',
            issueResolution: '',
            issueCategory: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit = (event) => {

        const { issueDate, issueDescription, issueName, issueCategory } = this.state;
        console.log("Current state", this.state)

        axios.post('http://192.168.1.104:8080/issueSave', {
            "issueName": issueName,
            "issueDescription": issueDescription,
            "issueDate": issueDate,
            "issueCategory": issueCategory
        })
            .then(function (response) {
                console.log("@success", response);
                alert("Issue Submitted")
                window.location.href = ("/UserHelp")

            })
            .catch(function (error) {
                console.log("@fail", error);


            });
    };
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <>
                <UserNavbar />
                <marquee style={{color:'red'}}><h3>please raise an issue by clicking below </h3></marquee>
                        
                    <form className="">
                     <div >
                            <h3 align="right">Contact Us :</h3>
                            <p align="right">+91 9557893456 </p>
                            <br/>
                            </div>
                        <h3 align="center" ><a style={{textDecoration:'none'}}className="" href="/UserIssue">Raise Issue</a></h3>
                  
</form>

            </>
        )
    }
}