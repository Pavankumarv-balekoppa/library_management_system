import { Link } from "react-router-dom";
import '../component_style/landingpage.css';
const Landingpage = () => {
    return ( 
        <div className="landingpage">
            <div className="selectlogintype">
                <h1>Library Management System</h1>
                <img src="/images/userlogo1.png" alt="" />
                <img src="/images/userlogo2.png" alt="" /><br /><br />
                <Link to='/adminlogin' id="b1" class="btn btn-outline-primary">Admin Login</Link>
                <Link to='/userlogin' id="b2" class="btn btn-outline-primary">User Login</Link>
            </div>
        </div>
     );
}

export default Landingpage;