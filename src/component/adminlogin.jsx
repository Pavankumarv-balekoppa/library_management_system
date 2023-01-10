import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../component_style/adminlogin.css'

const Adminlogin = () => {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let nevigate=useNavigate()

    let login = (e) => {
        e.preventDefault();
        let data={email,password}
        // console.log(data);
        if(email=="admin@gmail.com" && password=='0000')
        {
            nevigate('/admin/')
        }
        else{
            alert('Invalid credential')
        }

    }
    return (
        <div id="login" className="adminlogin">
            <div className="form container card mt-5 pt-3">
                <h1 id="h1">admin Login</h1>
                <div className="form_input p-5">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type="email" required value={email} onChange={(e) => setemail(e.target.value)} placeholder="enter email" className="form-control" />
                        </div>
                        <div className="password">
                            <input type="password" required value={password} onChange={(e) => setpassword(e.target.value)} placeholder="enter password" className="form-control" />
                        </div>
                        <button class="btn btn-primary">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Adminlogin;