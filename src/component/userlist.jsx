import { useEffect, useState } from "react";

const Userlist = () => {
    let[user,setuser]=useState([])
    useEffect(()=>{
        let fecthing=async()=>{
            let response=await fetch('https://pavanallprojectdata.onrender.com/users')
            let data = await response.json()
            setuser(data)
            // let response=await fetch('http://localhost:4000/users')
            // let data=await response.json()
            // setuser(data)
        }
        fecthing()
    },[])
    let remove=(y)=>{
        setuser(user.filter(x=>x.id!==y))
        alert('confirm to delete')
    }
    return ( 
        <div className="booklist">
            <h1 align="center">user list :  {user.length}</h1>
            <div className="books">
                {user.map(x=>(
                    <div className="list" >
                    <h1>Name : {x.name}</h1>
                    <h3>Age :{x.age}</h3>
                    <h3>Phone :{x.phonenumber}</h3>
                    <h3>Email :{x.email}</h3>
                    <button onClick={()=>remove(x.id)} style={{color:'white',backgroundColor:"red"}}>Remove</button>
                    </div>
                    ))}
            </div>
        </div>
     );
}
 
export default Userlist;