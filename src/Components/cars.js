import React from "react";
import "./cars.css";
// import logo from "../logo.svg";
// import Details from "./Details";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
// import { Table } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
function Cars() {
    const handleDetails = (e) => {
        e.preventDefault();
        // your login logic here
        window.location.href = '/book';
      }
    
  return (
    <>
        <div className="container-fluid" >

{/* Top */}
<div className="row mb-3" >

  <div className="col-md-10 mb-3">
    <br></br>
    <div ><h3 style={{color:'white'}}>D3'S CAR RENTAL</h3></div>
  </div>

  <div className="col-md-2 mb-3">
  <br></br>
    <div ><h3 style={{color:'white'}}>User Info  <FontAwesomeIcon icon={faUser} style={{color:'black'}}/></h3>
   </div>
  </div>
</div>


  
  <br></br>
<div class="row" >

  {/* Aside */}
  
  <div class="col-md-2" >
    <div class="col-md-12 mb-3">
    {/* <Link to="/histo" style={{textDecoration:'none',color:'black'}}>Available cars</Link> */}
      <button className="hover-effect" ><h3>
        <Link to="/cars" style={{textDecoration:'none',color:'black'}} > &nbsp;<FontAwesomeIcon icon={faCar} />&nbsp;Cars
      &nbsp;</Link></h3></button>
    </div>
    <br></br>
    <div class="col-md-12 mb-3">
    <button className="hover-effect" >
<h3>
<Link 
to="/history" 
style={{textDecoration:'none',color:'black'}} 
>
<FontAwesomeIcon icon={faBook} />&nbsp;History &nbsp;
</Link>
</h3>
</button>
    </div>
    <br></br>
    <div class="col-md-12 mb-3">
    <button className="hover-effect" ><h3><Link to="/status" style={{textDecoration:'none',color:'black'}}><FontAwesomeIcon icon={faDotCircle} />&nbsp;Status &nbsp;</Link></h3></button>
    </div>
    

  </div>

          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://imgd.aeplcdn.com/600x337/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75'}  className="i2"alt="car" />
           <br></br>
           
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}>

            Book Now
            </button>
            
          </div>
          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKufe3IGAq3LDfXKIMayvl-W2E0WRMnVpbqQ&usqp=CAU'} className="i2" alt="car" />
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}>
            Book Now
            </button>
          </div>
          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqCsHARTT02Pf-RywD5A1G3neD4c1YMlQ3g&usqp=CAU'} className="i2" alt="car" />
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}>
            Book Now
            </button>
          </div>
          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgDgDSmKJND58PLN4Ho-aHkDp_646uKWZkw&usqp=CAU'}  className="i2"alt="car" />
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}>
            Book Now
            </button>
          </div>
          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_wX2kxYjnUEr5P-qk6c1oJN_nxYHKY1Skw&usqp=CAU'}  className="i2"alt="car" />
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}>
            Book Now
            </button>
          </div>
          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ndgGXsGOi7UwvvwY2BAEJYOy8DTL2oFq3A&usqp=CAU'} className="i2" alt="car" />
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}> 
            Book Now
            </button>
          </div>
          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBAu0UM5V2WQ-7fN2NomllKKc1hrQ70xekg&usqp=CAU'} className="i2" alt="car" />
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}>
            Book Now
            </button>
          </div>
          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9EotzB_xMCXfMm5C1N2rFooPimgA6OdVoQ&usqp=CAU'}  className="i2"alt="car" />
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}>
              Book Now
            </button>
          </div>
          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsm6mrISI6yvHxIz3-WBpE336xLp92eZM3w&usqp=CAU'}  className="i2"alt="car" />
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}>
              Book Now
            </button>
          </div>
          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQZuLIRzxvM9K_66Rr_LS0lMJ8JA5YDbDNQ&usqp=CAU'} className="i2" alt="car" />
            
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}>
              Book Now
            </button>
          </div>
          <div className="col-md-3 i1" id="viewcars">
            <img src={'https://www.v3cars.com/media/model-imgs/1674817179-fronx.webp'} className="i2" alt="car" />
            <button className="btn btn-primary bun" id="book" onClick={handleDetails}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>

    )
}
export default Cars;