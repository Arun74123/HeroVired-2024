// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import {  Link } from 'react-router-dom';
// import Signup from "./signup";
import './home.css';

const Owner= () => {
  // 
  const handleLogin = (e) => {
    e.preventDefault();
    // your login logic here
    window.location.href = '/ownercars';
  }

    return (
      <div className="container-fluid" >

      {/* Top */}
      <div className="row mb-3" >

        <div className="col-md-10 mb-3">
          <br></br>
          <div ><h3 style={{color:'white'}}>D3'S CAR RENTAL</h3></div>
        </div>

        <div className="col-md-2 mb-3">
        <br></br>
        <div >
        <h5>
              <Link to="/owner" style={{textDecoration:'none',color:'white'}} >
                <b className='l1'>Login</b>&nbsp;&nbsp;
              </Link>
              <span>
                <Link to="/ownersign" style={{textDecoration:'none',color:'white'}}>
                  <b className='l1'>SignUp</b>
                </Link>
              </span>
            </h5>
            </div>
        </div>
      </div>
      
      
     <center>
      <div className="form">
      <h2>Owner Login Page</h2>
      <br></br>
        <label>
          Username:
          <input type="text"  />
        </label>
        
        <br></br>
        <br></br>
        <label>
          Password:
          <input type="password"  />
        </label>
        <br></br>
        <br></br>
        <button type="submit" onClick={handleLogin} className='bun'><b>Owner LogIn</b></button>
     
    </div>
    </center>
    
    </div>
    );
};

export default Owner;
