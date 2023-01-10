import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../component_style/addbooks.css'

const Adduser = () => {
    let[name,setname]=useState("")  
    let[age,setage]=useState("")
    let[phonenumber,setphone]=useState("")
    let[email,setemail]=useState("")

    let nevigate=useNavigate()

    let handlesubmit=(e)=>{
        e.preventDefault()
        let data={name,age,phonenumber,email}
        console.log(data);
        fetch('http://localhost:4000/users',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        nevigate('/admin/userlist')
    }
    let reset=()=>{
        setname("")
        setage("")
        setphone("")
        setemail("")
    }
    return (
        <div className="adduser">
       <br /> <h2 align="center" style={{color:'green'}}>Adding the user</h2><br />
        <form action="" align='center' onSubmit={handlesubmit}>
            <input type="text" required placeholder="enter the name" value={name} onChange={(e)=>setname(e.target.value)}/><br />
            <input type="number" min='1' required placeholder="enter the age" value={age} onChange={(e)=>setage(e.target.value)} /><br />
            <input type="tel" minLength='10' maxLength='10' required placeholder="enter tha phone" value={phonenumber} onChange={(e)=>setphone(e.target.value)} /><br />
            <input type="email" placeholder="enter tha email" required value={email} onChange={(e)=>setemail(e.target.value)} /><br /><br />
            <button type="submit">Submit</button><br />
            <button type="reset" onClick={()=>reset()}>Reset</button><br /><br />
        </form>
    </div>
      );
}
export default Adduser;