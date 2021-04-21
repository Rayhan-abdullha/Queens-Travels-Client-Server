import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'


const Navigation = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="menu-bar bg-dark w-100">
            <Navbar className="container text-center" expand="lg">
                <Navbar.Brand href="/home">QUEENS TRAVELS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <li>
                            <Link className="mr-4 text-white" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="mr-4 text-white" to="/dashboard">Dashbord</Link>
                        </li>
                        <li>
                            <Link className="mr-4 text-white" to="#">Package</Link>
                        </li>
                        <li>
                                <Link className="mr-4 text-white" to="/blog">Galary</Link>
                        </li>
                        <li>
                            <Link className="mr-4 text-white" to="/contactUs">Contact Us</Link>
                        </li>
                        {/* <span>{loggedInUser.displayName}</span>
                        <Button className="mr-2" onClick={() => setLoggedInUser({})} href="/login" variant="outline-success">Logged Out</Button>    */}
                    </Nav>
                    <Button href="/login" variant="outline-success">Log in</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;