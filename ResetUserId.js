import axios from 'axios';
import react, { Component } from 'react'
import { Container, Form, Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ResetUserId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question1: '',
            question2: '',
            question3: '',
            contact: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        const UserInput = this.state

        event.preventDefault();
        console.log("state of reset component", this.state)
        axios.post('http://localhost:8080/api/user/forgotUserId', {
            "contact": this.state.contact
        }).then(response => {
            console.log("Response", response.data)
            if ((response.data.secQn1 == UserInput.question1) &&
                (response.data.secQn2 == UserInput.question2) &&
                (response.data.secQn3 == UserInput.question3)) {
                alert("Username is " + response.data.username)
                window.location.href = ("/userLogin")
            }
            else {
                alert("Incorrect answers")
                window.location.href = ("/ResetUserID")
            }
        })

    }
    render() {
        return (
            <div className="row">
            <div className="col-sm-12">
            <Container>
                <Form className="text-dark my-4" onSubmit={this.handleSubmit} >
                <div >
                <div className="row">
                        <div className="col-md-6" >
                                <label>Contact Number:</label>
                                <input type="text" className="form-control"   required placeholder="Enter your number here" name='contact' value={this.state.contact} onChange={this.handleChange}  />
                           </div></div>
                    <label>Security Questions</label><hr style={{width:570}}></hr>
                        <div className="row">
                        <div className="col-md-6" >
                                <label>What is your Pet's name:</label>
                                <input type="text" className="form-control"  required placeholder="Enter your answer here" name='question1' value={this.state.question1} onChange={this.handleChange}  />
                           </div></div>
                           <div className="row">
                        <div className="col-md-6" >
                           
                                <label>What is your Favorite Player's name:</label>
                                <input type="text" className="form-control" required placeholder="Enter your answer here" name='question2' value={this.state.question2} onChange={this.handleChange}  />
                               </div></div>
                               <div className="row">
                        <div className="col-md-6" >
                                <label>What is your childhood school's name:</label>
                                <input type="text" className="form-control"required placeholder="Enter your answer here" name='question3' value={this.state.question3} onChange={this.handleChange} />
                                
                           </div></div>
                           <br/>
                        <Button className="btn btn-success" type="submit" >Submit</Button>
              </div>  </Form>
            </Container>
            </div></div>
        )
    }
}