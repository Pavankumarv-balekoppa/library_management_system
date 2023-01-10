import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Userlogin = () => {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let nevigate=useNavigate()
    // let login=()=>{
    //     nevigate('/user/')
    // }
    let login = (e) => {
        e.preventDefault();
        let data={email,password}
        // console.log(data);
        if(email=="pavan@gmail.com" && password=='pavan')
        {
            nevigate('/user/')
        }
        else{
            alert('Invalid credential')
        }

    }
    return ( 
        <div id="login" className="userlogin">
        <div className="form container card mt-5 pt-3">
            <h1 id="h1">User Login</h1>
            <div className="form_input p-5">
                <form onSubmit={login}>
                    <div className="email">
                        <input type="email" required value={email} onChange={(e)=>setemail(e.target.value)} placeholder="enter email" className="form-control" />
                    </div>
                    <div className="password">
                        <input type="password" required value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="enter password" className="form-control" />
                    </div>
                    <button class="btn btn-primary">LOGIN</button>
                </form>
            </div>
        </div>
    </div>
     );
}
 
export default Userlogin;