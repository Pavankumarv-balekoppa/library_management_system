import { Route, Routes } from "react-router-dom";
import PageNotFound from "../Pagenotfound";
import Booklist from "./booklist";
import MyCharts from "./chart";
import Readbook from "./readbook";
import Userdashbord from "./userdashbord";
import Usernavbar from "./usernavbar";

const Userportal = () => {
    return ( 
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Usernavbar/>
            <Routes>
                <Route path="/" element={<Userdashbord/>}/>
                <Route path="/booklist" element={<Booklist/>}/>
                <Route path="/booklist/:id" element={<Readbook/>}/>
                <Route path="/chart" element={<MyCharts/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
     );
}
 
export default Userportal;