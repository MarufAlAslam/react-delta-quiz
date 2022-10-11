import React from 'react';
// import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink className={({ isActive }) => (isActive ? "active navbar-brand" : "inactive navbar-brand")} to="/">
                    Delta<span className='purple'>Quiz</span>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink eventKey="1" className={({ isActive }) => (isActive ? "active-link nav-link" : "inactive nav-link")} to="/" end>Home</NavLink>
                        <NavLink eventKey="2" className={({ isActive }) => isActive ? "active-link nav-link" : "inactive nav-link"} to="statistics">Statistics</NavLink>
                        <NavLink eventKey="3" className={({ isActive }) => isActive ? "active-link nav-link" : "inactive nav-link"} to="blogs">Blogs</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;