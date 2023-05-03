import React, { useState } from "react";
import "./payment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
// import { Table } from 'react-bootstrap';
import {  Link } from 'react-router-dom';



function Payment() {
   
    
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform payment logic here
  };

  return (
    <div className="payment-container">
    {/* <h2>Payment</h2> */}
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
   
    <div className="payment-container1 col-md-10">
   
      <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="Enter Name">Name &nbsp;</label>
          <input
            type="text"
            id="Enter name"
            name="Enter name"
            placeholder="Enter Name"
            required
      />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="Enter Email">Email &nbsp;</label>
          <input
            type="text"
            id="Email"
            name="Email"
            placeholder="Enter Email"
            required
      />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number &nbsp;</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="Enter card number"
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date&nbsp;</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="MM/YY"
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="cvv">CVV &nbsp;</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={cvv}
            onChange={handleCvvChange}
            placeholder="Enter CVV"
            required
          />
        </div>
        <br></br>
        <center>
        <button type="submit" className="bun">Pay Now</button>
        </center>
        <br></br>
       
    <div className="payment-container">
       <p><b><button className="b3"><a href="https://pay.google.com/gp/w/u/0/home/signup?sctid=8618636148474863" >Google Pay</a></button></b><span>&nbsp;<b>
        <button className="b3"><a href="https://www.phonepe.com/">Phone Pay</a></button></b></span></p>
       </div>
      
   
    </form>
    </div>
</div>
</div>
  );
}

export default Payment;
