import { useEffect, useState } from "react";
import { Link, useParams,useLocation } from "react-router-dom";
import '../component_style/booklist.css'
const Readbook = () => {
    let[book,setbook]=useState([])
    let param=useParams()
    const location = useLocation()
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch(`https://pavanallprojectdata.onrender.com/books/${param.id}`)
            // let response=await fetch(`http://localhost:4000/books/${param.id}`)
            let data=await response.json()
            setbook(data)
        }
        fetchdata()
    },[])
    return ( 
        <div style={{paddingBottom:"100px",backgroundColor:"white"}} className="readbook">
            <h1>Read book</h1>
            <div className="readbookid">
                <img width={150} src={book.thumbnailUrl} alt="" />
                <h1>{book.title}</h1>
                <p>{book.shortDescription}</p>
                <p>{book.longDescription}</p>
            </div>
            <Link to={location.pathname===`/admin/booklist/${param.id}` ? "/admin/booklist" : "/user/booklist"} className="readbookbutton">Back</Link>
        </div>
     );
}
 
export default Readbook;