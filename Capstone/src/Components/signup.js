import React from 'react';
import { Link } from 'react-router-dom';

import './sign.css';
const Signup = () => {
  const handleRegistration = () => {
    // history.push("/status");
    window.location.href = '/cars';
  }
  return (
    <div>
      <div className="row mb-3" >
      <div className="col-md-10 mb-3">
          <br></br>
          <div ><h3 style={{color:'white'}}>D3'S CAR RENTAL</h3></div>
        </div>

        <div className="col-md-2 mb-3">
          <br />
          <div>
            <h5>
              <Link to="/" style={{textDecoration:'none',color:'white'}} >
                <b className='l1'>Login</b>&nbsp;&nbsp;
              </Link>
              <span>
                <Link to="/signup" style={{textDecoration:'none',color:'white'}}>
                  <b className='l1'>SignUp</b>
                </Link>
              </span>
            </h5>
          </div>
        </div>
      </div>
<center>
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" htmlFor="firstName">
              First Name
            </label>
            <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
          </div>

          <div className="lastname">
            <label className="form__label" htmlFor="lastName">
              Last Name
            </label>
            <input type="text" id="lastName" className="form__input" placeholder="Last Name"/>
          </div>

          <div className="email">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" className="form__input" placeholder="Email"/>
          </div>

          <div className="password">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input className="form__input" type="password" id="password" placeholder="Password"/>
          </div>

          <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
          </div>
        </div>

        <div className="footer">
          <button type="submit" className="bun" onClick={handleRegistration}><b>Register</b></button>
        </div>
      </div>
      </center>
    </div>
  );
};

export default Signup;
