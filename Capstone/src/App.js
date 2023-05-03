// import logo from './logo.svg';
import './App.css';
// import status from './Components/status.js';
// import Status from './Components/status.js';
import Status from './Components/status';
import Home from './Components/home';
import Signup from './Components/signup';
import History from './Components/history';
import Cars from './Components/cars';
import Book from './Components/book';
import Payment from './Components/payment';
import First from './Components/first';
import Admin1 from './Components/admin1';
import Owner from './Components/owner';
import Adminhome from './Components/adminhome';
import Adminone from './Components/adminone';
import Admintwo from './Components/admintwo';
import Adminstatus from './Components/adminstatus';
import Adminhistory from './Components/adminhistory';
import Manage1 from './Components/manage1';
import Manage2 from './Components/manage2';
import Manage3 from './Components/manage3';
import Ownersign from './Components/ownersign';
import Ownercars from './Components/ownercars';
import Ownerhistory from './Components/ownerhistory';
import Ownerstatus from './Components/ownerstatus';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';

function App() {
  // render() {
    return (
      // <div>
      //   {/* <h1>Welcome to my app</h1> */}
      //   <Status />
      // </div>
      <Router>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/signup" element={<Signup/>} />
        <Route path="/history" element={<History />} />
        <Route path="/status" element={<Status />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/book" element={<Book />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<First />} />
        <Route path="/admin1" element={<Admin1 />} />
        <Route path="/adminhome" element={<Adminhome/>} />
        <Route path="/adminone" element={<Adminone/>} />
        <Route path="/admintwo" element={<Admintwo/>} />
        <Route path="/adminstatus" element={<Adminstatus/>} />
        <Route path="/adminhistory" element={<Adminhistory/>} />
        <Route path="/manage1" element={<Manage1/>} />
        <Route path="/manage2" element={<Manage2/>} />
        <Route path="/manage3" element={<Manage3/>} />
        <Route path="/owner" element={<Owner/>} />
        <Route path="/ownersign" element={<Ownersign/>} />
        <Route path="/ownercars" element={<Ownercars/>} />
        <Route path="/ownerhistory" element={<Ownerhistory/>} />
        <Route path="/ownerstatus" element={<Ownerstatus/>} />
        </Routes>
    </Router>
    );
  }
// }

export default App;
