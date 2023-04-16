import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import '../components/drop.css';
import { useNavigate } from "react-router-dom";
import {FiLogOut} from 'react-icons/fi';
function Head(){
    const navigate = useNavigate()
//   useEffect(()=>{
//     if(!localStorage.getItem('empId'))
//       window.location.href = '/'
//   })    
    return (
        <nav id='nav'>
            <ul>
                <li><Link to='/' >Login</Link></li>
                <li><Link to='/login'>SignIn</Link></li>
                <li onClick={(e)=>{
                    e.preventDefault();
        localStorage.removeItem('data')
                    navigate('/')
                }}><a><FiLogOut/></a></li>
            </ul>
        </nav>

    )
}
export default Head;