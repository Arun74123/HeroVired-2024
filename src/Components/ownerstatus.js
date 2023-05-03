// import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from './Card';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
const Ownerstatus = () => {
  // Define a dummy function that does nothing
const handleConfirmed = () => {
  alert("Booking is Confirmed")
};
const handleCancel = () => {
  // Perform the cancel functionality here, e.g. show a confirmation message or cancel the booking
  alert("Booking is Cancelled!");
};
const handleEdit = () => {
  // Perform the edit functionality here, e.g. open an edit form or dialog box
  alert("Edit button clicked!");
};

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
          <div ><h3 style={{color:'white'}}>Owner Info  <FontAwesomeIcon icon={faUser} style={{color:'black'}}/></h3>
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
              <Link to="/ownercars" style={{textDecoration:'none',color:'black'}} > &nbsp;<FontAwesomeIcon icon={faCar} />&nbsp;Cars
            &nbsp;</Link></h3></button>
          </div>
          <br></br>
          <div class="col-md-12 mb-3">
          <button className="hover-effect" >
  <h3>
    <Link 
      to="/ownerhistory" 
      style={{textDecoration:'none',color:'black'}} 
    >
      <FontAwesomeIcon icon={faBook} />&nbsp;History &nbsp;
    </Link>
  </h3>
</button>
          </div>
          <br></br>
          <div class="col-md-12 mb-3">
          <button className="hover-effect" ><h3><Link to="/ownerstatus" style={{textDecoration:'none',color:'black'}}><FontAwesomeIcon icon={faDotCircle} />&nbsp;Status &nbsp;</Link></h3></button>
          </div>
          

        </div>


        {/* Main Content */}
        <div class="col-md-9">
            <div class="col-md-3">
                <div class="col-md-12">
              </div>
            </div>
              <div>
               <div class="row">
            <div class="tab1">
                <Table Striped bordered hover style={{marginTop:'60px',borderColor: 'black',boxShadow:'20px 20px 20px  #5e5e5d'}} > 
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Car Model</th>
                            <th>Booking status</th>
                            <th>Edit/Cancel</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Maruti Suzuki Swift</td>
                            <td><button style={{backgroundColor:"DarkBlue",color:'white'}}onClick={handleConfirmed}>Confirmed</button></td>
                            <td><button style={{backgroundColor:'Lavender',color:'black'}} onClick={handleEdit}>Edit&nbsp;</button>&nbsp;&nbsp;
                            <button style={{backgroundColor:"DarkRed",color:'white'}} onClick={handleCancel}>Cancel</button></td>
                        </tr>
                        
                        <tr>
                            <td>1</td>
                            <td>Kia seltos</td>
                            <td><button style={{backgroundColor:"DarkBlue",color:'white'}} onClick={handleConfirmed}>Confirmed</button></td>
                            <td><button style={{backgroundColor:'Lavender',color:'black'}} onClick={handleEdit}>Edit&nbsp;
                            </button>&nbsp;&nbsp;<button style={{backgroundColor:"DarkRed",color:'white'}} onClick={handleCancel}>Cancel</button></td>
                        </tr>
                        
                        
                    </tbody>
                </Table>
            </div>
          </div> 
                
                </div>        
        </div>

      </div>


    </div>
    
  )
}

export default Ownerstatus;