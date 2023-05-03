import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from './Card';
import './style.css';
import Card from './card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// import {  Link } from 'react-router-dom';
const First = () => {
    const handleCard = (e) => {
        e.preventDefault();
        // your login logic here
        window.location.href = '/home';
    }
    const handleCard1= (e) => {
        e.preventDefault();
        // your login logic here
        window.location.href = '/admin1';
    }
    const handleCard2= (e) => {
      e.preventDefault();
      // your login logic here
      window.location.href = '/owner';
  }
    return(
        <div className="container-fluid" >

        {/* Top */}
        <div className="row mb-3" >
  
          <div className="col-md-10 mb-3">
            <br></br>
            <div ><h3 style={{color:'white'}}>D3'S CAR RENTAL</h3></div>
          </div>
  
          <div className="col-md-2 mb-3">
          <br></br>
            <div ><h3 style={{color:'white'}}>INFO <FontAwesomeIcon icon={faUser} style={{color:'black'}}/></h3>
           </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row" >
        <div className="col-md-1" >
            {/* <h1>hello</h1> */}
        </div>
        <div className="col-md-11" >
            <center>
           
            <div className="card-list row">
            <div className="col-md-3 q1" >
                <button onClick={handleCard}>
      <Card className='n1'
        title="USER" onClick={handleCard}
        description="Toyota Innova Crysta cars are versatile, spacious, and comfortable family vehicles with a reputation for reliability."
        image="https://img.freepik.com/free-vector/flat-design-profile-icon-set_23-2149499280.jpg?w=2000"
      /></button>
      {/* <button onClick={handleCard}>User</button> */}
      </div> 
      <div className='col-md-1'></div>
      <div className="col-md-3 q1">
      <button onClick={handleCard1}>
      <Card className='n1'
        title="ADMIN" onClick={handleCard1}
        description="Rolls-Royce cars are the ultimate in luxury and exclusivity, with unparalleled craftsmanship and attention to detail."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrAYqzJv4xWvpZ3Pxc2z_Zt11yUJMHXYGEmMkFY0QSMxkXvI_39WMWOPkXG_GVlAOIFU&usqp=CAU"
      /></button>
      </div>

      <div className='col-md-1'></div>
      <div className="col-md-3 q1">
      <button onClick={handleCard2}>
      <Card className='n1'
        title="OWNER"
        description="Thar is a rugged and capable off-road SUV from Mahindra, known for its iconic design and excellent off-road performance."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmCMAdDMUMWg11cGTvr-GOq72-Qi49JgZfUA2cffElOTKYZi3RVxUFJ_tzzzbk8F6_z8&usqp=CAU"
      /></button>
      </div>
      
    </div>
    </center> 
        </div>
        
        </div>
        
        

        </div>
  
    );
}
export default First;