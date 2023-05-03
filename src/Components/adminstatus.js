import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminhome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Adminstatus = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [query, setQuery] = useState('');

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log("Selected option:", selectedValue);
    window.location.href = selectedValue;
  }

  return (
    <div className="container-fluid">

      {/* Top */}
      <div className="row mb-3">

      <div className="col-md-10 mb-3">
          <br></br>
          <div ><h3 style={{color:'white'}}>D3'S CAR RENTAL</h3></div>
        </div>

        <div className="col-md-2 mb-3">
        <br></br>
          <div ><h3 style={{color:'white'}}>Admin Info  <FontAwesomeIcon icon={faUser} style={{color:'black'}}/></h3>
         </div>
        </div>
      </div>

      
      <div class="row">

        {/* Aside */}
        <div class="col-md-2">
          <div class="col-md-12 mb-3">
            <div class=""><button className="hover-effect" style={{width:'150px',height:'80px'}}><h3> 
                {/* <a class="dropdown-item" href="/#">Available Cars</a> */}
                <Link to="/adminhome" style={{textDecoration:'none',color:'black'}}>Available cars</Link>
</h3></button></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class=""><button className="hover-effect" style={{width:'150px',height:'80px'}}><h3>
                {/* <a class="dropdown-item" href="/#">All Users</a> */}
                <Link to="/adminone" style={{textDecoration:'none',color:'black'}}>All Users</Link>
                </h3></button></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class=""><button className="hover-effect" style={{width:'150px',height:'80px'}}><h3>
                {/* <a class="dropdown-item" href="/#">All Owners</a> */}
                <Link to="/admintwo" style={{textDecoration:'none',color:'black'}}>All Owners</Link>
                </h3></button></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class=""><button className="hover-effect" style={{width:'150px',height:'80px'}}><h3>
                {/* <a class="dropdown-item" href="/#">View Status</a> */}
                <Link to="/adminstatus" activeClassName='active-link' style={{textDecoration:'none',color:'black'}}>View Status</Link>
                </h3></button></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class=""><button className="hover-effect" style={{width:'150px',height:'80px'}}><h3>
                {/* <a class="dropdown-item" href="/#">View History</a> */}
                <Link to="/adminhistory"  style={{textDecoration:'none',color:'black'}}>View History</Link>
            </h3></button></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class=" "><h3>
              <select value={selectedOption} onChange={handleSelect} style={{outline: 'none',width:'150px',height:'60px'}}>
                <option value="">Manage</option>
                <option value="/manage1">Manage users</option>
                <option value="/manage2">Manage Owners</option>
                <option value="/manage3">Car Advertisements</option>
              </select></h3>
            </div>
          </div>

        </div>


        {/* Main Content */}
        <div class="col-md-9">
        <div class="row">
          
          <div class="col-md-9">
            
          <div class="d1"><center><h3 className="q0">Car Status</h3></center></div>
          </div>
          <div class="col-md-3" style={{marginTop:'20px'}}>
          
            <div>
          <input
           type="text"
           value={query}
           onChange={(e) => setQuery(e.target.value)}
           placeholder="Search"
          />
         {/* <button onClick={() => console.log(query)}>Search</button> */}
         </div>
          </div>
          </div>
            
          <div class="row">
            <div class="tab1">
                <Table Striped bordered hover style={{marginTop:'60px',borderColor: 'black',boxShadow:'20px 20px 20px  #5e5e5d'}}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Car Name</th>
                            <th>Fuel</th>
                            <th>Price</th>
                            <th>Working</th>
                            <th>Not Working</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Audi</td>
                            <td>Diesel</td>
                            <td>329/hr</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Benz</td>
                            <td>Diesel</td>
                            <td>627/hr</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
          </div>
       

        </div>

      </div>


    </div>
    
  )
}

export default Adminstatus;