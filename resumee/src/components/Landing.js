import React from "react";
import t1 from '../images/t1.webp'
import t2 from '../images/t2.webp'
import t3 from '../images/t4.jpg'
import './landing.css'
import { useNavigate } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
function Login(){
    const navigate = useNavigate()
    function func(){
        navigate('/login')
    }
    function contact(){
        navigate('./contact');
    }
    return (
        <>
            <div>
                <ul id="ul">
                    <li id="li"><button className="btn btn-primary" onClick={func}>Sign In</button></li>
                    <li id="li"><button className="btn btn-primary" onClick={contact}>Contact Us</button></li>
                </ul>
            </div>
            <div className="App">
                <h1 id="h1">Resume Building App</h1>
                <Carousel fade>
      <Carousel.Item>
        <img className="g-block w-50" src={t1} alt="First slide" onClick={func}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="g-block w-50" src={t2} alt="Second slide" onClick={func}/>

        
      </Carousel.Item>
      <Carousel.Item>
        <img className="g-block w-50" src={t3} alt="Third slide" onClick={func}/>

        

      </Carousel.Item>
    </Carousel>
            </div>
            
        </>
    )
}
export default Login