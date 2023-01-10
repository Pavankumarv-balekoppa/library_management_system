import { Link } from 'react-router-dom';
import '../component_style/adminnavbar.css'
const Adminnavbar = () => {
    return ( 
        <div className="adminnavbar">
            <div className="logo">
            <h1>Admin portal</h1>
            </div>
            <div className="nav">
            <Link to="/admin/">Admin Dashbord</Link>
            <Link to="addbooks">Add Book</Link>
            <Link to="adduser">Add User</Link>
            <Link to="booklist">Book List</Link>
            <Link to="userlist">User List</Link>
            <Link to="/">Logout</Link>
            </div>
        </div>
     );
}
 
export default Adminnavbar;