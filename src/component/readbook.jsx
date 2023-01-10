import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Readbook = () => {
    let[book,setbook]=useState([])
    let param=useParams()
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch(`http://localhost:4000/books/${param.id}`)
            let data=await response.json()
            setbook(data)
        }
        fetchdata()
    },[])
    return ( 
        <div style={{backgroundColor:'white',height:'650px'}} className="readbook">
            <h1>Read book</h1>
            <div className="readbookid">
                <h1>{book.title}</h1>
                <p>{book.shortDescription}</p>
                <p>{book.longDescription}</p>
            </div>
        </div>
     );
}
 
export default Readbook;