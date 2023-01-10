import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Addbooks = () => {
//{title,authos,categories,pageCount,shortdiscrip,longdiscrip,}
let a=[]
    let [title, settitle] = useState("")
    let [authors, setauthors] = useState(a)
    let [categories, setcategories] = useState("")
    let [pageCount, setpageCount] = useState("")
    let [longDescription, setlongDescription] = useState("")
    let [shortDescription, setshortDescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")

    let navigate=useNavigate()

    let handlesubmit = (e) => {
        e.preventDefault()
        //data to be posted
        let data = { title, authors, categories , pageCount,longDescription,shortDescription,thumbnailUrl}
        console.log(data);
        //posting to server
        fetch('http://localhost:4000/books',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            alert(`${title} added succesfully`)
            navigate('/admin/booklist')
    }
    let reset = () => {
        settitle("")
        setauthors("")
        setcategories("")
        setpageCount("")
        setlongDescription("")
        setshortDescription("")
        setthumbnailUrl("")
    }
    return (
        <div className="addbooks">
            <br /><h2 align="center" style={{ color: 'green' }}>Add books</h2>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" required placeholder="enter the title" value={title} onChange={(e) => settitle(e.target.value)} /><br />
                <input type="text" required placeholder="enter the authors" value={authors} onChange={(e) => setauthors(e.target.value)} /><br />
                <input type="text" required placeholder="enter the category" value={categories} onChange={(e) => setcategories(e.target.value)} /><br />
                <input type="number" required placeholder="enter the number pages" value={pageCount} onChange={(e) => setpageCount(e.target.value)} /><br />
                <textarea type="text" required  placeholder="enter the  shortdisc" value={shortDescription} onChange={(e) => setshortDescription(e.target.value)} /><br />
                <textarea type="text" required placeholder="enter the longdisc" value={longDescription} onChange={(e) => setlongDescription(e.target.value)} /><br />
                <input type="file" required placeholder="enter the number thumblin" value={thumbnailUrl} onChange={(e) => setthumbnailUrl(e.target.value)} /><br />
                <button type="submit">Submit</button><br />
                <button type="reset" onClick={reset}>Reset</button>
            </form>
        </div>
    );
}

export default Addbooks;