import { Route, Routes } from "react-router-dom";
import Userlist from "./userlist";
import Admindashbord from "./admindashbord";
import Adminnavbar from "./adminnavbar";
import Booklist from "./booklist";
import Adduser from "./adduser";
import Addbooks from "./addbooks";
import Readbook from "./readbook";

const Adminportal = () => {
    return ( 
        <div className="adminportal">
            <Adminnavbar/>
            <Routes>
                <Route path="/" element={<Admindashbord/>}/>
                <Route path="/addbooks" element={<Addbooks/>}/>
                <Route path="/adduser" element={<Adduser/>}/>
                <Route path="/booklist" element={<Booklist/>}/>
                <Route path="/booklist/:id" element={<Readbook/>}/>
                <Route path="/userlist" element={<Userlist/>}/>
            </Routes>
        </div>
     );
}
 
export default Adminportal;