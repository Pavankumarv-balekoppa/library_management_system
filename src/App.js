import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; //npm install react-bootstrap bootstrap
import Landingpage from './component/landingpage';
import Adminlogin from './component/adminlogin';
import Userlogin from './component/userlogin';
import Adminportal from './component/adminportal';
import Userportal from './component/userportal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/adminlogin' element={<Adminlogin/>} />
        <Route path='/userlogin' element={<Userlogin/>} />
        <Route path='/admin/*' element={<Adminportal/>} />
        <Route path='/user/*' element={<Userportal/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;