import React, { useState } from "react";
// import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminhome.css'
import Card from './card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Adminone = () => {
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
              <Link to="/adminone" activeClassName='active-link' style={{textDecoration:'none',color:'black'}}>All Users</Link>
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
              <Link to="/adminstatus" style={{textDecoration:'none',color:'black'}}>View Status</Link>
            </h3></button></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class=""><button className="hover-effect" style={{width:'150px',height:'80px'}}><h3>
              {/* <a class="dropdown-item" href="/#">View History</a> */}
              <Link to="/adminhistory" style={{textDecoration:'none',color:'black'}}>View History</Link>
            </h3></button></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class=" " ><button className="hover-effect" ><h3>
              <select value={selectedOption} onChange={handleSelect} style={{outline: 'none',width:'150px',height:'60px'}}>
                <option value="">Manage</option>
                <option value="/manage1">Manage users</option>
                <option value="/manage2">Manage Owners</option>
                <option value="/manage3">Car Advertisements</option>
              </select></h3></button>
            </div>
          </div>

        </div>


        {/* Main Content */}
        <div class="col-md-9">
        <div class="row">
          
          <div class="col-md-9">
            
          <div class="d1"><center><h3 className="q0">User Information</h3></center></div>
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
          <br></br>
            <div className="card-list">
            <div class="col-md-3">
      <Card className='c1'
        title="Rohan"
        description="Honda cars are known for their reliability, fuel efficiency, and  known for their quality, reliability, and innovation."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
      />
      </div> 
      <div class="col-md-3">
      <Card className='c1'
        title="Sonia"
        description="Lamborghini cars are renowned for their striking design, exceptional performance, and exclusivity."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAZypJ5wFe60aCCJe4j8jIjSubv6UEsUaLg&usqp=CAU"
      />
      </div>
      <div class="col-md-3">
      <Card  className='c1'
        title="Raghu"
        description="Benz cars, also known as Mercedes-Benz, are synonymous with luxury, sophistication, and advanced engineering."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfR_96qUfSGBRAufz2OjqyzsPpAeqJ1OViA&usqp=CAU"
      />
      </div>
      
      
    </div>
    <br></br>
    <br></br>
    <div className="card-list">
            <div class="col-md-3">
      <Card  className='c1'
        title="Rahul"
        description="Toyota Innova Crysta cars are versatile, spacious, and comfortable family vehicles with a reputation for reliability."
        image="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
      />
      </div> 
      <div class="col-md-3">
      <Card  className='c1'
        title="Darshini"
        description="Rolls-Royce cars are the ultimate in luxury and exclusivity, with unparalleled craftsmanship and attention to detail."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6k8U2xBHccUL6_sGGDfC2SKcPbAzPDwNAQ&usqp=CAU"
      />
      </div>
      <div class="col-md-3">
      <Card  className='c1'
        title="Mini"
        description="Thar is a rugged and capable off-road SUV from Mahindra, known for its iconic design and excellent off-road performance."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRpa98BfXIKHYL9URVJCNnEZDVgd4dE5u0qA&usqp=CAU"
      />
      </div>
      
    </div>
    

            
    
         

        </div>

      </div>


    </div>
    
  )
}

export default Adminone;