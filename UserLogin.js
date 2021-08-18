import axios from "axios";
import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function UserLogin() {
    const [userId, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const History = useHistory();

    const validate = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/user/getUserPassword',
            {
                "username": userId
            }
        ).then(response => {
            if (password == response.data) {
                window.alert(`logged in successfully`)
                sessionStorage.setItem("userLogged", true);
                sessionStorage.setItem("userId", userId);
                History.push("/userHome")
            }
            else if (response.data == "unavailable") {
                window.alert("Username not present")
            }
            else {
                window.alert(`password not matching`)
            }
        }).catch(error => {
            window.alert("Network error")
            console.log(error, "catch block")
        });

    }
    return (
        <>
            <br /><br /><br /><br />
            <div className="col-sm-4 offset-sm-4 border text-center mt-3">
                <br />
                <h2 className="text-dark m-6">User login</h2><br />
                <form onSubmit={validate}>
                    <input type="text" placeholder="userid" className="form-control" onChange={(e) => setUserid(e.target.value)} required /><br />
                    <input type="password" placeholder="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required /><br />
                    <Button type="submit" className="btn-success">login </Button>
                </form><br/>
               
                    
                   <div className="row">
                        <Link to="/ResetUserID" style={{textDecoration:'none',color:'black'}}>Forgot Userid ?</Link><br/>
                        <Link to="/ResetUserPassword" style={{textDecoration:'none',color:'black'}}>Forgot password ?</Link>
                        </div>
               
            </div>
        </>
    )
}
export default UserLogin;