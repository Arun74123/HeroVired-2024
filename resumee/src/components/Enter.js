import React from "react";
import { Container, Row, Col, Form, Button, Nav, Navbar } from 'react-bootstrap';

function Enter(){
    return(
        <>
    <div className="App">
        <h1>Login</h1>
        <Form>
                    <Form.Group>
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Enter username" required />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <button type="submit" className='btn btn-primary'>Login</button>
                </Form>
    </div>
        </>
    )
}
export default Enter;