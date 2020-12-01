import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';

const Titlebar = () => {
    return (
        <>
            <Navbar style={{height: '90px'}} className="pt-4">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end font-weight-bold">
                        <img style={{marginRight : '150px'}} width = "150px" height ="80px" src={logo} alt=""/>
                        <Nav >
                            <Link className="nav-link mr-5" to="/"> Home </Link>
                            <Link to="/about" className="nav-link mr-5">About</Link>
                            <Link to="/findDoctor" className="nav-link mr-5">Find a Doctor</Link>
                            <Link to="/apponitments" className="nav-link mr-5">Get an Appoinment</Link>
                            <Nav.Link className="nav-link mr-5">Blog</Nav.Link>
                            <Link className="nav-link mr-2" to={'/superlogin'}>Login/Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Titlebar;