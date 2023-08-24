import { Link } from "react-router-dom";
const Usernavbar = () => {
    return ( 
        <div id="org2" className="adminnavbar">
             <div className="logo">
            <h1>User portal</h1>
            </div>
            <div className="nav">
            <Link to="/user/">Dashbord</Link>
            <Link to="booklist">Book List</Link>
            <Link to="chart">Plot_chart</Link>
            <Link to="/">Logout</Link>
            </div>
        </div>
     );
}
 
export default Usernavbar;