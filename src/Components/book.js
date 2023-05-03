import React from 'react'
import './book.css'
// import background from './images.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
// import { Table } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
function Book() {
    const handleDetails = (e) => {
        e.preventDefault();
        // your login logic here
        window.location.href = '/payment';
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
 
    <div className='form col-md-10' >
    
      <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-form">
						<div class="form-header">
							<h1><i>Book a car</i></h1>
						</div>
						<form>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label"><b>Name</b></span>
										<input class="form-control" type="text" placeholder="Enter your name"required/>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label"><b>Email</b></span>
										<input class="form-control" type="email" placeholder="Enter your email"required/>
									</div>
								</div>
							</div>
							<div class="form-group">
								<span class="form-label"><b>Car Name</b></span>
								<input class="form-control" type="tel" placeholder="Enter Car Name" required/>
							</div>
							<div class="form-group">
								<span class="form-label"><b>Car Model</b></span>
								<input class="form-control" type="text" placeholder="Enter Car Model" required/>
							</div>
							<div class="form-group">
								<span class="form-label"><b>Car Colour</b></span>
								<input class="form-control" type="text" placeholder="Enter Colour" required/>
							</div>
							<div class="row">
								<div class="col-sm-5">
									<div class="form-group">
										<span class="form-label"><b>Booking Date</b></span>
										<input class="form-control" type="date" required/>
									</div>
								</div>
								<div class="col-sm-7">
									<div class="row">
										<div class="col-sm-4">
											<div class="form-group">
												<span class="form-label"><b>Hour</b></span>
												<select class="form-control">
													<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
													<option>6</option>
													<option>7</option>
													<option>8</option>
													<option>9</option>
													<option>10</option>
													<option>11</option>
													<option>12</option>
												</select>
												<span class="select-arrow"></span>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<span class="form-label"><b>Minute</b></span>
												<select class="form-control">
													<option>05</option>
													<option>10</option>
													<option>15</option>
													<option>20</option>
													<option>25</option>
													<option>30</option>
													<option>35</option>
													<option>40</option>
													<option>45</option>
													<option>50</option>
													<option>55</option>
												</select>
												<span class="select-arrow"></span>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<span class="form-label"><b>AM/PM</b></span>
												<select class="form-control">
													<option>AM</option>
													<option>PM</option>
												</select>
												<span class="select-arrow"></span>
											</div>
										</div>
									</div>
								</div>
							</div>
                            <br></br>
                            <center>
							<div class="form-btn">
								<button class="bun" onClick={handleDetails}><b>Book Now</b></button>
							</div>
                            </center>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
     </div>
     
     </div>
    
     </div>

 
    );
};

export default Book;