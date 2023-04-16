import React from "react";
import './landing.css'
import { Container, Row, Col, Form, Button, Nav, Navbar } from 'react-bootstrap';
import { FaFacebookF ,FaInstagram,FaTwitter } from 'react-icons/fa';
function Contact(){
    const iconStyles={
        color:'blue'
      }
    return(
        <>
        <div className="App"><h1>Contact Us</h1></div>
        <div id="App">
        <form>
            <label>
                UserName:
                <br></br>
                <input type='text' id='inp'></input>
            </label>
            <br></br>
            <label>
                Email:
                <br></br>
                <input type='text' id='inp'></input>
            </label>
            <br></br>
            <label>
                Contact:
                <br></br>
                <input type='text' id='inp'></input>
            </label>
            <br></br>
            <label>
                Your Query:
                <br></br>
                <textarea id='inp'></textarea>
            </label>
        </form>
        <button className="btn btn-dark">Submit</button>
        </div>
        <div className="app">
            <b><h3>Address</h3>
            <p>
                
            </p>
            <p>1011 Kakinada MainRd</p>
            <p>Tilak street,533462</p>
            <p>Phone: +91 7995540863</p>
            <p>Email: info@Website.com</p>
            </b>
        </div>
        <ul className="social-links" id="ul">
            <li id='li'><a href="#"><FaFacebookF style={iconStyles} />  FaceBook</a></li>
            <li id='li'> <a href="#"><FaTwitter style={iconStyles} />  Twitter</a></li>
            <li id='li'><a href="#"><FaInstagram style={iconStyles} />  Instagram</a></li>
          </ul>
        </>
    )
}
export default Contact