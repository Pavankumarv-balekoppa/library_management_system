import { Route, Routes } from "react-router-dom";
import Userlist from "./userlist";
import Admindashbord from "./admindashbord";
import Adminnavbar from "./adminnavbar";
import Booklist from "./booklist";
import Adduser from "./adduser";
import Addbooks from "./addbooks";
import Readbook from "./readbook";
import PageNotFound from "../Pagenotfound";

const Adminportal = () => {
    return ( 
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Adminnavbar/>
            <Routes>
                <Route path="/" element={<Admindashbord/>}/>
                <Route path="/addbooks" element={<Addbooks/>}/>
                <Route path="/adduser" element={<Adduser/>}/>
                <Route path="/booklist" element={<Booklist/>}/>
                <Route path="/booklist/:id" element={<Readbook/>}/>
                <Route path="/userlist" element={<Userlist/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
     );
}
 
export default Adminportal;