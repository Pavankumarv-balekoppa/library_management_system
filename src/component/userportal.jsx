import { Route, Routes } from "react-router-dom";
import Booklist from "./booklist";
import Readbook from "./readbook";
import Userdashbord from "./userdashbord";
import Userlist from "./userlist";
import Usernavbar from "./usernavbar";

const Userportal = () => {
    return ( 
        <div className="userportal">
            <Usernavbar/>
            <Routes>
                <Route path="/" element={<Userdashbord/>}/>
                <Route path="/booklist" element={<Booklist/>}/>
                <Route path="/booklist/:id" element={<Readbook/>}/>
                <Route path="/userlist" element={<Userlist/>}/>
            </Routes>
        </div>
     );
}
 
export default Userportal;