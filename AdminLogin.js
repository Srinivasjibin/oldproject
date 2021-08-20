import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

function AdminLogin() {
    const [userId, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const History = useHistory();

    const validate = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/admin/getAdminPassword',
            {
                "adminId": userId
            }
        ).then(response => {
            if (password == response.data) {
                window.alert(`logged in successfully`)
                sessionStorage.setItem("adminLogged", true);
                History.push("/adminHome")
            }
            else if (response.data == "unavailable") {
                window.alert("UserId not present")
            }
            else {
                window.alert(`password not matching`)
            }
        }).catch(error => {
            console.log(error, "catch block")
        });

    }
    return (
        <>,
        <div className="row">
            <div className="col-sm-12">
            <br /><br /><br /><br />

            <div className="col-sm-4 offset-sm-4 border text-center mt-3">
                <br />
                <h2 className="text-dark m-6">Admin login</h2><br />
                <form onSubmit={validate}>
                    <input type="text" placeholder="userId" className="form-control" onChange={(e) => setUserid(e.target.value)} required /><br />
                    <input type="password" placeholder="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required /><br />
                    <input className="bg-success" type="submit" value="Login" />
                </form>
            </div>
            </div>
            </div>
        </>
    )
}
export default AdminLogin;