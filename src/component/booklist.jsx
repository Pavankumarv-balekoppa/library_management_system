import { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import '../component_style/booklist.css'
import Readbook from "./readbook";

const Booklist = () => {
    let location=useLocation()
    let [books, setbooks] = useState([])
    useEffect(() => {
        let fecting = async () => {
            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setbooks(data)
        }
        fecting()
    }, [books])

    //delete a book from server
    let handleDelete = (id, title) => {
        fetch(`http://localhost:4000/books/${id}`,
            {
                method: 'DELETE'
            })
        alert(`${title} has been delete perpanently`)
    }
    let nevigate = useNavigate()
    let readmore = (id) => {
        if( location.pathname == '/admin/booklist')
        {
        nevigate(`/admin/booklist/${id}`)
        }
        else
        {
            nevigate(`/user/booklist/${id}`) 
        }
    }
    return (
        <div className="booklist">
            <h1 align="center">BOOK LIST : {books.length}</h1>
            <div className="books">
                {
                    books.map(x => (
                        <div className="amazon">
                            <div className="img">
                                <img id="booklist" src={x.thumbnailUrl} alt="" />
                            </div>
                            <div className="discrip" align="left">
                                <h2><u><i>Title</i></u> : {x.title}</h2>
                                <h3>Author: {x.authors.toString()}</h3>
                                <h3>Pages : {x.pageCount}</h3>
                                <h3>Category : {x.categories}</h3>
                                <button  onClick={() => readmore(x.id)} style={{ color: 'white', backgroundColor: "green" }} >Read more</button>
                                {location.pathname=='/admin/booklist' && <button onClick={() => handleDelete(x.id, x.title)} style={{ color: 'white', backgroundColor: "red" }}>Remove</button>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Booklist;
